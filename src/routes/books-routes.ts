import express from 'express';
import { BookService } from '../service/books-service';

const book_routes = express.Router();
const bookservice = new BookService();

book_routes.get('/', (request, response, next) => {

    let startindex = request.query.startindex;
    let pagesize = request.query.pagesize;
    bookservice.getAllBooks(startindex, pagesize).then((data)=>{
        response.send(data);
    }).catch((error)=> {
        response.send(error);
    });
    
});


book_routes.get('/:bookId', (request, response, next) => {
    bookservice.getSingleBook(request.params.bookId).then((data)=>{
        response.send(data);
    })
});


book_routes.post('/createbook', (request, response) => {
    bookservice.createBook(request).then((data: any) => {
        response.send(data);
    }).catch((error) => {
        response.send(error);
    });
});


book_routes.put('/updatebook/:bookId', (request, response) => {
    response.send(`Book ${request.params.bookId} updated`)
});

book_routes.delete('/removebook/:bookId', (request, response) => {
    bookservice.removeBook(request.params.bookId).then((data: any) => {
        response.send(data);
    }).catch((error: Error) => {
        response.send(error);
    })
});


export default book_routes;