import { useState } from 'react';
import './index.css';

export default function Card({ data }) {
    const [isShowMore, setIsShowMore] = useState(false);
    const { title, content } = data;
    // console.log('Card:', title);

    return (
        <>
            <div className="w-80 my-5">
                <div className="text-2xl font-semibold mt-5 mb-2 underline">{title}</div>
                {/* <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg"
                    alt="mojowka"
                /> */}
                <div className="w-full h-64 bg-[url('https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg')] bg-cover bg-center"></div>
                <div className={`my-2 ${isShowMore ? '' : 'line-clamp-2'} overflow-hidden`}>{content}</div>
                <button onClick={() => setIsShowMore(!isShowMore)}>
                    {isShowMore ? 'Pokaż mniej' : 'Pokaż więcej'}
                </button>
            </div>
        </>
    );
}
