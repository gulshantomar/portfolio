"use client";

import React from "react";
import { getFirebaseAuth, getGoogleProvider } from "@/lib/firebase";
import { signInWithPopup, onAuthStateChanged, signOut, type User } from "firebase/auth";
import { addEntry, fetchPage, type GuestbookEntry, type Page } from "@/lib/guestbook";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pin } from "lucide-react";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function GuestbookClient() {
  const [user, setUser] = React.useState<User | null>(null);
  const [entries, setEntries] = React.useState<GuestbookEntry[]>([]);
  const [cursor, setCursor] = React.useState<Page["cursor"]>(null);
  const [loading, setLoading] = React.useState(true);
  const [posting, setPosting] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [hasMore, setHasMore] = React.useState(true);

  // auth
  React.useEffect(() => {
    const auth = getFirebaseAuth();
    const unsub = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // initial page
  React.useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      const page = await fetchPage(null, 10);
      if (!mounted) return;
      setEntries(page.items);
      setCursor(page.cursor);
      setHasMore(Boolean(page.cursor));
      setLoading(false);
    })();
    return () => {
      mounted = false;
    };
  }, []);

  async function handleSignIn() {
    const auth = getFirebaseAuth();
    const provider = getGoogleProvider();
    await signInWithPopup(auth, provider);
  }

  async function handleSignOut() {
    await signOut(getFirebaseAuth());
  }

  async function handlePost(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const text = message.trim();
    if (!text) return;

    setPosting(true);
    try {
      await addEntry({
        name: user.displayName || "Anonymous",
        uid: user.uid,
        photoURL: user.photoURL,
        message: text.slice(0, 500),
      });
      setMessage("");
      // Reload the first page to reflect newest at top
      const page = await fetchPage(null, 10);
      setEntries(page.items);
      setCursor(page.cursor);
      setHasMore(Boolean(page.cursor));
    } finally {
      setPosting(false);
    }
  }

  const loadMore = React.useCallback(async () => {
    if (!hasMore || loading) return;
    setLoading(true);
    const page = await fetchPage(cursor, 10);
    setEntries((prev) => [...prev, ...page.items]);
    setCursor(page.cursor);
    setHasMore(Boolean(page.cursor));
    setLoading(false);
  }, [cursor, hasMore, loading]);

  // infinite scroll
  const sentinelRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          loadMore();
        }
      }
    }, { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [cursor, hasMore, loadMore]);

  function timeAgo(ts: number) {
    const diff = Date.now() - ts;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days <= 0) return "today";
    return `${days} d ago`;
  }

  function formatDate(ts: number) {
    const d = new Date(ts);
    const fmt = d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
    return `${fmt} (${timeAgo(ts)})`;
  }

  return (
    <div className="max-w-3xl min-h-screen mx-auto lg:px-4 px-8 pt-30">
      <Image
              src="/bg.avif"
              alt="Uses"
              width={1920}
              height={1080}
              objectFit="cover"
              className="absolute -z-100 inset-0 object-cover mask-b-from-neutral-900  opacity-20"
            />
      <div className="text-center text-sm text-white/50 mb-3">THE GUESTBOOK</div>
      <h1 className="text-center lg:text-5xl text-3xl font-bold"> <AuroraText className="lg:text-6xl text-4xl font-bold" speed={2}>
               Got a message ?
              </AuroraText> I&apos;d
              <br />
                love to hear from you! </h1><p className="text-center m-3 text-white/70 mb-8">Sign my guestbook and share your idea. You can tell me anything here!</p>

      {/* Pinned card */}
      <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)]">
        <div className="rounded-2xl bg-[#0b0b0b]/80 backdrop-blur p-4 md:p-5 border border-white/10">
          <div className="flex items-center gap-2 text-sm mb-3">
            <Badge className="bg-white/10 border-white/20 text-white px-2 py-1"><Pin className="w-3 h-3"/>Pinned</Badge>
          </div>
          <p className="text-white/90 text-sm md:text-[15px] leading-6">
            Hey there! Thanks for visiting my website. If you have a moment, I&apos;d love to hear your thoughts on my work.
            Please log in with your account to leave a comment. Thanks!
          </p>
        </div>
      </div>

      {/* Auth prompt or Composer */}
      <div className="mt-6">
        {user ? (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5 backdrop-blur">
            <div className="flex items-center gap-3 mb-4">
              {user.photoURL ? (
                <Image src={user.photoURL} alt={user.displayName || "User"} width={36} height={36} className="rounded-full" />
              ) : (
                <div className="size-9 rounded-full bg-white/10 grid place-items-center text-xs text-white/70">
                  {(user.displayName || "A").charAt(0)}
                </div>
              )}
              <div className="text-sm text-white/80">Signed in as <span className="font-medium text-white">{user.displayName || "Anonymous"}</span></div>
              <Button onClick={handleSignOut} variant="outline" className="ml-auto px-3 py-1.5 h-auto text-xs bg-white/5 border-white/15">Sign out</Button>
            </div>
            <form onSubmit={handlePost} className="flex flex-col gap-3">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 500))}
                placeholder="Write a nice message…"
                className="min-h-24 w-full rounded-lg bg-transparent border border-white/20 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20"
              />
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>{message.length}/500</span>
                <Button disabled={posting || !message.trim()} className="h-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-violet-600">Post</Button>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button onClick={handleSignIn} className="h-auto cursor-pointer px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white">
              Login
            </Button>
            <span className="text-sm text-white/70">to continue leaving a message</span>
          </div>
        )}
      </div>

      {/* List */}
      <div className="mt-8 space-y-4">
        {entries.map((e) => (
          <div key={e.id} className="rounded-xl border border-white/10 bg-black/40 p-4">
            <div className="flex items-start gap-3">
              {e.photoURL ? (
                <Image src={e.photoURL} alt={e.name} width={36} height={36} className="rounded-full" />
              ) : (
                <div className="size-9 rounded-full  bg-white/10 grid place-items-center text-xs text-white/70">
                  {e.name?.charAt(0) || "A"}
                </div>
              )}
              <div className="flex-1">
                <div className="text-sm text-white/60 mb-1">
                  <span className="font-medium text-white">{e.name}</span>
                  <span className="ml-2">{formatDate(e.createdAt)}</span>
                </div>
                <div className="text-white/90 whitespace-pre-wrap">{e.message}</div>
              </div>
            </div>
          </div>
        ))}
        {loading && <div className="text-center text-white/60 py-4">Loading…</div>}
        {!hasMore && !loading && <div className="text-center text-white/40 py-4">No more comments</div>}
        <div ref={sentinelRef} />
      </div>
    </div>
  );
}
