"use client";
import { useState, ComponentType, useEffect } from "react";
import { GenericCardType } from "@/app/lib/types";

const Carousel = ({items, CardComponent}: {items: GenericCardType[], CardComponent: ComponentType<any>}) => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [chunksLength, setChunksLength] = useState<number>(0);
    let chunkedItems: GenericCardType[][] = [];
    useEffect(() => {
    function handleResize() {
        console.log(window.innerWidth);
        if(window.innerWidth < 1024){
            setChunksLength(1);
        } else {
            setChunksLength(3);
        }
    }

    // Run the function once to set the initial state
    handleResize();

    // Add event listener for future window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
}, []);
    items.reduce((acc: any[], curr, index) => {
        acc.push(curr);
        if(acc.length === chunksLength || index === items.length -1){
            chunkedItems.push(acc);
            return [];
        } else {
            return acc;
        }
    }, []);
    return (
        <section className="flex items-center gap-4 lg:gap-20">
            <button className="text-2xl lg:text-4xl  text-blue-500 focus:border focus:border-solid focus:border-blue-500 w-fit h-16 rounded-full flex items-center justify-center" onClick={() => setCurrentPage(currentPage === 0 ? chunkedItems.length-1 : currentPage-1)}><span>{'<'}</span></button>
            <div className="w-[20rem] lg:w-[60rem] flex justify-center">
                {
                    chunkedItems.map((currentItems: GenericCardType[], itemsIndex) => {
                        return(
                            <div key={itemsIndex} className={`flex justify-between gap-2 lg:gap-8 ${itemsIndex === currentPage ? 'block': 'hidden'}`}>
                                {
                                   currentItems.map((card: GenericCardType) => {
                                    return <CardComponent {...card} key={card.id}/>
                                   })
                                }
                            </div>
                        );
                    })
                }
            </div>
            <button className="text-2xl lg:text-4xl text-blue-500 focus:border focus:border-solid focus:border-blue-500 w-fit h-16 rounded-full flex items-center justify-center"  onClick={() => setCurrentPage(currentPage === chunkedItems.length-1 ? 0 : currentPage+1)}>{'>'}</button>
        </section>
    );
}

export default Carousel;