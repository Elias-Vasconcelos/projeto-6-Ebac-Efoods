class Pratos {
  imagem: string
  titulo: string
  descricao: string
  id: number

  constructor(imagem: string, titulo: string, descricao: string, id: number) {
    this.imagem = imagem
    this.titulo = titulo
    this.descricao = descricao
    this.id = id
  }
}

export default Pratos
