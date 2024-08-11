import Image from "next/image";
import React, { useState, useEffect } from "react";
import { SvgIconComponent } from "@mui/icons-material";
import { openSansThin } from "./fonts";
import { ImageCardType } from "../lib/types";

const Card = ({imageLink, heading, subHeading, showLink, linkText, linkHref = '#', showPostLinkIcon, LinkIcon, customStyles, indexOfCard}: ImageCardType) => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
      }, []);
    return(
    <div className="flex items-center gap-4 p-4">
        {!!indexOfCard && <span className={`${openSansThin.className} text-2xl relative top-[2.5rem]`}>{indexOfCard} </span>}
        <div className={`grid grid-rows-[auto_4rem_auto_1rem] gap-4 ${customStyles}`}>
            <Image src={`${imageLink}`} height={200} width={320} alt={`${heading}-image`} className="rounded-lg"/>
            <h1 className='py-8 text-2xl'>{heading}</h1>
            <p className="text-left text-wrap text-lg max-w-80">
                {subHeading}
            </p>
            {
                showLink && 
                <div className="flex items-center gap-2">
                    {
                    isMounted &&
                    <a href={linkHref} className="text-blue-500 underline">{linkText}</a>//the anchor tag was causing hydration issues and thus had to fix it with this hack
                    }
                    {
                        showPostLinkIcon && LinkIcon && 
                        <span className="text-blue-500 border-2 w-4 h-4 border-solid border-blue-500 rounded-full items-center justify-center flex">
                            <LinkIcon sx={{ fontSize: 12 }}/>
                        </span>}
                </div>
            }

        </div>
    </div>);
}

export default Card;