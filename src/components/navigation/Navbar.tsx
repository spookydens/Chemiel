import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import Icons from "@/components/visual/Icons";
import {cn} from "@/lib/utils";
import {ThemeToggle} from "@/components/ThemeToggle";

const Navbar = async () => {
    return (
        <div className='fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900/75 z-40 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between'>
            <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>
                <div className='container max-w-7xl mx-auto w-full flex justify-start items-center'>
                    <div className='mr-8'>
                        <Link href='/' className={buttonVariants({variant: 'ghost'})}>
                            <Icons.Atom className="w-10 h-10"/>
                        </Link>
                    </div>

                    <div className='flex gap-4'>
                        <Link
                            href='/'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Edelgase
                        </Link>
                        <Link
                            href='/edelgase/helium'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Helium
                        </Link>
                        <Link
                            href='/edelgase/Neon'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Neon
                        </Link>
                        <Link
                            href='/edelgase/Xenon'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Xenon
                        </Link>
                        <Link
                            href='/edelgase/Krypton'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Krypton
                        </Link>
                        <Link
                            href='/edelgase/Argon'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Argon
                        </Link>
                        <Link
                            href='/edelgase/Radon'
                            className={buttonVariants({ variant: 'ghost' })}>
                            Radon
                        </Link>
                    </div>
                </div>
                <div className='flex flex-row items-center mx-16'>
                    <ThemeToggle/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
