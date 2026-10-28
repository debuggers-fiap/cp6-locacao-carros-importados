import { useState } from 'react'
import Card from '../components/Card'
import carros from '../data/carros'

const categorias = ['Todos', ...new Set(carros.map((carro) => carro.categoria))]

function Carros() {
  const [categoria, setCategoria] = useState('Todos')

  const filtrados =
    categoria === 'Todos' ? carros : carros.filter((carro) => carro.categoria === categoria)

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Nossa frota</h1>
      <p className="mt-2 text-zinc-400">Escolha o importado ideal para a sua próxima viagem.</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {categorias.map((item) => (
          <button
            key={item}
            onClick={() => setCategoria(item)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              categoria === item
                ? 'border-dourado bg-dourado font-bold text-asfalto'
                : 'border-white/15 text-zinc-300 hover:border-dourado'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-zinc-500">{filtrados.length} carro(s) disponível(is)</p>

      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtrados.map((carro) => (
          <Card key={carro.id} {...carro} />
        ))}
      </div>
    </main>
  )
}

export default Carros
