import { useEffect, useRef } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url: string },
        HTMLElement
      >;
    }
  }
}

const SplineViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.12.5/build/spline-viewer.js";
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(
        'script[src="https://unpkg.com/@splinetool/viewer@1.12.5/build/spline-viewer.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[500px] md:min-h-[700px] relative"
    >
      <spline-viewer
        url="https://prod.spline.design/PhnDrS3gBQzIXjD6/scene.splinecode"
        className="w-full h-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default SplineViewer;
