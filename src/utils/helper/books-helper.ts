import { Book } from "../models/Book";

const EMPTY_STRING: string  = '';

export class BooksHelper {

    mapInputToBookModel = (input: any): Book => {
       
        let book: Book = {
            bookid: input.bookid ? input.bookid : EMPTY_STRING,
            name : input.name ? input.name : EMPTY_STRING,
            author : input.author ? input.author : EMPTY_STRING,
            price : input.price ? input.price : EMPTY_STRING,
            publisher: input.publisher ? input.publisher : EMPTY_STRING,
            yearofrelease: input.yearofrelease ? input.yearofrelease : EMPTY_STRING,
            yearofrevision: input.yearofrevision ? input.yearofrevision : EMPTY_STRING,
            version: input.version ? input.version : EMPTY_STRING
        }
        
        return book;
    }

    mapBookModelToOutput = (book : Book) : any => {
        let output: any  = {
            bookid: book.bookid,
            name : book.name,
            author : book.author,
            price : book.price,
            publisher: book.publisher,
            yearofrelease: book.yearofrelease,
            yearofrevision: book.yearofrevision,
            version: book.version
        }

        return output;
    }
}