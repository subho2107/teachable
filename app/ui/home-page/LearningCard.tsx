import { LearningCardType } from "@/app/lib/types";
import DescriptionIcon from '@mui/icons-material/Description';

const LearningCard = ({heading, headerLink, lessonBy, lessonByLink, lessonByDetails, about, moreDetails}: LearningCardType) =>{
    return (
        <div className="m-8 text-left text-l grid grid-rows-[3fr_3fr_4fr_1fr] w-[19rem]">
            <div className="flex text-blue-500 text-2xl items-center gap-2">
                <a className="border-b-2 border-solid border-b-blue-500" href={headerLink}><h2>{heading}</h2></a>
                <DescriptionIcon/>
            </div>
            <p>
                by <a className="underline" href={lessonByLink}>{lessonBy}</a>{lessonByDetails}
            </p>
            <p>
                {about}
            </p>
            <span>{moreDetails}</span>
        </div>
    );
}

export default LearningCard;