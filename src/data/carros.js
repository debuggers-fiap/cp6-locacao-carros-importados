import porsche911 from '../assets/carros/porsche-911.jpg'
import bmwM4 from '../assets/carros/bmw-m4.jpg'
import mercedesGle from '../assets/carros/mercedes-gle.jpg'
import audiRsEtron from '../assets/carros/audi-rs-etron.jpg'
import volvoXc90 from '../assets/carros/volvo-xc90.jpg'
import lexusLc500 from '../assets/carros/lexus-lc500.jpg'
import defender110 from '../assets/carros/defender-110.jpg'
import mustangGt from '../assets/carros/mustang-gt.jpg'
import teslaModelS from '../assets/carros/tesla-model-s.jpg'

const carros = [
  { id: 1, imagem: porsche911, marca: 'Porsche', modelo: '911 Carrera S', origem: 'Alemanha', ano: 2025, potencia: 480, categoria: 'Esportivo', diaria: 4200, cor: 'from-red-700 to-red-950', destaque: true },
  { id: 2, imagem: bmwM4, marca: 'BMW', modelo: 'M4 Competition', origem: 'Alemanha', ano: 2025, potencia: 530, categoria: 'Esportivo', diaria: 3100, cor: 'from-sky-600 to-blue-950' },
  { id: 3, imagem: mercedesGle, marca: 'Mercedes', modelo: 'GLE 450 Coupé', origem: 'Alemanha', ano: 2024, potencia: 381, categoria: 'SUV', diaria: 2600, cor: 'from-zinc-500 to-zinc-900', destaque: true },
  { id: 4, imagem: audiRsEtron, marca: 'Audi', modelo: 'RS e-tron GT', origem: 'Alemanha', ano: 2025, potencia: 646, categoria: 'Elétrico', diaria: 3800, cor: 'from-emerald-600 to-emerald-950' },
  { id: 5, imagem: volvoXc90, marca: 'Volvo', modelo: 'XC90 Recharge', origem: 'Suécia', ano: 2024, potencia: 462, categoria: 'SUV', diaria: 1900, cor: 'from-slate-500 to-slate-900' },
  { id: 6, imagem: lexusLc500, marca: 'Lexus', modelo: 'LC 500', origem: 'Japão', ano: 2024, potencia: 477, categoria: 'Esportivo', diaria: 3400, cor: 'from-amber-600 to-orange-950', destaque: true },
  { id: 7, imagem: defender110, marca: 'Land Rover', modelo: 'Defender 110', origem: 'Inglaterra', ano: 2025, potencia: 400, categoria: 'SUV', diaria: 2800, cor: 'from-lime-700 to-stone-900' },
  { id: 8, imagem: mustangGt, marca: 'Ford', modelo: 'Mustang GT', origem: 'Estados Unidos', ano: 2025, potencia: 488, categoria: 'Esportivo', diaria: 2200, cor: 'from-yellow-500 to-yellow-900' },
  { id: 9, imagem: teslaModelS, marca: 'Tesla', modelo: 'Model S Plaid', origem: 'Estados Unidos', ano: 2024, potencia: 1020, categoria: 'Elétrico', diaria: 3600, cor: 'from-violet-600 to-indigo-950' },
]

export default carros
