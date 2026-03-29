export default function Footer() {
  return (
    <footer className="mt-auto py-4 px-6 text-center text-xs text-slate-400 border-t border-slate-200">
      © {new Date().getFullYear()} <span className="font-semibold text-slate-500">WorkKeeper</span> — HR Management System. All rights reserved.
    </footer>
  );
}
