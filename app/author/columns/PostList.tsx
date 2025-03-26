import { Post } from './post-data';
import Image from 'next/image';

export default function PostList({ posts }: { posts: Post[]}) {
    const psychologyTodayPosts = posts.filter((post) => post.mediaCompany === "Psychology Today");
    const newYorkTimesPosts = posts.filter((post) => post.mediaCompany === "New York Times");
    const personalBlogPosts = posts.filter((post) => post.mediaCompany === "Personal Blog");

    return(
        <main className='container mx-auto pb-12 pl-6 sm:pl-0 flex flex-col sm:flex-row gap-8 max-w-4xl items-start justify-center'> 
            <div className='w-full sm:w-7/12 pl-0 sm:pl-12'>
                <div className='mb-10'>
                    <div className='flex gap-x-4 mb-4 items-center'>    
                        <Image alt="New York Times Logo" src='/960_NYTimes.png' className="size-10 rounded-full bg-gray-50" width={10} height={10} />
                        <div>
                            <h4 className="mt-3 font-bold group-hover:text-gray-600">Opinion Column & Opinionator</h4>
                            <h4>New York Times</h4>
                        </div>
                    </div>
                    {newYorkTimesPosts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className='flex items-left'>
                                <a href={post.urlToPost}>
                                    <h5 className="mt-3 inline-flex font-bold group-hover:text-gray-600">
                                        {post.title}
                                    </h5>
                                    <span className="ml-1 text-xs text-darker">
                                        {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </a>    
                            </div>
                        </article>
                    ))}
                </div>
                <div>
                    <div className='flex gap-x-4 mb-4 items-center'>    
                        <Image alt="Psychology Today Logo" src='/970_PsycToday.png' className="size-10 rounded-full bg-gray-50" width={10} height={10} />
                        <div>
                            <h4 className="mt-3 font-bold group-hover:text-gray-600">I Got a Mind to Tell You</h4>
                            <h4>Psychology Today</h4>
                        </div>
                    </div>
                    {psychologyTodayPosts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <div className="flex justify-between items-center w-full gap-2">
                        <a href={post.urlToPost}>
                            <h5 className="mt-3 inline-flex font-bold group-hover:text-gray-600">
                                {post.title}
                            </h5>
                            <span className="ml-1 text-xs text-darker whitespace-nowrap">
                                {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                        </a>    
                    </div>
                </article>
            ))}
                </div>
            </div>

            <div className='w-full sm:w-5/12'>
                    <div className='flex gap-x-4 mb-4 items-center'>    
                        <Image alt="Personal Blog Logo" src='/950_Blogspot.png' className="size-10 rounded-full bg-gray-50" width={10} height={10} />
                        <div>
                            <h4 className="mt-3 font-bold group-hover:text-gray-600">For What It&apos;s Worth</h4>
                            <h4>Personal Blog</h4>
                        </div>
                    </div>
                    {personalBlogPosts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className='flex items-left'>
                                <a href={post.urlToPost}>
                                    <h5 className="mt-3 inline-flex font-bold group-hover:text-gray-600">
                                        {post.title}
                                    </h5>
                                    <span className="ml-1 text-xs text-darker">
                                        {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </span>
                                </a>    
                            </div>
                        </article>
                    ))}
                </div>


          </main>
      )
  }

/* 
            <div className="flex mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <Image alt="Psychology Today Logo" src='/four-realms.png' className="size-10 rounded-full bg-gray-50" width={10} height={10} />
                <div>
                    <h2 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">I Got a Mind to Tell You</h2>
                    <h3>Psychology Today</h3>
                </div>
            {psychologyTodayPosts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500">
                        {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                </div>
                <div className="group relative">
                    <a href={post.urlToPost}>
                    <h5 className="mt-3 text-sm/6 font-bold text-gray-900 group-hover:text-gray-600">
                        <span className="absolute inset-0" />
                        {post.title}
                    </h5>
                    </a>
               </div>
                
                </article>
            ))}
            
            <h2>Opinion Column & Opinionator</h2>
            <h3>New York Times</h3>
            {newYorkTimesPosts.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                    <div className="text-gray-500">
                        {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <a
                    href={post.urlToPost}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                    {post.mediaCompany}
                    </a>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.urlToPost}>
                        <span className="absolute inset-0" />
                        {post.title}
                    </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima placeat, tenetur sint quasi ullam quisquam harum rerum itaque dolore cupiditate veritatis omnis impedit voluptate saepe non aspernatur fugit culpa possimus excepturi temporibus nemo dolorem! Amet itaque sequi quidem, expedita harum porro facilis necessitatibus praesentium veritatis accusantium nesciunt? Id, harum repellendus?</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm/6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        Author name with link
                    </p>
                    </div>
                </div>
                </article>
            ))}
            </div>






            {posts.map(post => (
                <div key={post.id}>
                    <a href={ post.urlToPost }>
                        <h3>{post.title} {post.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</h3>
                        <p>{post.mediaCompany}</p>
                    </a>
                </div>
            ))}        
*/