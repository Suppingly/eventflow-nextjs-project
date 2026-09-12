export default function Header() {
  return (
    <header className="border-b border-slate-600 bg-slate-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="text-xl font-bold text-white">EventFlow</span>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#events">События</a>
          <a href="#about">О проекте</a>
        </nav>
      </div>
    </header>
  )
}