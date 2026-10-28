function Card({ marca, modelo, diaria, cor }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-grafite transition hover:-translate-y-1 hover:border-dourado/50">
      <div className={`flex h-40 items-end bg-gradient-to-br p-4 ${cor}`}>
        <span className="font-display text-5xl font-black uppercase text-white/20">{marca}</span>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-dourado">{marca}</p>
        <h3 className="font-display mt-1 text-xl font-bold">{modelo}</h3>
        <p className="mt-4 text-2xl font-extrabold">
          R$ {diaria}
          <span className="text-sm font-normal text-zinc-400"> / dia</span>
        </p>
      </div>
    </article>
  )
}

export default Card
