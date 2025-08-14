export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col md:flex-row justify-between gap-3">
        <p>© {new Date().getFullYear()} TRS. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy" className="hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded px-1">Privacy</a>
          <a href="/terms" className="hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/30 rounded px-1">Terms</a>
        </div>
      </div>
    </footer>
  );
}


