"use client";

// Store
import { SUPPORTED_COUNTRIES, useCountryStore, type CountryCode } from "@/store/useCountryStore";
import { useEffect, useRef, useState } from "react";

const flagUrlFromISO = (cc: string, size: 20 | 24 = 20) => {
  const code = (cc || "").toLowerCase();
  const dims = size === 20 ? { w: 20, h: 15 } : { w: 24, h: 18 };
  return {
    src: `https://flagcdn.com/${dims.w}x${dims.h}/${code}.png`,
    srcSet: `https://flagcdn.com/${dims.w * 2}x${dims.h * 2}/${code}.png 2x`,
    width: dims.w,
    height: dims.h,
  };
};

const CountryPicker = () => {
  const { country, setCountry } = useCountryStore();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickAway = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClickAway);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickAway);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const handleSelect = (code: CountryCode) => {
    setCountry(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="bg-gray-200 dark:bg-gray-700 px-6 py-3 rounded-2xl text-xs
          font-semibold tracking-wide text-black/70 dark:text-white/70
          hover:text-black dark:hover:text-white transition-colors outline-none
          focus:outline-none flex-center_ cursor-pointer hover:bg-red-200
          dark:hover:bg-red-300/20"
        title="Select Country"
      >
        <span className="inline-flex items-center gap-2">
          {(() => {
            const f = flagUrlFromISO(country, 24);
            return (
              <img
                src={f.src}
                srcSet={f.srcSet}
                width={f.width}
                height={f.height}
                alt={`${country.toUpperCase()} flag`}
                className="inline-block rounded-[2px]"
                loading="lazy"
                decoding="async"
              />
            );
          })()}
          {/* <span>{country.toUpperCase()}</span> */}
        </span>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Countries"
          className="absolute right-0 mt-2 w-70 max-h-80 overflow-auto z-200
            bg-white dark:bg-black border border-black/10 dark:border-white/15
            rounded-xl shadow-lg p-2 outline-none focus:outline-none"
        >
          {
            SUPPORTED_COUNTRIES.map((c) => {
              const isActive = country === c.code;

              return (
                <button
                  key={c.code}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => !isActive && handleSelect(c.code)}
                  disabled={isActive}
                  className={`w-full text-left px-4 py-2.5 rounded-md outline-none focus:outline-none
                    button-text_ transition-colors flex items-center gap-4
                    ${isActive ? "text-black dark:text-white font-semibold cursor-default opacity-70" : "text-black/80 dark:text-white/80 hover:text-black dark:hover:text-white"}`}
                >
                  {
                    (() => {
                      const f = flagUrlFromISO(c.code, 24);
                      
                      return (
                        <img
                          src={f.src}
                          srcSet={f.srcSet}
                          width={f.width}
                          height={f.height}
                          alt={`${c.label} flag`}
                          className="inline-block rounded-[2px]"
                          loading="lazy"
                          decoding="async"
                        />
                      );
                    })()
                  }

                  <span>{c.label}</span>
                </button>
              );
            })
          }
        </div>
      )}
    </div>
  );
};

export default CountryPicker;
