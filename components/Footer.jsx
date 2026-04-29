export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 [.light_&]:border-black/10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Mushfiq Iqbal Araf. Built with Next.js, motion, and careful pixels.</p>
        <a href="#home" className="focus-ring rounded-full px-4 py-2 transition hover:bg-white/[0.06] hover:text-foreground [.light_&]:hover:bg-black/[0.05]">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
