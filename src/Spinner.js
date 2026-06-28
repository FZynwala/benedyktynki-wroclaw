import './index.css';

export default function Spinner() {
    return (
        <div className="my-20">
            <div role="status" className="relative w-12 animate-spin">
                <div className="absolute top-0 left-0  bg-orange-600 w-4 h-4 rounded-full"></div>
                <div className="absolute top-1/2 right-0 bg-slate-900 w-4 h-4 rounded-full dark:bg-slate-50"></div>
                <span className="sr-only">Loading…</span>
            </div>
        </div>
    );
}
