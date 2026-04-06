import { Azeret_Mono, Cardo, Inter } from "next/font/google";
 
const azeretMono = Azeret_Mono({
    variable: "--font-azeret-mono",
    subsets: ["latin"],
    display: 'swap',
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: 'swap',
});


const cardoRegular = Cardo({ weight: '400', subsets: ['latin'], display: 'swap' })
const cardoBold = Cardo({ weight: '700', subsets: ['latin'], display: 'swap' })
 
export { azeretMono, inter, cardoRegular, cardoBold }