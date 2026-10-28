const formatarPreco = (valor) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })

function Card({ marca, modelo, origem, ano, potencia, categoria, diaria, cor }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-grafite transition hover:-translate-y-1 hover:border-dourado/50">
      <div className={`relative flex h-40 items-end bg-gradient-to-br p-4 ${cor}`}>
        <span className="absolute right-3 top-3 rounded-full bg-black/40 px-3 py-1 text-xs font-medium">
          {categoria}
        </span>
        <span className="font-display text-5xl font-black uppercase text-white/20">{marca}</span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-dourado">
          {marca} · {origem}
        </p>
        <h3 className="font-display mt-1 text-xl font-bold">{modelo}</h3>

        <ul className="mt-3 flex gap-4 text-sm text-zinc-400">
          <li>{ano}</li>
          <li>{potencia} cv</li>
        </ul>

        <div className="mt-auto flex items-end justify-between pt-5">
          <p className="text-2xl font-extrabold">
            {formatarPreco(diaria)}
            <span className="text-sm font-normal text-zinc-400"> / dia</span>
          </p>
          <button className="rounded-lg bg-dourado px-4 py-2 text-sm font-bold text-asfalto transition hover:brightness-110">
            Reservar
          </button>
        </div>
      </div>
    </article>
  )
}

export default Card
