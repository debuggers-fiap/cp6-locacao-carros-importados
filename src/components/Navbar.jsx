function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asfalto/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <span className="font-display text-xl font-extrabold tracking-tight">
          Garagem<span className="text-dourado">Import</span>
        </span>
        <ul className="flex gap-6 text-sm font-medium uppercase tracking-wider">
          <li className="text-zinc-300 hover:text-dourado">Início</li>
          <li className="text-zinc-300 hover:text-dourado">Carros</li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
