import PublicationList from "./PublicationsList";


export default async function NeuroscientistPage(){
    const response = await fetch('http://localhost:3000/api/publications');
    const publications = await response.json()

    return(
        <main>
            <h1>Neuroscientist Page</h1>
            <PublicationList publications={ publications } />
        </main>
    )
}