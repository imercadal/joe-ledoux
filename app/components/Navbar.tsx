import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="items-center">
            <div className='p-4'>
                <Link href='/'><h1>JOSEPH LEDOUX</h1></Link>
            </div>
            <div className='flex justify-center gap-16 items-baseline'>
                <Link href="/about"><h2>about</h2></Link>
                <Link href="/neuroscientist"><h2>neuroscientist</h2></Link>
                <Link href="/author"><h2>author</h2></Link>
                <Link href="/musician"><h2>musician</h2></Link>
                <Link href="/media"><h2>media</h2></Link>
            </div>
        </nav>
    )
}
