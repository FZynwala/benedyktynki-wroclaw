import { useState } from 'react';
import './index.css';

export default function Card({ data }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const { title, content } = data;
    console.log('Card:', title);

    return (
        <>
            <div className="w-1/2">
                <div className="text-2xl font-semibold mt-5 mb-2 underline">{title}</div>
                <div className={`my-2 ${isShowMore ? '' : 'line-clamp-2'} overflow-hidden`}>{content}</div>
                <button onClick={() => setIsShowMore(!isShowMore)}>
                    {isShowMore ? 'Pokaż mniej' : 'Pokaż więcej'}
                </button>
            </div>
        </>
    );
}
