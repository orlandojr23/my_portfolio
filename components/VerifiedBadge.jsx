/**
 * Facebook-style verification mark: a small blue circle with a
 * single white check. A personal identity mark for this site,
 * not an indication of verification by Meta/Facebook.
 */
export default function VerifiedBadge({ className = "" }) {
  return (
    <span
      className={`group relative inline-flex cursor-pointer items-center justify-center align-middle focus:outline-none ${className}`}
      tabIndex={0}
      role="button"
      aria-label="Verified by Orlando himself"
    >
      <span
        className="inline-flex shrink-0 items-center justify-center rounded-full"
        style={{
          width: "0.62em",
          height: "0.62em",
          backgroundColor: "#1877F2",
          fontSize: "inherit",
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 12 12"
          focusable="false"
          style={{ width: "58%", height: "58%" }}
        >
          <path
            d="M2.5 6.3l2.4 2.4 4.6-5.2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {/* Tooltip */}
      <span
        className="pointer-events-none absolute top-full mt-2 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--foreground)] px-2 py-1 text-[11px] sm:text-[13px] font-medium tracking-wide text-[var(--background)] opacity-0 shadow-sm transition-all duration-200 group-hover:translate-y-1 group-hover:opacity-100 group-focus:translate-y-1 group-focus:opacity-100 group-active:translate-y-1 group-active:opacity-100"
        aria-hidden="true"
      >
        Verified by Orlando himself
      </span>
    </span>
  );
}
