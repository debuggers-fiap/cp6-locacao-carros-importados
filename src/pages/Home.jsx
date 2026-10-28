const vantagens = [
  { titulo: 'Entrega no endereço', texto: 'Levamos o carro até sua casa, hotel ou aeroporto.' },
  { titulo: 'Seguro completo', texto: 'Proteção total inclusa em todas as diárias.' },
  { titulo: 'Frota revisada', texto: 'Modelos recentes, revisados a cada locação.' },
]

function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,160,23,0.18),transparent_55%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-dourado">
            Locação premium
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl font-black leading-tight sm:text-6xl">
            Dirija o importado dos seus sonhos, sem precisar comprar.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-zinc-400">
            Esportivos, SUVs e elétricos das melhores marcas do mundo, prontos para você por dia,
            semana ou mês.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3">
        {vantagens.map((item) => (
          <div key={item.titulo} className="rounded-2xl border border-white/10 bg-grafite p-6">
            <h2 className="font-display text-lg font-bold text-dourado">{item.titulo}</h2>
            <p className="mt-2 text-sm text-zinc-400">{item.texto}</p>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Home
