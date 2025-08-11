import { addDoc, collection, getDocs, limit, orderBy, query, startAfter, Timestamp, DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { getDb } from "./firebase";

export type GuestbookEntry = {
  id: string;
  name: string;
  uid: string;
  photoURL?: string | null;
  message: string;
  createdAt: number; // epoch ms
};

const COLLECTION = "guestbookEntries";

export async function addEntry(entry: Omit<GuestbookEntry, "id" | "createdAt">) {
  const db = getDb();
  const ref = collection(db, COLLECTION);
  const now = Date.now();
  await addDoc(ref, {
    ...entry,
    createdAt: now,
  });
}

export type Page = {
  items: GuestbookEntry[];
  cursor: QueryDocumentSnapshot<DocumentData> | null;
};

export async function fetchPage(cursor: QueryDocumentSnapshot<DocumentData> | null, pageSize = 10): Promise<Page> {
  const db = getDb();
  const ref = collection(db, COLLECTION);
  const q = cursor
    ? query(ref, orderBy("createdAt", "desc"), startAfter(cursor), limit(pageSize))
    : query(ref, orderBy("createdAt", "desc"), limit(pageSize));

  const snap = await getDocs(q);
  const items: GuestbookEntry[] = snap.docs.map((d) => {
    const data = d.data() as {
      name: string;
      uid: string;
      photoURL?: string | null;
      message: string;
      createdAt: number | Timestamp | undefined;
    };
    return {
      id: d.id,
      name: data.name,
      uid: data.uid,
      photoURL: data.photoURL ?? null,
      message: data.message,
      createdAt: typeof data.createdAt === "number" ? data.createdAt : (data.createdAt as Timestamp)?.toMillis?.() ?? 0,
    };
  });
  const nextCursor = snap.docs.length ? snap.docs[snap.docs.length - 1] : null;
  return { items, cursor: nextCursor };
}
