import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import {Handle, Position} from '@xyflow/react';
const PreviewCard = () => {
    return(
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ opacity: 0}}
            />
            <div className='bg-white h-fit w-72 rounded-lg flex flex-col'>
                <div className="h-20 border-b-2 border-solid border-gray-200 flex items-center justify-between p-4 gap-2">
                    <h3 className="text-lg text-gray-600">Preview</h3>
                    <button className="py-2 px-4 gap-4 flex text-gray-500 bg-gray-100 rounded-lg text-sm"><FileDownloadOutlinedIcon className='rotate-180'/> Export Model</button>
                </div>
                <span className='px-6 py-4 text-sm text-left text-gray-500'>You must train a model on the left before you can preview it here</span>
            </div>
        </>
    );
}

export default PreviewCard;