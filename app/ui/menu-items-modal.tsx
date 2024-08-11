import Link from "next/link";
import { MenuItems } from "../lib/types";


const MenuItemsModal = ({items, showIcons, customStyles, onActionClicked}:{items: MenuItems[][], showIcons: boolean, customStyles?: string, onActionClicked?: CallableFunction}) => {
    return(
        <div className={`w-56 lg:w-80 bg-white rounded-lg shadow-md z-30 ${customStyles}`}>
            {
                items.map((item, index) => {
                    return(
                        <div key={index} className={`border-b-2 my-2 pb-2 lg:pb-3 lg:my-4  border-solid border-gray-200 flex flex-col ${index === items.length - 1 ? 'mb-0' : ''}`}>
                            {
                                item.map((currentItem) => {
                                    const Icon = showIcons && currentItem?.icon;
                                    return(
                                      <Link className="py-2 lg:py-[10px] pl-[18px] flex items-center gap-1 lg:gap-3 text-base lg:text-2xl hover:text-blue-500 hover:bg-blue-100" key={currentItem.name} href={currentItem.rerouteLink} onClick={() => currentItem.isRerouteExternal && onActionClicked && onActionClicked(currentItem?.action)}>
                                        {Icon && <Icon/>}
                                        <span className="text-xs lg:text-sm">{currentItem.name}</span>
                                      </Link>  
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </div>
    );
}

export default MenuItemsModal;
