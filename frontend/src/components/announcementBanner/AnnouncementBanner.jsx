import React from "react";

export default function AnnouncementBanner() {
  return (
    <div>
      <div
        id="desktop-banner"
        className="hidden xl:block mx-auto py-4 px-0 md:px-12 lg:px-16 max-w-[2024px]"
      >
        <div className="drop-shadow-short flex flex-col items-center justify-center py-4 px-5 rounded text-white bg-gradient-to-r from-[#5fa698_0.03%] via-[#4840bb_73.55%] to-[#230b59_102.86%]">
          <div>
            <span className="font-bold">
              Now, earn 3.80% with RoboAdvisor Cash Account.
            </span>{" "}
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a
              aria-label="Get started with a cash account"
              href="#"
              className="z-10 relative font-normal underline"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <div
        id="mobile-banner"
        class="xl:hidden flex w-full px-4 py-5 text-white bg-gradient-to-r from-[#5fa698_0.03%] via-[#4840bb_73.55%] to-[#230b59_102.86%]"
      >
        <div className="flex-grow text-center">
          <p className="font-bold">
            Now, earn 3.80% with RoboAdvisor Cash Account.
          </p>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            aria-label="Get started with a cash account"
            href="#"
            className="z-10 relative font-normal underline"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
