import Card from './Card';
import './index.css';

export default function CardsList({ data }) {
    console.log('Data:', data.data.length, data.data.length === 0);

    const renderCards = () => {
        if (data.data.length === 0) {
            return <div className="text-center text-lg mt-5">Nie ma jeszcze żadnych aktualności.</div>;
        } else {
            return data.data.map((item) => {
                return <Card data={item} />;
            });
        }
    };

    return (
        <>
            <div className="flex flex-row flex-wrap justify-evenly">{renderCards()}</div>
        </>
    );
}
