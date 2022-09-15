import { Book } from '../utils/models/Book';
import { collections } from '../utils/database/db-connector';

export class BooksRepository {

    async createBook(book: Book) {

        if (collections.books) {
            collections.books.count({ bookid: book.bookid }).then((count) => {
                return new Promise((resolve, reject) =>{
                    if (count <= 0 && collections.books) {
                        collections.books.insertOne(book);
                        resolve("Created");
                   } else {
                       reject(`Record with ID: ${book.bookid} already exists`)
                   }
                }).catch((error)=>{
                    throw new Error("Error occured"+ error);
                });
            });
        }
    };

    async removeBook(bookid: string) {
        if (collections.books) {
            return await collections.books.deleteOne({bookid});
        }
    };

    async getAllBooks() {
        if(collections.books) {
          return  await  collections.books.find({}).toArray();
        }
    }

    async getBook(bookid: string) {
        if(collections.books) {
            return await collections.books.find({bookid}).toArray();
        }
    }

}