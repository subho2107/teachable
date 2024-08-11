import Image from "next/image";
const WorksWithSVG = () => {
    return(
       <div className="flex gap-4 items-center justify-between w-3/5 mb-10">
        <a href="https://www.tensorflow.org/js"><Image src='/tensorFlow.png' alt="tensorflow" width={30} height={30}/></a>
        <a href="https://ml5js.org/"><Image src='/ml.png' alt="ml" width={30} height={30}/></a>
        <a href="https://p5js.org/"><Image src='/p5j.png'alt="p5js" width={30} height={30}/></a>
        <a href="https://coral.ai/"><Image src='/coral.png' alt="coral" width={30} height={30}/></a>
        <a href="https://www.framer.com/"><Image src='/framer.svg' alt="framer" width={30} height={30}/></a>
        <a href="https://nodejs.org/"><Image src='/node.png' alt="node" width={30} height={30}/></a>
        <a href="https://glitch.com/?utm_medium=partner&utm_source=teachable_machine"><Image src='/glitch.png' alt="glitch" width={30} height={30}/></a>
       </div>
    );
}

export default WorksWithSVG;