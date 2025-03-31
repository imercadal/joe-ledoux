import ImageGrid from '../components/ImageGrid';

export const dynamic = 'force-dynamic';

export default async function NeuroscientistPage(){
    const images = [
        {
            id: "1",
            src: "/scientistPictures/SciencePhoto_4.png",
            alt: "Picture of Molecules",
            width: 1120, 
            height: 537,
        },
        {
            id: "2",
            src: "/scientistPictures/SciencePhoto_2.png",
            alt: "Picture of Snake",
            width: 2448,
            height: 2231,
        },
        {
            id: "3",
            src: "/scientistPictures/SciencePhoto_3.png",
            alt: "Microscope",
            width: 436,
            height: 542,
        },
        {
            id: "4",
            src: "/scientistPictures/SciencePhoto_1.png",
            alt: "Microscope",
            width: 1234,
            height: 986,
        },
        {
            id: "5",
            src: "/scientistPictures/SciencePhoto_5.png",
            alt: "Microscope",
            width: 1272,
            height: 1032,
        },
        {
            id: "6",
            src: "/scientistPictures/SciencePhoto_8.png",
            alt: "Picture of Tissue under Microscope",
            width: 462,
            height: 482,
        },
        {
            id: "7",
            src: "/scientistPictures/SciencePhoto_7.png",
            alt: "Microscope",
            width: 1006,
            height: 754,
        },
    ]

    return(
        <main className='p-4 bg-lightText'>
            <ImageGrid images={images} />
        </main>
    )
}