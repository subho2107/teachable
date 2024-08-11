import {TweetCardDetailType} from "@/app/lib/types";
import TwitterIcon from '@mui/icons-material/Twitter';

const TwitterCard = ({username, content}: TweetCardDetailType) => {
    return(
        <div className="bg-blue-100/70 text-blue-800 p-4 rounded-lg w-80 h-[30rem] text-lg">
            <div className="flex items-center gap-2"><TwitterIcon/> @{username}</div>
            <p className="mt-6 text-wrap break-words whitespace-break-spaces">
                {
                    content
                }
            </p>
        </div>
    );
}

export default TwitterCard;