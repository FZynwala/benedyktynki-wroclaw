import { useState } from 'react';
import HamburgerMenuButton from './HamburgerMenuBtn';
import Sidebar from './Sidebar';

export default function HamburgerMenu() {
    const [isMenuExpand, setIsMenuExpand] = useState(false);
    const handleMenuClick = () => setIsMenuExpand(!isMenuExpand);
    return (
        <>
            <nav className="bg-neutral-secondary-soft fixed z-50 top-2 right-0 md:hidden flex flex-col items-end justify-end mx-auto decoration-slate-400">
                <HamburgerMenuButton handleMenuClick={handleMenuClick} />
                <Sidebar isMenuExpand={isMenuExpand} />
            </nav>
        </>
    );
}
