import { SmoothCursor } from "@/registry/magicui/smooth-cursor";

export function SmoothCursorDemo() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <SmoothCursor />
    </div>
  );
}
