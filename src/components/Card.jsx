function Card({ marca, modelo, diaria }) {
  return (
    <article>
      <p>{marca}</p>
      <h3>{modelo}</h3>
      <p>R$ {diaria} / dia</p>
    </article>
  )
}

export default Card
