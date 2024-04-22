// Definindo a classe Produto
class Produto {
    // Método construtor para inicializar as propriedades id, nome, preco e estoque
    constructor(id, nome, preco, estoque) {
        this.#id = id; // Propriedade privada id
        this.#nome = nome; // Propriedade privada nome
        this.#preco = preco; // Propriedade privada preco
        this.#estoque = estoque; // Propriedade privada estoque
    }

    // Método para obter o ID do produto
    getId() {
        return this.#id;
    }

    // Método para obter o nome do produto
    getNome() {
        return this.#nome;
    }

    // Método para obter o preço do produto
    getPreco() {
        return this.#preco;
    }

    // Método para obter a quantidade em estoque do produto
    getEstoque() {
        return this.#estoque;
    }

    // Método para atualizar o preço do produto
    atualizarPreco(novoPreco) {
        this.#preco = novoPreco;
    }

    // Método para adicionar unidades ao estoque do produto
    adicionarEstoque(quantidade) {
        this.#estoque += quantidade;
    }

    // Método para remover unidades do estoque do produto
    removerEstoque(quantidade) {
        if (quantidade > this.#estoque) {
            console.log("Quantidade insuficiente em estoque.");
        } else {
            this.#estoque -= quantidade;
        }
    }
}

// Definindo a classe ProdutoImportado que herda as propriedades e métodos da classe Produto
class ProdutoImportado extends Produto {
    constructor(id, nome, preco, estoque, paisOrigem, taxaImportacao) {
        // Chamando o construtor da classe pai (Produto)
        super(id, nome, preco, estoque);
        this.#paisOrigem = paisOrigem; // Propriedade privada paisOrigem
        this.#taxaImportacao = taxaImportacao; // Propriedade privada taxaImportacao
    }

    // Método para obter o país de origem do produto importado
    getPaisOrigem() {
        return this.#paisOrigem;
    }

    // Método para obter a taxa de importação do produto importado
    getTaxaImportacao() {
        return this.#taxaImportacao;
    }
}

// Exemplo de uso do sistema de gerenciamento de produtos

// Criando uma instância da classe Produto
let produto1 = new Produto(1, "Notebook", 2500.00, 10);

// Adicionando unidades ao estoque do produto
produto1.adicionarEstoque(5);

// Removendo unidades do estoque do produto
produto1.removerEstoque(3);

// Atualizando o preço do produto
produto1.atualizarPreco(2700.00);

// Exibindo informações do produto
console.log("Produto 1:");
console.log("ID:", produto1.getId());
console.log("Nome:", produto1.getNome());
console.log("Preço:", produto1.getPreco());
console.log("Estoque:", produto1.getEstoque());

// Criando uma instância da classe ProdutoImportado
let produtoImportado1 = new ProdutoImportado(2, "Smartphone", 1200.00, 20, "China", 50.00);

// Exibindo informações do produto importado
console.log("\nProduto Importado 1:");
console.log("ID:", produtoImportado1.getId());
console.log("Nome:", produtoImportado1.getNome());
console.log("Preço:", produtoImportado1.getPreco());
console.log("Estoque:", produtoImportado1.getEstoque());
console.log("País de Origem:", produtoImportado1.getPaisOrigem());
console.log("Taxa de Importação:", produtoImportado1.getTaxaImportacao());
