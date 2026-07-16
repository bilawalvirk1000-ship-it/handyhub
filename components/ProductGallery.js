"use client";

import { useState } from "react";

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0);
  const list = images && images.length ? images : ["/og-default.svg"];

  return (
    <div>
      <div className="overflow-hidden rounded-2xl bg-slate-50 ring-1 ring-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={list[active]}
          alt={alt}
          className="aspect-square w-full object-cover"
        />
      </div>
      {list.length > 1 && (
        <div className="mt-3 grid grid-cols-5 gap-2">
          {list.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              className={`overflow-hidden rounded-lg ring-1 ${
                active === i ? "ring-brand ring-2" : "ring-slate-200"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="aspect-square w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
