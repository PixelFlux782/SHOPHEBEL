"use client";

const SPLINE_SCENE_URL = "https://my.spline.design/untitled-2pIhVJy4RANEi5fN48Ysoaxs/";

export default function SplineHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(37,99,235,0.14),transparent_34%),linear-gradient(180deg,#030712_0%,#09090b_100%)] md:hidden" />

      <iframe
        src={SPLINE_SCENE_URL}
        title="Shophebel cinematic 3D background"
        className="hidden h-full w-full scale-105 opacity-100 md:block"
        frameBorder="0"
        allow="autoplay; fullscreen"
        tabIndex={-1}
      />
    </div>
  );
}
