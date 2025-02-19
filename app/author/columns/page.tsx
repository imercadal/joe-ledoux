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

/*
        <main className='relative'>
            <div className='relative mb-8 h-40 bg-red-200 justify-center'>
                <div
                        className={`absolute w-full h-full inset-0 bg-cover bg-center`}
                        style={{ backgroundImage: `url(/320_Author_Columns.webp)` }}
                />
                <h3 className='absolute inset-0  items-center'>Columns and Blogs</h3>
            </div>
            <PostList posts={ posts }/>
        </main>
*/