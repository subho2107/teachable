const Footer = () => {
    return(
        <div className="text-gray-400 text-xl md:text-2xl flex justify-between items-center relative mx-4 mt-32 mb-4">
            <div className="flex flex-col">
                <span className="text-sm">This is an</span>
                <span>A.I.</span>
                <span>Experiment</span>
            </div>
            <a href="https://policies.google.com/?hl=en" className="text-base underline">Privacy & Terms</a>
            <div className="text-3xl md:text-4xl">
                Google
            </div>
        </div>
    )
}

export default Footer;