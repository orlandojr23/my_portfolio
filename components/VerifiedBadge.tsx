type VerifiedBadgeProps = {
  className?: string;
};

/**
 * Facebook-style verification mark: a small blue circle with a
 * single white check. A personal identity mark for this site,
 * not an indication of verification by Meta/Facebook.
 */
export default function VerifiedBadge({ className = "" }: VerifiedBadgeProps) {
  return (
    <span
      role="img"
      aria-label="Verified profile"
      title="Verified profile"
      className={`inline-flex shrink-0 items-center justify-center rounded-full align-middle ${className}`}
      style={{
        width: "0.62em",
        height: "0.62em",
        backgroundColor: "#1877F2",
        fontSize: "inherit",
      }}
    >
      <svg
        viewBox="0 0 12 12"
        aria-hidden="true"
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
  );
}
