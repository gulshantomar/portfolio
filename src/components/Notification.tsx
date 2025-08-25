"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Payment received",
    description: "Recieved $XX",
    time: "15m ago",

    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Authentication",
    description: " New login detected",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New Project",
    description: "Due Date: MM/DD/YYYY",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Client Feedback",
    description: "New feedback received",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 500 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] border bg-white/7 border-white/20 cursor-pointer  overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // dark styles
        "transform-gpu dark:bg-transparent backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function NotificationList({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex lg:h-[500px] h-[300px] w-full lg:p-2 flex-col overflow-hidden px-20",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      

      <div className="pointer-events-none absolute -z-100 bottom-0 h-1/4"></div>
    </div>
  );
}
