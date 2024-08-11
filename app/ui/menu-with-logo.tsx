import MenuIcon from '@mui/icons-material/Menu';
import { poppins } from './fonts';
const MenuWithLogo = ({showLogo, menuOpened}: {showLogo: boolean, menuOpened: boolean}) => {
    return(
        <button className='flex gap-2 items-center cursor-pointer '>
            <MenuIcon/>
            <span className={`${poppins.className} text-blue-600 md:text-2xl text-xl hidden ${showLogo || menuOpened ? 'md:!block':''}`}>Teachable Machine</span>
        </button>
    );
}

export default MenuWithLogo;