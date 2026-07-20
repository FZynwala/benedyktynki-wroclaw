import ListItem from './ListItem';

export default function Sidebar({ isMenuExpand }) {
    return (
        <div className={`${isMenuExpand ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300 w-[35vw]`}>
            <ul className={` bg-orange-950 text-slate-300 ${isMenuExpand ? 'visible' : 'hidden'} text-center `}>
                <li>
                    <ListItem content={'O nas'} scrollTo="aboutus" />
                </li>
                <li>
                    <ListItem content={'Aktualności'} scrollTo="news" />
                </li>
                <li>
                    <ListItem content={'Galeria'} scrollTo="gallery" />
                </li>
                <li>
                    <ListItem content={'Kościół'} scrollTo="worship" />
                </li>
                <li>
                    <ListItem content={'Kontakt'} scrollTo="contact" />
                </li>
            </ul>
        </div>
    );
}
