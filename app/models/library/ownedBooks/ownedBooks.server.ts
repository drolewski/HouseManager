import {prisma} from "~/db.server";
import type {OwnedBook} from "@prisma/client";

const getOwnedBooks = async (): Promise<Array<OwnedBook>> => {
    return prisma.ownedBook.findMany();
}

export default getOwnedBooks;