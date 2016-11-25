'use strict'

const Book = use('App/Model/Book')
const Rack = use('App/Model/Rack')
const Category = use('App/Model/Category')

class BookController {

  * index(request, response) {
    const book = yield Book.query().with('category', 'rack').fetch()
    const cat = yield Category.all()
    const rack = yield Rack.all()
    // console.log(books.toJSON())
    yield response.sendView('book.index', {books: book.toJSON(), categories: cat.toJSON(), racks: rack.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('book.create1')
  }

  * store(request, response) {
    // console.log('a', request.all())
    const data = {
      uid_book: Date.now(),
      title: request.input('title').toUpperCase(),
      author: request.input('author').toUpperCase(),
      publisher: request.input('publisher').toUpperCase(),
      isbn: request.input('isbn'),
      year: request.input('year'),
      stock: request.input('stock'),
      rack_id: request.input('rack_id'),
      category_id: request.input('category_id'),
    }
    const check = Book.create(data);
    if (check) {
      request.with({message: 'Successfuly added'}).flash()
      yield response.sendView('book.index')
    } else {
      response.redirect('back')
    }
  }

  * show(request, response) {
    yield response.send('Welcome')
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = BookController
