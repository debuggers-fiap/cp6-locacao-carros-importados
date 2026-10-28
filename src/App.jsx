import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Carros from './pages/Carros'

function NaoEncontrado() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-24 text-center">
      <h1 className="font-display text-6xl font-black text-dourado">404</h1>
      <p className="mt-4 text-zinc-400">Essa página saiu para um test drive e não voltou.</p>
      <Link to="/" className="mt-6 inline-block underline hover:text-dourado">
        Voltar para o início
      </Link>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carros" element={<Carros />} />
            <Route path="*" element={<NaoEncontrado />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
