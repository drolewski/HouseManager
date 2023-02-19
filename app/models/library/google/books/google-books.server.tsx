import {prisma} from "~/db.server";
import type {Book} from "@prisma/client";
import {googleApiKey} from "~/env.server";

export type BookModel = {
    isbn: string;
    title: string;
    author: string;
    publishedBy: string;
    image: string;
    language: string;
    publishDate: string;
};

const parseBook = (book: Book): BookModel => {
    return {
        title: book.title,
        author: book.author,
        image: book.image,
        isbn: book.isbn,
        language: book.language,
        publishedBy: book.publishedBy,
        publishDate: book.publishDate?.toDateString()
    }
}

const parseBookFromApi = (isbn: string, google: any, openLibrary: any) => {
    return {
        isbn: isbn,
        title: google.items[0].volumeInfo.title,
        author: google.items[0].volumeInfo.authors.join(", "),
        language: google.items[0].volumeInfo.language,
        publishDate: openLibrary['ISBN:' + isbn].details.publish_date,
        image: openLibrary['ISBN:' + isbn].thumbnail_url,
        publishedBy: openLibrary['ISBN:' + isbn].details.publishers.join(", "),
    }
}
const googleBook = async (isbn: string) => {
    return await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${googleApiKey}`)
        .then(response => response.json());
}

const openLibrary = async (isbn: string) => {
    return await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=details`)
        .then(response => response.json())
}
const getBook = async (isbn: string | undefined): Promise<BookModel | undefined> => {
    if (!isbn) {
        return undefined;
    } else {
        const book = await prisma.book.findFirst({where: {isbn}});
        if (!!book) {
            return parseBook(book);
        }
        return parseBookFromApi(isbn, await googleBook(isbn), await openLibrary(isbn));
    }
}

export default getBook;