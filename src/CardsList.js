import Card from './Card';
import './index.css';

export default function CardsList({ data }) {
    // console.log('Data:', data);

    const renderCards = () =>
        data.map((item) => {
            return <Card data={item} />;
        });

    return (
        <>
            <div className="flex flex-row flex-wrap justify-evenly">{renderCards()}</div>
        </>
    );
}
