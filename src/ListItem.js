import { Button } from 'react-scroll';

export default function ListItem({ content, scrollTo }) {
    return (
        <Button smooth duration={700} to={scrollTo}>
            <div className="p-4 px-7 border-b border-orange-900 active:text-slate-800 duration-300">{content}</div>
        </Button>
    );
}
