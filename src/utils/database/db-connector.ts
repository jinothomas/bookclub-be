import * as mongoDB  from 'mongodb';
import * as dotenv from "dotenv";

const EMPTY_STRING : string = '';
const connectionString = process.env.DB_CONN_STRING || 'mongodb://localhost:27017/bookclub';
const databasename = process.env.DB_NAME || 'bookclub';

const books = process.env.BOOK_COLLECTION || 'books';
const users = process.env.USERS_COLLECTION || 'users';

export const collections: { books?: mongoDB.Collection, users?: mongoDB.Collection } = {}

export async function connectToDatabase () {
  dotenv.config();

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);
          
  await client.connect();
      
  const db: mongoDB.Db = client.db(databasename);
 
  const bookscollection: mongoDB.Collection = db.collection(books);
  const userscollection: mongoDB.Collection = db.collection(users);

  collections.books = bookscollection;
  collections.users = userscollection;
     
  console.log(`Successfully connected to database: ${db.databaseName}`);
}