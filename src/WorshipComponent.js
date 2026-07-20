import { BlocksRenderer } from '@strapi/blocks-react-renderer';

export default function WorshipComponent({ data }) {
    const content = [
        {
            type: 'paragraph',
            children: [{ type: 'text', text: 'A simple paragraph' }],
        },
    ];

    return (
        <>
            <div className="flex flex-col mb-10">
                <div className="text-5xl font-bold mt-7 mb-5 text-center">Kościół</div>
                <div className="flex justify-center">
                    <span className={`block h-[6px] origin-left w-[140px] bg-orange-900`} />
                </div>

                <div className="prose leading-6 mt-5">
                    <BlocksRenderer content={data.data[0].content} />
                </div>
            </div>
        </>
    );
}
