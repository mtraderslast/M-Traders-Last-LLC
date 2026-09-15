export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="relative flex items-center justify-center">

                {/* Outer Spinning Gradient Ring using Tailwind Native Animation */}
                <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-600 dark:border-t-cyan-400 dark:border-r-blue-500 animate-spin" />

                {/* Inner Pulsing Glow Background using Tailwind Native Animation */}
                <div className="absolute w-16 h-16 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-600/10 dark:from-cyan-400/10 dark:to-blue-500/10 blur-xl animate-pulse" />

                {/* Logo Container in Center */}
                <div className="absolute flex items-center justify-center bg-white dark:bg-slate-950 p-2 rounded-full shadow-xs">
                    <img
                        src="/logo.png"
                        alt="Loading Logo"
                        className="h-10 w-10 object-contain"
                    />
                </div>
            </div>

            {/* Subtitle Text with Pulse Effect */}
            <div className="mt-6 flex items-center gap-1.5 animate-pulse">
                <span className="text-sm font-bold tracking-widest uppercase bg-clip-text text-transparent bg-linear-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500">
                    Loading TRADERS
                </span>
            </div>
        </div>
    );
}