export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} SAKTHI SUNDARESAN S. All rights reserved.
        </p>
        <div className="flex items-center gap-8 text-sm font-semibold text-slate-500">
          <a href="#home" className="hover:text-primary-600 transition-colors">Home</a>
          <a href="#about" className="hover:text-primary-600 transition-colors">About</a>
          <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
