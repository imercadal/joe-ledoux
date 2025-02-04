import BookList from "./BookList";
import { books } from './book-data';

export default function AuthorPage(){
    return(
        <main>
            <BookList books={ books }/>
        </main>
    )
}