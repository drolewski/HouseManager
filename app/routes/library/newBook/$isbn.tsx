import getBook from "~/models/library/google/books/google-books.server";
import type {LoaderFunction} from "@remix-run/router";
import {json} from "@remix-run/router";
import {useLoaderData} from "@remix-run/react";


type LoaderData = {
    book: Awaited<ReturnType<typeof getBook>>;
};

export const loader: LoaderFunction = async ({params}) => {
    return json({
        book: await getBook(params.isbn)
    })
}

const Book = () => {
    const {book} = useLoaderData() as LoaderData;
    return (
        <>
            {book && <>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.language}</div>
                <div>{book.publishedBy}</div>
                <div>{book.publishDate}</div>
                <img src={book.image} alt=""/>
                <div>{book.isbn}</div>
            </>}
        </>
    );
}

export default Book;