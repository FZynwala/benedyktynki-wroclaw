import ArrowUpIcon from './icons/ArrowUpIcon';

export default function BackToTopButton() {
    return (
        <div className="w-10 h-10 bg-red-800 absolute bottom-5 z-50">
            <ArrowUpIcon />
        </div>
    );
}
