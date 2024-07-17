class Restaurantes {
  imagem: string
  titulo: string
  nota: string
  descricao: string
  teg: string[]
  id: number

  constructor(
    imagem: string,
    titulo: string,
    nota: string,
    descricao: string,
    teg: string[],
    id: number
  ) {
    this.imagem = imagem
    this.titulo = titulo
    this.nota = nota
    this.descricao = descricao
    this.teg = teg
    this.id = id
  }
}

export default Restaurantes
