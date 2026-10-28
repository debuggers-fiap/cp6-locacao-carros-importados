function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-white/10 bg-grafite">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold">
            Garagem<span className="text-dourado">Import</span>
          </p>
          <p className="mt-2 text-sm text-zinc-400">
            Locação de carros importados com entrega no endereço que você escolher.
          </p>
        </div>
        <div className="text-sm text-zinc-400">
          <p className="mb-2 font-semibold uppercase tracking-wider text-zinc-200">Contato</p>
          <p>contato@garagemimport.com.br</p>
          <p>(11) 4002-8922</p>
        </div>
        <div className="text-sm text-zinc-400">
          <p className="mb-2 font-semibold uppercase tracking-wider text-zinc-200">Horário</p>
          <p>Seg a Sex: 8h às 20h</p>
          <p>Sáb: 9h às 14h</p>
        </div>
      </div>
      <p className="border-t border-white/5 py-4 text-center text-xs text-zinc-500">
        © {ano} Garagem Import. Projeto acadêmico - FIAP 1ESPG.
      </p>
    </footer>
  )
}

export default Footer
