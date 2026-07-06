import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="grid place-items-center h-screen align-middle">
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-semibold">Loading...</h1>
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    </div>
  );
}
