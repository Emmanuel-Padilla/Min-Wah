/** Logo oficial de Restaurant Min Wah (círculo con greca roja). No deformar ni recolorear. */
export function Wordmark({ size = "md" }: { size?: "md" | "lg" }) {
  const px = size === "lg" ? 96 : 56;
  return (
    <img
      src="/assets/logo-minwah/logo-minwah-256.png"
      srcSet="/assets/logo-minwah/logo-minwah-128.png 128w, /assets/logo-minwah/logo-minwah-256.png 256w, /assets/logo-minwah/logo-minwah-512.png 512w"
      sizes={`${px}px`}
      alt="Restaurant Min Wah"
      width={px}
      height={px}
      className={size === "lg" ? "size-24" : "-my-1 size-12 sm:size-14"}
    />
  );
}
