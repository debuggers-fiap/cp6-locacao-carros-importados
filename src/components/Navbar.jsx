import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Início' },
  { to: '/carros', label: 'Carros' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-asfalto/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="font-display text-xl font-extrabold tracking-tight">
          Garagem<span className="text-dourado">Import</span>
        </Link>
        <ul className="flex gap-6 text-sm font-medium uppercase tracking-wider">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end
                className={({ isActive }) =>
                  isActive ? 'text-dourado' : 'text-zinc-300 transition hover:text-dourado'
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
