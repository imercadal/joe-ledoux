import Link from "next/link";

export default function NotFound() {
    return (
        <main className='text-center p-12 gap-2'>
            <h3 className='mb-5 text-3xl text-dark'>There was a problem.</h3>
            <p>We couldn’t find the page you were looking for.</p>
            <p>Got back to the <Link href='/' className="text-accent font-bold">Home Page</Link></p>
        </main>
    )
}
