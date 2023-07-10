import { Icons } from '@/components/visual/Icons'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import Logo from "@/components/visual/Logo";

const Navbar = async () => {

    return (
        <footer className="bg-white/75 dark:bg-slate-950/20 pt-28 overflow-hidden dark:text-slate-300">
            <div className="px-20">
                <div className="flex flex-row justify-center items-center gap-8 mb-16 text-gray-400 ">
                    <a className="px-1" href="https://www.instagram.com/redouan._.elm/">
                        <Icons.Instagram />
                    </a>
                    <a className="px-1" href="https://www.facebook.com/oussama.azarfane">
                        <Icons.Facebook />
                    </a>
                    <a className="px-1" href="/">
                        <Icons.Atom className="w-10 h-10 text-black"/>
                    </a>
                    <a className="px-1" href="https://github.com/Ouzzi">
                        <Icons.Github />
                    </a>
                    <a className="px-1" href="https://www.youtube.com/@oussamaazarfane">
                        <Icons.Youtube />
                    </a>
                </div>
                <h1 className="mx-3 mb-16 text-1xl text-center">Entwickle dich zum Chemie Profi!</h1>
                <hr className="border-gray-400 dark:border-gray-500 my-8 md:mb-16"/>
            </div>
            <div className="max-w-7xl mx-auto text-center">
                Here you will find comprehensive information about Helium, Neon, Argon, Krypton, and Xenon.
                Discover their unique properties, applications, and significance in various industries.
                Dive into the fascinating world of noble gases and expand your knowledge.
                Explore their discovery history, their use in lighting technology, medicine, and much more.
                We are your reliable source for information about noble gases. Enjoy exploring!
            </div>

            <div className="px-20">
                <hr className="border-gray-400 dark:border-gray-500 my-8"/>
                <div className="flex flex-row justify-center items-center text-gray-400 text-sm my-8 mx-8">
                    Made by{' '}
                    <Link
                        href='https://www.buymeacoffee.com/oussamaazarfane'
                        className={buttonVariants({ variant: 'ghost' })}>
                        Redouan El Mazdoula
                    </Link>
                    {' '}with
                    <Icons.Heart className='ml-4 h-5 w-5' />
                </div>
            </div>
            {/* Allow more height for mobile menu on mobile */}
            <div className='h-40 md:hidden' />
        </footer>
    )
}

export default Navbar
