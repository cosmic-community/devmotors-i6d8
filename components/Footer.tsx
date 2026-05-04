export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Devmotors. Built with Next.js & Cosmic CMS.
        </p>
      </div>
    </footer>
  );
}