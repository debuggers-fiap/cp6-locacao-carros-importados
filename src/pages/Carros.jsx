import Card from '../components/Card'
import carros from '../data/carros'

function Carros() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display text-4xl font-extrabold">Nossa frota</h1>
      <p className="mt-2 text-zinc-400">Escolha o importado ideal para a sua próxima viagem.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {carros.map((carro) => (
          <Card key={carro.id} {...carro} />
        ))}
      </div>
    </main>
  )
}

export default Carros
