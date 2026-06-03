import './index.css';

export default function Line({ color, width = '36' }) {
    return (
        <>
            <hr className={`${color} border-4 w-${width}`}></hr>
        </>
    );
}
