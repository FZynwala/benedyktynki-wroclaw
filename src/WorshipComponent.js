import Line from './Line';

export default function WorshipComponent({}) {
    return (
        <>
            <div className="flex flex-col items-center mb-10">
                <div className="text-5xl font-bold mt-7 mb-5">Kościół</div>
                <Line color={'border-neutral-300'} />
                <div className="font-bold text-xl">Msze Święte:</div>
                <div className="text-l">codziennie o godz. 7:00</div>
            </div>
        </>
    );
}
