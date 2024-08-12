'use client';
import { useState } from "react";
import MenuWithLogo from "../ui/menu-with-logo";
import MenuItemsModal from "../ui/menu-items-modal";
import { MAIN_MENU_ITEMS } from "../lib/placeholder-data";
export default function Layout({ children }: { children: React.ReactNode }) {
    const items = MAIN_MENU_ITEMS;
    const [showMenu, setShowMenu] = useState(false);
    return(
        <div className="bg-gray-200 w-fit h-fit overflow-x-hidden lg:w-full lg:h-screen relative">
            <div className="absolute flex flex-col">
                <div className=" bg-white focus:border-blue-500 focus:border focus:border-solid z-40 p-4 w-80 h-18 rounded-lg shadow-lg " onClick={() => setShowMenu(!showMenu)}>
                    <MenuWithLogo showLogo={true} menuOpened={false}/>
                </div>
                {
                    showMenu && <MenuItemsModal items={items} showIcons/>
                }
            </div>
            {children}
        </div>
    );
}