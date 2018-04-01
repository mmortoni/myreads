import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme'
import App from '../components/App';
import { get, getAll, update, search } from '../api/BooksAPI';

describe('Testes Udacity My Reads', () => {
  let bookIds = []
  let bookId

  beforeEach(() => {
    bookId = []
  })

  it('exibe a aplicação sem erros', () => {
    const wrapper = shallow(<App />)
    console.log(wrapper)
  });

  describe('BooksAPI', () => {
    it("obtém todos os livros com getAll", async function () {
      const response = await getAll()
      bookIds = response.map(book => book.id)
      expect(response).toBeInstanceOf(Array);
    });
    it("obtém um livro com get", async function () {
      const ind = Math.floor((Math.random() * bookIds.length) + 0)
      bookId[0] = bookIds[ind]
      const response = await get(bookId[0])
      expect(response.id).toBe(bookId[0])
    });
    it("atualiza a estante de um livro com update", async function () {
      const ind = Math.floor((Math.random() * bookIds.length) + 0)
      bookId[0] = bookIds[ind]
      const book = await get(bookId[0])
      const response = await update(book, 'none')
      expect(Object.values(response)).not.toEqual(
        expect.arrayContaining(bookId)
      )
    });
    it("pesquisas com search", async function () {
      const maxResults = 1;
      const response = await search('javascript', maxResults)
      expect(response.length).toBeGreaterThan(1)
    });
  });
});
