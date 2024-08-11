'use client';
import { TrainingCard } from "@/app/lib/types";
import Image from "next/image";
import { poppins, openSansThin } from "../fonts";
import Link from "next/link";

const TrainCard = ({images, type, subHeading, rerouteLink}: TrainingCard) => {
    return(
        <Link href={rerouteLink}>
            <div className="flex flex-col gap-4 bg-white h-80 w-80 overflow-hidden p-4 rounded-lg shadow-sm hover:shadow-2xl hover:cursor-pointer">
                <div className="flex gap-2">
                    {images.map((image, index) => <Image src={image} key={index} alt={image} width={100} height={100} />)}
                </div>
                <h1 className={`text-3xl ${poppins.className}`}>{type} Project</h1>
                <p className={`text-lg ${openSansThin.className}`}>
                    {subHeading}
                </p>
            </div>
        </Link>
    );
}

export default TrainCard;