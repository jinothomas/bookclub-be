import { BooksRepository } from "../repository/books-repository";
import { BooksHelper } from "../utils/helper/books-helper";
import { Book } from "../utils/models/Book";

const repository = new BooksRepository;
const helper = new BooksHelper;

export class BookService {
    
    public createBook =  async (request : any) => {

        let book: Book =  helper.mapInputToBookModel(request.body);
        await repository.createBook(book);

    }

    public getAllBooks = async (startindex: any, pagesize : any) => {
        return await repository.getAllBooks();
    }

    public getSingleBook = async (bookId: string) => {
        return await repository.getBook(bookId); 
    }

    public updateBook = async (input : any) => {
        return 'update book';    
    }

    public removeBook = async (bookId : string) => {
       await repository.removeBook(bookId);
    }
}
