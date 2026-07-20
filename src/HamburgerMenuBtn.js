import { useState } from 'react';

export default function HamburgerMenuButton({ handleMenuClick }) {
    const [opened, setOpened] = useState(false);
    // If you want it be closed on page navigation with react-router-dom, add this effect
    // const location = useLocation();
    // React.useEffect(() => setOpened(false), [location]);

    const handleClick = () => {
        setOpened(!opened);
        handleMenuClick();
    };

    return (
        <button
            onClick={handleClick}
            className={`right-0 w-12 hover:gap-2 ${
                opened ? 'gap-2' : 'gap-1'
            } transition-all items-center flex flex-col overflow-hidden focus:outline-none my-2`}
            aria-expanded="false"
        >
            <span
                className={`block transition-all h-[2px] ${
                    opened ? 'rotate-45 ml-2' : ''
                } origin-left w-[28px] bg-slate-500 mix-blend-darken`}
            />
            <span
                className={`block ${opened ? 'opacity-0' : ''} transition-all h-[2px] origin-left w-[28px] bg-slate-500 mix-blend-darken`}
            />
            <span
                className={`block transition-all h-[2px] ${
                    opened ? '-rotate-45 ml-2' : ''
                } origin-left w-[28px] bg-slate-500`}
            />
        </button>
    );
}
