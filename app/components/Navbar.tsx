import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href='/'><h2>Joseph Ledoux</h2></Link>
            </div>
            <div className='flex justify-between font-semibold'>
                <Link href="/about">About</Link>
                <Link href="/neuroscientist">Neuroscientist</Link>
                <Link href="/author">Author</Link>
                <Link href="/musician">Musician</Link>
                <Link href="/media">Media</Link>
            </div>
        </nav>
    )
}
