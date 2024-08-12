'use client';
import { poppins, poppinsThin, openSansThin, openSansBold } from "../ui/fonts";
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import { TRAINING_MODELS, IMAGE_MODEL_TYPES } from "../lib/placeholder-data";
import TrainCard from "../ui/train/train-card";
import { useState } from "react";
import Modal from "../ui/modal";
import { ImageModelOptionType } from "../lib/types";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from "next/link";

const Page = () => {
    const trainingModels = TRAINING_MODELS;
    const imageModalTypes = IMAGE_MODEL_TYPES;
    const [showImageModal, setShowImageModal] = useState<boolean>(false);
    return(
        <>
            {
                showImageModal && 
                <Modal>
                    <div className="bg-white h-fit shadow-lg w-fit rounded-lg flex flex-col p-10">
                        <div className="flex justify-between">
                            <h1 className={`text-2xl mb-4 ${openSansBold.className}`}>New Image Project</h1>
                            <span onClick={() => setShowImageModal(false)}><CloseOutlinedIcon className="cursor-pointer"/></span>
                        </div>
                        <div className="flex gap-4">
                            {
                                imageModalTypes.map((currentType: ImageModelOptionType) => {
                                    return(
                                        <Link key={currentType.model} href={currentType.rerouteLink}>
                                            <div className={`p-6 pb-20 pr-20 gap-2 grid border border-solid border-gray-300 rounded-lg ${currentType.suggested ? 'text-blue-800 bg-blue-50 !border-blue-500':''}`}>
                                                <h2 className={`text-3xl font-bold ${openSansBold.className}`}>{currentType.model} image model</h2>
                                                <h3 className={`${openSansBold.className} text-lg`}>Best for {currentType.bestFor}</h3>
                                                <div className="text-wrap break-words whitespace-break-spaces text-sm">
                                                    {
                                                        currentType.details.map((detail, index) => <div key={index} className="my-2"><span>{detail}</span><br/></div>)
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Modal>
            }
            <section className="pt-28 flex justify-center">
                <section className="w-[1024px] flex flex-col justify-start items-baseline left-1/2">
                    <h1 className={`${poppins.className} text-5xl mb-10 text-left float-start`}>New Project</h1>
                    <div className="flex gap-10">
                        <button className="bg-white text-sm rounded-lg p-2 px-8 shadow-lg"><AddToDriveIcon/> Open an existing project from Drive.</button>
                        <button className="bg-white text-sm rounded-lg p-2 px-8 shadow-lg"><FolderOpenOutlinedIcon/> Open an existing project from file.</button>
                    </div>
                    <div className="grid grid-rows-2 grid-cols-2 xl:grid-rows-1 xl:grid-cols-[2fr_2fr_2fr] gap-10 m-10">
                        {
                            trainingModels.map((model) => <div key={model.id}  onClick={() => model.type === 'Image' && setShowImageModal(true)}><TrainCard {...model}/></div>)
                        }
                    </div>
                    <div className="border-2 border-dashed w-80 h-40 rounded-lg border-gray-300 text-gray-400 p-4 pb-8 pt-4 gap-4 flex flex-col">
                        <h3 className={`${poppinsThin.className}`}>More coming soon</h3>
                        <span className={`text-lg ${openSansThin.className}`}>
                            More models will appear here as they are developed
                        </span>
                    </div>
                </section>
            </section>
        </>
    );
}

export default Page;