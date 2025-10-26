"use client";
import React from "react";

export default function RunningBar() {
  const messages = [
    "We deal in all types of batteries, inverters, and UPS",
    "We offer the best prices in all segments",
    "We provide the best customer support",
    "We are the one-stop solution for all power backup products",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 text-white py-3 shadow-lg">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          white-space: nowrap;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .bullet-separator {
          color: rgb(255, 255, 255);
          margin: 0 0.5rem;
          font-size: 0.6rem; /* very small bullet */
        }

        /* Faster on smaller devices */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>

      {/* Double the content — ensures continuous loop with no gap */}
      <div className="flex w-max animate-marquee">
        {[...messages, ...messages].map((text, i) => (
          <React.Fragment key={i}>
            <span className="mx-10 text-[12px] tracking-wide">{text}</span>
            {i < messages.length * 2 - 1 && (
              <span className="bullet-separator">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}