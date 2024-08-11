import { poppins } from '@/app/ui/fonts';
import { useEffect, useState } from 'react';
import MenuWithLogo from '../menu-with-logo';
import MenuItemsModal from '../menu-items-modal';
import { MAIN_MENU_ITEMS } from '@/app/lib/placeholder-data';
import Link from 'next/link';
const Navbar = ({showNavbar}:{showNavbar: boolean}) => {
    const items = MAIN_MENU_ITEMS;
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <div className={`py-4 px-5 flex justify-between border-solid border-gray-200 ${showNavbar ? ' bg-white border-b-[1px]':''}`}>
                <div onClick={() => setShowMenu(!showMenu)}>
                    <MenuWithLogo showLogo={showNavbar} menuOpened={showMenu}/>
                </div>
                <section className='flex md:text-lg text-sm items-baseline gap-12'>
                    <span className='border-solid border-b-[1px] border-b-black pb-0'>About</span>
                    <span>FAQ</span>
                    <Link href='/train' className={`${poppins.className} bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg py-1`}>Get started</Link>
                </section>
            </div>
            <div className='relative -top-4'>
            {
                showMenu && <MenuItemsModal items={items} showIcons/>
            }
            </div>
        </>
    );
}

export default Navbar;