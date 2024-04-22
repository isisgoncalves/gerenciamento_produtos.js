/*Sistema de Gerenciamento de Produtos

Desenvolva um sistema de gerenciamento de produtos em JavaScript utilizando classes. O sistema deve ser capaz de realizar as seguintes operações:

- Criar uma classe Produto com as seguintes propriedades privadas: (** a partir do ES11 - EcmaScript 2020 que para definir propriedades privadas convencionou-se usar o caracter # e, também, é possivel fazer uso de qualuer método publico para lidar com encapsulamento.)
	id: um identificador único do produto (número inteiro)
	nome: o nome do produto (string)
	preco: o preço do produto (número decimal)
	estoque: a quantidade em estoque do produto (número inteiro)
Implementar um construtor na classe Produto que permita inicializar as propriedades id, nome, preco e estoque no momento da criação do objeto.

Implementar métodos na classe Produto para:
	Obter o ID do produto.
	Obter o nome do produto.
	Obter o preço do produto.
	Obter a quantidade em estoque do produto.
	Atualizar o preço do produto.
	Adicionar unidades ao estoque do produto.
	Remover unidades do estoque do produto.

Criar instâncias da classe Produto e realizar operações como adicionar unidades ao estoque, remover unidades do estoque e atualizar o preço.
Testar o sistema criado com exemplos de uso, demonstrando a funcionalidade de todas as operações implementadas.

Crie, também, uma classe chamada ProdutoImportado, que herda as propriedades e métodos da classe Produto, e adiciona uma nova propriedade específica para produtos importados, como por exemplo, o país de origem e taxa de importação de um determinado produto.
*/

//Classe Produto com propriedades privadas
class Produto{
    //Tive que instanciar os valores, pois o console não estava lendo-os fora da classe. 
    #id
    #nome
    #preco
    #estoque

  //Método construtor para inicializar as propriedades privadas
  constructor(id, nome, preco, estoque){
    //Propriedades privadas
    this.#id = id
    this.#nome = nome  
    this.#preco = preco
    this.#estoque = estoque
  }

  //Método Get para obter propriedades
  getId(){
    return this.#id
  }
  getNome(){
    return this.#nome 
  }
  getPreco(){
    return this.#preco 
  }
  getEstoque(){
    return this.#estoque
  }

  //Método para atualizar o preço do produto
  atualizaPreco(novoPreco){
    this.#preco = novoPreco
    console.log(`Preço de ${this.#nome} atualizado para R$ ${this.#preco}`)
  }

  //Método para adicionar unidades ao estoque
  addEstoque(qtd){
    this.#estoque += qtd
    console.log(`${qtd} unidades adicionadas ao estoque de ${this.#nome}`)
  }

  //Método para remover unidades do estoque
  removeEstoque(qtd){
    if (qtd > this.#estoque){
      console.log('Estoque Insuficiente')
    } else{
        this.#estoque -= qtd
        console.log(`${qtd} unidades removidas do estoque de ${this.#nome}`)
      }
    }
    
  }

  //Nova classe ProdutoImportado - que herda propriedades e métodos da classe Produto
  class ProdutoImportado extends Produto{
    #paisDeOrigem
    #txImport

    constructor(id, nome, preco, estoque, paisDeOrigem, txImport){
      //Chamando o construtor da classe Produto
      super(id, nome, preco, estoque)
      this.#paisDeOrigem = paisDeOrigem
      this.#txImport = txImport
    }

    //Método Get para obter propriedades
    getPaisDeOrigem(){
      return this.#paisDeOrigem
    }
    getTxImport(){
      return this.#txImport
    }
    origemPais(novoPais){
      this.#paisDeOrigem = novoPais
      console.log(`País de origem de ${this.nome} é: ${this.#paisDeOrigem}.`)
  }
}

//Instâncias de Produto
 let produto = new Produto(22, 'Smartphone', 2999.00, 150)
 produto.atualizaPreco (2599.00)
 produto.addEstoque (50)
 produto.removeEstoque (89)

//Instância de Produto Importado
let produto2 = new Produto(25, 'Smartphone X', 5999.00, 5)
produto2.atualizaPreco (5599.00)
produto2.addEstoque (50)
produto2.removeEstoque (45)