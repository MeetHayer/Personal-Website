export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container py-8 text-center">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          © {year} Manmeet Singh Hayer. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
