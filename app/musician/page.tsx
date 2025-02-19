export default function MusicianPage(){
    return(
        <>
        <div className="relative h-screen w-full">

            <div
                className={`absolute inset-0 bg-cover bg-center h-4/5`}
                style={{ backgroundImage: `url(/410_Music_Amygdaloids.webp)` }}
                />
            <div className="relative flex">
                <div className="bg-red-500"></div>

            </div>
            <div className="bg-lightText"></div>
        </div>
        </>
    )
}