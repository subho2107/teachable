export default function Modal({ children }: { children: React.ReactNode }) {
    return(
        <div className="w-screen h-screen bg-black/30 z-50 absolute top-0 flex items-center justify-center">
            {children}
        </div>
    );
}