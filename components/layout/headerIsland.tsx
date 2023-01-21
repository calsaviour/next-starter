import Router from "next/router";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import { cn } from "utils/tailwind";

const HeaderIsland: React.FC = () => {
  const { data: session } = useSession();

  const _handleClick = (e) => {
    e.preventDefault();
    if (session?.user?.email) {
      signOut();
    } else {
      Router.push("/login");
    }
  };

  return (
    <nav
      className={cn(
        "flex w-full justify-center",
        "mb-5 px-5 py-2",
        // "border-b border-slate-900",
      )}
    >
      <div
        className={cn(
          "flex h-14 w-fit items-center justify-between align-middle md:w-1/3 lg:w-1/4",
          // "md:w-1/2",
          "rounded-full border border-slate-900",
          "px-5",
        )}
      >
        <div className={cn("px-2 font-medium")}>
          <label className={cn("text-sm")}>Hello, </label>
          <label
            className={cn(
              "text-sm",
              session?.user?.email && "underline decoration-dashed",
            )}
          >
            {session?.user?.email
              ? session?.user?.email.split("@")[0]
              : "stranger"}
          </label>
        </div>
        <div
          className={cn("relative inline-block", "border-l border-slate-900")}
        >
          <button
            type="button"
            className={cn(
              "h-10 justify-center",
              "px-2 py-2",
              "text-sm font-medium text-gray-900",
              "hover:bg-gray-50",
              "focus:outline-none",
            )}
            aria-expanded="true"
            aria-haspopup="true"
            onClick={_handleClick}
          >
            {session?.user?.email ? "Signout" : "Login"}
          </button>
        </div>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
        }
      `}</style>
    </nav>
  );
};

export default HeaderIsland;
