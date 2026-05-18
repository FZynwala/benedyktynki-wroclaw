import Card from './Card';
import './index.css';
import TopMenu from './TopMenu';
import useFetch from './useFetch';

function App() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/aktualnoscis?populate=*');

    console.log(data);
    return (
        <>
            <div className="bg-neutral-300">
                <TopMenu data={{ id: '1' }} />
                <div className="w-full h-screen bg-[url('../public/top_image_v.jpg')] bg-cover bg-center"></div>
                <div className="bg-black w-full h-screen z-40 top-0 absolute opacity-75 text-white text-center align-text-bottom text-7xl">
                    <div className="flex justify-center">
                        <div className="absolute bottom-5 font-semibold text-3xl md:text-xs lg:text-7xl">
                            Benedyktynki Sakramentki Wrocław
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center space-around">
                    <div className="text-5xl font-bold mt-7 mb-10">Aktualności</div>
                    <Card
                        data={{
                            title: 'Majówki',
                            content:
                                'Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet.',
                        }}
                    />
                    <Card
                        data={{
                            title: 'Życzenia Wielkanocne',
                            content:
                                'Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet. Lorem ipsum dolor sit habet.',
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
