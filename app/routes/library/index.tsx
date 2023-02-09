import {json} from "@remix-run/cloudflare";
import getOwnedBooks from "~/models/library/ownedBooks/ownedBooks.server";
import {Link, useLoaderData} from "@remix-run/react";

export const loader = async () => {
    return json({ownedBooks: await getOwnedBooks()});
};

const Library = () => {
    const {ownedBooks} = useLoaderData<typeof loader>();
    return (
        <div className="h-full">
            {
                ownedBooks.length > 0 ? <div></div> : <NoBooks></NoBooks>
            }
        </div>
    );
};

const NoBooks = () => {
    return (
        <div className="text-3xl mt-10">You don't have books yet. Try to <Link to="newBook"><span className="hover:text-amber-500"> add new book</span></Link></div>
    );
}

export default Library;