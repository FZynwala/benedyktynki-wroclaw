import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Line from './Line';

export default function WorshipComponent({ data }) {
    const content = [
        {
            type: 'paragraph',
            children: [{ type: 'text', text: 'A simple paragraph' }],
        },
    ];
    console.log('kosciol', data);
    console.log('kosciol', data.data[0]);

    return (
        <>
            <div className="flex flex-col mb-10">
                <div className="text-5xl font-bold mt-7 mb-5 text-center">Kościół</div>
                <Line color={'border-orange-900'} width="48" />
                <div className="prose">
                    <BlocksRenderer content={data.data[0].content} />
                </div>
            </div>
        </>
    );
}
