import Link from "next/link";

export default function NotFound() {
    return (
        <main className='text-center'>
            <h3 className='text-3xl'>There was a problem.</h3>
            <p>We couldn&apost find the page you were looking for.</p>
            <p>Got back to the <Link href='/musician'>Musician Page</Link></p>
        </main>
    )
}
