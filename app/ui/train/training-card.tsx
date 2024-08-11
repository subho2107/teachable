
import {Handle, Position} from '@xyflow/react';
const TrainingCard = () => {
    return(
        <>
            <Handle
                type="target"
                position={Position.Left}
                style={{ opacity: 0}}
            />
            <div className="bg-white w-64 h-fit rounded-lg">
                <div className="border-b-2 border-solid border-gray-200 p-4">
                    <h3 className="text-lg text-left mb-4">Training</h3>
                    <button className="py-2 px-4 text-gray-500 bg-gray-100 rounded-lg text-sm w-full">Train Model</button>
                </div>
                <div className="p-6 h-fit text-sm">Advanced</div>
            </div>
            <Handle
                type="source"
                position={Position.Right}
                style={{ opacity: 0}}
            />
        </>
    );
}

export default TrainingCard;