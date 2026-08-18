import { useState } from "react";

/**
 * Renders /public/logo.png if it exists. Falls back to a small,
 * professional placeholder mark so the header never looks broken
 * before a real logo asset is added.
 */
export default function Logo() {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      {!imageFailed ? (
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="Work Support logo"
          className="h-9 w-9 rounded-md object-contain"
          onError={() => setImageFailed(true)}
        />
      ) : (
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md bg-navy text-white"
          aria-hidden="true"
        >
          <span className="font-mono text-sm font-semibold leading-none">WS</span>
        </div>
      )}
      <div className="flex flex-col leading-tight">
        <span className="text-[15px] font-bold tracking-tight text-navy">
          Work
          <br />
          Support
        </span>
      </div>
    </div>
  );
}
