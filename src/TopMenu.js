import { Button } from 'react-scroll';
import './index.css';

export default function TopMenu({ data }) {
    return (
        <>
            <div className="absolute top-0 w-full h-auto flex justify-center opacity-198 text-white">
                <Button
                    smooth
                    duration={700}
                    to="news"
                    className="rounded-none z-50 text-xl text-white font-semibold hover:text-neutral-400 mt-0 mb-3 mx-5 h-20 px-2 pt-0 text-slate-900 hidden md:inline-block w-auto"
                >
                    Aktualności
                </Button>
                <Button
                    smooth
                    duration={700}
                    to="gallery"
                    className="rounded-none z-50 text-xl text-white hover:text-neutral-400 font-semibold mt-0 mb-3 mx-5 h-20 px-2 pt-0 text-slate-900 hidden md:inline-block w-auto"
                >
                    Galeria
                </Button>
                <Button
                    smooth
                    duration={700}
                    to="aboutus"
                    className="rounded-none z-50 text-xl text-white hover:text-neutral-400 font-semibold mt-0 mb-3 mx-5 h-20 px-2 pt-0 text-slate-900 hidden md:inline-block w-auto"
                >
                    O nas
                </Button>
                <Button
                    smooth
                    duration={700}
                    to="worship"
                    className="rounded-none z-50 text-xl text-white hover:text-neutral-400 font-semibold mt-0 mb-3 mx-5 h-20 px-2 pt-0 text-slate-900 hidden md:inline-block w-auto"
                >
                    Kościół
                </Button>
                <Button
                    smooth
                    duration={700}
                    to="contact"
                    className="rounded-none z-50 text-xl text-white hover:text-neutral-400 font-semibold mt-0 mb-3 mx-5 h-20 px-2 pt-0 text-slate-900 hidden md:inline-block w-auto"
                >
                    Kontakt
                </Button>
            </div>
        </>
    );
}
