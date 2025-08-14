import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[50vh] grid place-items-center">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold">404</h1>
        <p className="text-neutral-300">We couldn’t find that page.</p>
        <Link href="/" className="inline-block rounded bg-white/10 px-4 py-2 hover:bg-white/20">Back to Home</Link>
      </div>
    </div>
  );
}


