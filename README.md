## Projeto My Reads

### Pré-requisitos

Para executar este aplicativo, você precisará do seguinte:

* Node.js
* Linha de comando (Windows: cmd / Mac: terminal)
* YARN ou NPM

### Início

1. Clone este repositório: `git clone https://github.com/mmortoni/myreads.git`
2. Mover para a pasta: `cd myreads`.<br />

Para executar:

```
yarn install
yarn start
```
ou
```
npm install
npm start
```

##### Abrir  http://localhost:3000/

### Testes
O aplicativo tem um conjunto de testes escrito em Jest & Enzyme, que pode ser executado com ```yarn test``` ou ```npm test```. 

##### Funcionalidades:

###### Página Principal

![Estante de livros](public/bookshelf.png?raw=true "Estante de livros")

###### Routing      
- [x] A página principal conecta-se à página de busca.
- [x] A página de busca conecta-se de volta à página principal.

![Routing](public/routing.png?raw=true "Routing")

###### Extras
- [x] Modal de informações sobre o livro na Estante ou na Pesquisa - clicar na imagem do livro
- [x] Link Google Books
- [x] <a href="https://github.com/yuanyan/halogen" target="_blank">Halogen</a> usado para mostrar o indicador de carregamento.
