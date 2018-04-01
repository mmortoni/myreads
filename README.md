## Projeto My Reads

### Pr�-requisitos

Para executar este aplicativo, voc� precisar� do seguinte:

* Node.js
* Linha de comando (Windows: cmd / Mac: terminal)
* YARN ou NPM

### In�cio

1. Clone este reposit�rio: `git clone https://github.com/mmortoni/myreads.git`
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

## Testes
O aplicativo tem um conjunto de testes escrito em Jest & Enzyme, que pode ser executado
com ```yarn test``` ou ```npm test```. 

##### Funcionalidades:

###### P�gina Principal

![Estante de livros](public/bookshelf.png?raw=true "Estante de livros")

###### Routing      
- [x] A p�gina principal conecta-se � p�gina de busca.
- [x] A p�gina de busca conecta-se de volta � p�gina principal.

![Routing](public/routing.png?raw=true "Routing")

###### Extras
- [x] Modal de informa��es sobre o livro na Estante ou na Pesquisa - clicar na imagem do livro
- [x] Link Google Books
- [x] <a href="https://github.com/yuanyan/halogen" target="_blank">Halogen</a> usado para mostrar o indicador de carregamento.
