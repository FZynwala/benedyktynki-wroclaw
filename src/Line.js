import './index.css';

export default function Line({ color }) {
    return (
        <>
            <hr className={`${color} border-4 w-48`}></hr>
        </>
    );
}
