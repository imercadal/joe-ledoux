import PostList from './PostList';
import { posts } from './post-data';

export default function ColumnPage(){
    return(
        <main className="bg-lightText">
            <div className="relative mb-8 h-40 bg-cover bg-center bg-[url('/320_Author_Columns.webp')] flex items-center justify-center">
                <h3 className="font-bold">COLUMNS AND BLOGS</h3>
            </div>
            <PostList posts={ posts }/>
        </main>
    )
}