import React from "react";

export default function PageBanner({ image, chips = [] }) {
  return (
    <header className="relative overflow-hidden bg-blue-950">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90 animate-kenburns"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/40 to-blue-950/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-blue-950/50" />
      <div aria-hidden="true" className="absolute inset-0 bg-grid-blue opacity-25" />

      <div className="relative pt-20">
        <div className="mx-auto flex h-[240px] max-w-7xl flex-col justify-end px-4 pb-8 sm:h-[300px] sm:px-6 sm:pb-10 md:h-[360px]">
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {chips.map((chip, i) => (
                <span
                  key={chip}
                  className={`animate-fade-up stagger-${i + 1} inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-blue-50 shadow-lg shadow-blue-950/40 backdrop-blur-md sm:text-xs`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                  {chip}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent"
      />
    </header>
  );
}
