# PetAdote

**PetAdote** é uma plataforma para adoção de animais e para anunciar animais que precisam de um novo lar. O site permite que os usuários vejam os animais disponíveis para adoção, anunciem novos animais e aprendam mais sobre a missão e atividades da organização.

## Estrutura do Projeto

O projeto consiste em três arquivos principais:

1. **index.html**: Arquivo principal que define a estrutura e o layout da página.
2. **styles.css**: Arquivo de estilo para personalizar a aparência da página.
3. **scripts.js**: Arquivo de script que contém a lógica para interagir com a API e manipular o DOM.

## Dependências

O projeto utiliza Bootstrap 5 para o layout e estilo. As dependências são carregadas diretamente da CDN:

- [Bootstrap CSS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css)
- [Bootstrap JS](https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js)

## Estrutura do HTML

O `index.html` contém as seguintes seções principais:

- **Cabeçalho**: Inclui o logo e o menu de navegação.
- **Banner**: Apresenta uma imagem e uma mensagem de boas-vindas.
- **Adote um Animal**: Seção para exibir animais disponíveis para adoção.
- **Anunciar um Animal**: Formulário para adicionar novos animais ao banco de dados.
- **Sobre Nós**: Seção que descreve a missão e o trabalho da organização.

## Funcionalidades

### Listar Animais para Adoção

A função `listarAnimaisParaAdocao` no `scripts.js` faz uma solicitação GET para a API e atualiza o conteúdo da seção "Adote um Animal" com os dados recebidos.

### Cadastrar um Novo Animal

O formulário na seção "Anunciar um Animal" permite que os usuários adicionem um novo animal ao banco de dados. A função `cadastrarAnimalzinho` no `scripts.js` envia os dados do formulário para a API e atualiza a lista de animais disponíveis.

### Adotar um Animal

Cada animal listado possui um botão "Adotar" que, ao ser clicado, envia uma solicitação DELETE para a API para remover o animal da lista de adoção. A função `adotar` é responsável por essa ação.

## Configuração do Ambiente

Para rodar o projeto localmente, você precisará de um servidor local que forneça a API. As solicitações HTTP no `scripts.js` são feitas para `http://127.0.0.1:5000`, que deve ser o endereço do servidor Flask.

1. **Inicie o servidor Flask** que deve estar configurado para fornecer os endpoints `/animalzinhos` (GET, POST, DELETE).

2. **Abra o arquivo `index.html`** em um navegador para visualizar o site.

**PetAdote**: Juntos podemos fazer a diferença na vida dos animais!
