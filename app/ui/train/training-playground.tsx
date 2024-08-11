'use client';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    ReactFlowProvider,
    applyNodeChanges,
    NodeChange,
    NodePositionChange
  } from '@xyflow/react';
import { useCallback, useEffect, useState } from 'react';
import '@xyflow/react/dist/style.css';
import InputNode from './custom-node';
import TrainingCard from './training-card';
import PreviewCard from './preview-card';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import { NodesType } from '@/app/lib/types';

const nodeTypes = {
    inputSamples: InputNode,
    training: TrainingCard,
    preview: PreviewCard
};
const initialEdges = [{ id: 'e2-0', source: '2', target: '0' }, { id: 'e3-0', source: '3', target: '0' }, { id: 'e0-1',source: '0', target: '1' }];

const TrainingPlayground = ({typeOfModel, isEmbedded = false}:{typeOfModel: string, isEmbedded?: boolean}) => {
    const initialNodes: NodesType[] = [
        { id: '2',type: 'inputSamples', position: { x: 10, y: 50 }, data: { heading: 'Class 1', typeOfModel: typeOfModel, isEmbedded: isEmbedded, id: 2, onCardDeleteClicked: onCardDeleteClicked }},
        { id: '0', type: 'training', position: { x: 800, y: 400 }, data: { heading: '0'}},
        { id: '3', type: 'inputSamples', position: { x: 10, y: 270 }, data: { heading: 'Class 2', typeOfModel: typeOfModel, isEmbedded: isEmbedded, id: 3, onCardDeleteClicked:onCardDeleteClicked}},
        { id: '1', type: 'preview', position: { x: 1350, y: 400 }, data: { heading: '1' }}
      ];
    const [currentId, setCurrentId] = useState(3);
    const [currentY, setCurrentY] = useState(270);
    const [currentNodes, setCurrentNodes] = useState(initialNodes);
    const [currentEdges, setCurrentEdges] = useState(initialEdges);
    
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    useEffect(() => {
        setNodes([...currentNodes]);
        setEdges([...currentEdges]);
    }, [currentNodes, currentEdges]);

    function onCardDeleteClicked(cardId: number){
        setCurrentNodes([...currentNodes.splice(0, cardId-1), ...currentNodes.splice(cardId+1)]);
    }

    function addNewNode(){
        const newNode: NodesType = {
            id: `${currentId+1}`,
            type: 'inputSamples',
            position:  {x:10, y: currentY+220},
            data: {heading: `Class ${currentId}`,typeOfModel: typeOfModel, isEmbedded: isEmbedded}
        }
        const newEdge = {id: `e${currentId+1}-0`, source: `${currentId+1}`, target: '0'};
        setCurrentNodes((prevNodes) => [...prevNodes, newNode]);
        setCurrentEdges((prevEdges) => [...prevEdges, newEdge]);

        setCurrentId((prevId) => prevId + 1);
        setCurrentY((prevY) => prevY + 220);
    }
    
    const onConnect = useCallback(
        (params: any) => setEdges((eds) => addEdge(params, eds)),
        [setEdges],
    );

    return(
        <ReactFlowProvider>
            <div style={{ width: '100vw', height: '80vh', overflowX: 'auto', overflowY: 'scroll' }}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    nodesConnectable={false}
                    zoomOnScroll={false}
                    nodeTypes={nodeTypes}
                />
            </div>
            <div className='flex justify-start items-center cursor-pointer'>
                <div onClick={addNewNode} className='border border-dashed border-gray-500 left-[5%] relative rounded-md flex gap-2 p-8 px-20 w-[35rem] text-gray-500 justify-center hover:border-blue-600 hover:text-blue-600'>
                        <AddBoxOutlinedIcon/>
                        <span>Add a class</span>
                </div>
            </div>
        </ReactFlowProvider>
    );
}

export default TrainingPlayground;