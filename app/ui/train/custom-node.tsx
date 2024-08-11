import { Handle, Position } from '@xyflow/react';
import InputCard from './input-card';
import { InputNodeDataType } from '@/app/lib/types';
import { useState } from 'react';
const InputNode = ({data}:{data: InputNodeDataType}) => {
    const {typeOfModel, isEmbedded, id, onCardDeleteClicked} = data;
    const [heading, setHeading] = useState(data.heading);//hardcoded it here instead of updating the original node heading
    return (
        <div className='nodrag'>
            <InputCard heading={heading} typeOfModel={typeOfModel} isEmbedded={isEmbedded} id={id} setHeading={setHeading} onCardDeleteClicked={onCardDeleteClicked}/>
            <Handle
                type="source"
                position={Position.Right}
                style={{ opacity: 0}}/>
        </div>
      );
}

export default InputNode;