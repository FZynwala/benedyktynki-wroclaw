import { useState } from 'react';
import './index.css';
import Line from './Line';

export default function AboutUsSection({ data }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const { title, content } = data;
    console.log('Card:', title);

    return (
        <>
            <div className="w-1/2 flex flex-col items-center space-around mb-5">
                {/* <div className="flex flex-col items-center space-around bg-orange-900 text-neutral-300"> */}
                <div className="text-5xl font-bold mt-7 mb-5">Poznaj nas</div>
                <Line color={'border-neutral-300'} />
                <div className={`my-5 ${isShowMore ? '' : 'line-clamp-2'} overflow-hidden`}>{content}</div>
                <button onClick={() => setIsShowMore(!isShowMore)}>
                    {isShowMore ? 'Pokaż mniej' : 'Pokaż więcej'}
                </button>
                {/* </div> */}
            </div>
        </>
    );
}
