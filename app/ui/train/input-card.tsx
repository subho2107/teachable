import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { InputNodeDataType } from '@/app/lib/types';
import { Dispatch, SetStateAction, useState } from 'react';
import { CARD_MENU_ITEMS } from '@/app/lib/placeholder-data';
import MenuItemsModal from '../menu-items-modal';
const InputCard = ({heading, typeOfModel, isEmbedded = false,id,onCardDeleteClicked, setHeading}: InputNodeDataType & {setHeading: Dispatch<SetStateAction<string>>}) => {
    const [editMode, setEditMode] = useState(false);
    const [showCardMenu, setShowCardMenu] = useState(false);
    const [showDisable, setShowDisable] = useState(false);
    const items = CARD_MENU_ITEMS;
    function onActionClicked(action: string){
        console.log("onactionclicked");
        switch(action){
            case 'delete':
                console.log(id);
                onCardDeleteClicked && onCardDeleteClicked(id);
                break;
            case 'diasble':
                break;
        }
    }
    return(
        <>
            <div className="bg-white w-[37rem] flex flex-col h-fit rounded-lg">
                <div className='flex justify-between p-6 py-4 border-b-2 border-solid border-gray-200 text-lg'>
                    <div className='flex gap-2 items-center cursor-pointer' onClick={() => setEditMode(true)}>
                        {
                            !editMode ? <span className='cursor-pointer text-ellipsis'>{heading} </span> : <input className='border p-[2px] border-solid border-gray-200' height={16} maxLength={30} value={heading}  type='text' onChange={(event) => setHeading(event?.target.value)} onBlur={() => setEditMode(false)}></input>
                        }
                        <CreateOutlinedIcon color='disabled'/>
                    </div>
                    <button onClick={() => setShowCardMenu(!showCardMenu)} className='text-gray-200 focus:text-blue-200' onBlur={()=>setShowCardMenu(false)}>
                        <MoreVertOutlinedIcon/>
                    </button>
                </div>
                <div className='flex flex-col px-6 py-2 pb-6 gap-2'>
                    <span className='text-sm mb-2'>Add {typeOfModel} samples:</span>
                    <div className='flex gap-2'>
                        <div className='bg-blue-50 text-blue-700 rounded-md w-14 h-16 text-base p-4 px-8'>{typeOfModel === 'Audio' ? <div className='flex flex-col items-center gap-1'><KeyboardVoiceOutlinedIcon fontSize='medium'/><span className='text-xs'>Audio</span></div> : <div className='flex flex-col items-center gap-1'><VideocamOutlinedIcon fontSize='medium'/><span className='text-xs'>Webcam</span></div>}</div>
                        <div className='bg-blue-50 text-blue-700 rounded-md w-14 h-16 text-base p-4 flex flex-col items-center gap-1 px-8'><FileUploadOutlinedIcon/><span className='text-xs'>Upload</span></div>
                        {isEmbedded && <div className='bg-blue-50 text-blue-700 rounded-md w-14 h-16 text-base p-4 px-8 flex flex-col items-center gap-1'><MonitorOutlinedIcon/><span className='text-xs'>Device</span></div>}
                    </div>
                </div>
            </div>
            <div className='absolute top-8 left-56'>
            {
                showCardMenu && <MenuItemsModal items={items} showIcons={false} onActionClicked={onActionClicked} customStyles='lg:w-30 w-30' />
            }
            </div>
        </>
    );
}

export default InputCard;