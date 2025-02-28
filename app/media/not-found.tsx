import Link from "next/link";

export default function NotFound() {
    return (
        <main className='text-center'>
            <h3 className='text-3xl'>There was a problem.</h3>
            <p>We couldn’t find the page you were looking for.</p>
            <p>Got back to the <Link href='/'>Home Page</Link></p>
        </main>
    )
}
