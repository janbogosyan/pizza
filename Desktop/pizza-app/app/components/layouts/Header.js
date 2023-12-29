
import Link from "next/link";


export const Header = () => {
    return (
        <header className="flex items-center justify-between">
            <nav className="flex items-center gap-8 text-gray-500 font-semibold">
                <Link className="text-primary font-semibold text-2xl" href={'/'}>
                    PIZZA
                </Link>
                <Link href={'/'}>Home</Link>
                <Link href={''}>Menu</Link>
                <Link href={''}>About</Link>
                <Link href={''}>Contact</Link>
            </nav>
            <nav className="flex items-center gap-4 text-gray-500 font-semibold">
                <Link href={'/login'}>Login </Link>
                {/* href={'/register'} взима данните от файла page.js в папката register която е в app/register/page.js */}
                <Link href={'/register'} className="bg-primary rounded-full text-white px-8 py-2">
                    Register
                </Link>
            </nav>
        </header >
    )
}


//primary сме го задали '#f13a10' да е този цвят(червено), в tailwind.config.ts
//изтрихме другите неща от там които са по default и добавихме само colors:{primary: '#f13a10',}
//и може да го използваме в className като примерно text-primary и т.н. bg-primary = background