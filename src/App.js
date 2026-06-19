import 'react-photo-album/columns.css';
import { Element } from 'react-scroll';
import AboutUsSection from './AboutUsSection';
import CardsList from './CardsList';
import ContactSection from './ContactSection';
import GalleryComponent from './GalleryComponent';
import './index.css';
import Line from './Line';
import { aboutUsData, contactData } from './sampleData';
import Spinner from './Spinner';
import TopMenu from './TopMenu';
import useFetch from './useFetch';
import WorshipComponent from './WorshipComponent';

function App() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/aktualnoscis?populate=*');
    const {
        loading: isLoadingPhotos,
        error: photosError,
        data: photoData,
    } = useFetch('http://localhost:1337/api/galleries?populate=*');

    const {
        loading: isLoadingKosciol,
        error: kosciolsError,
        data: kosciolsData,
    } = useFetch('http://localhost:1337/api/kosciols?populate=*');

    console.log('loadingPhotos', isLoadingPhotos);
    console.log('loadingKosciol', isLoadingKosciol);
    // console.log('kosciolsData', kosciolsData);

    // const photos = photoData.data[0].photos.map((photo) => photo.formats.thumbnail.url);

    const sampleData = [
        {
            title: 'Majówki',
            content:
                'Lorem ipsum dolor sit habet.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose inject',
        },
        {
            title: 'Życzenia wielkanocne',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
        {
            title: 'Życzenia wielkanocne',
            content:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        },
    ];

    // const photos = [
    //     {
    //         src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg',
    //         alt: 'obrazek',
    //     },
    //     {
    //         src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg',
    //         alt: 'obrazek',
    //     },
    //     {
    //         src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg',
    //         alt: 'obrazek',
    //     },
    //     {
    //         src: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Nabo%C5%BCe%C5%84stwo_majowe_%28ul._P%C5%82owiecka%2C_Sanok%2C_2016%29.jpg',
    //         alt: 'obrazek',
    //     },
    // ];
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
                <Element name="aboutus">
                    <div className="flex flex-col items-center space-around bg-orange-900 text-neutral-300">
                        <AboutUsSection data={aboutUsData} />
                    </div>
                </Element>
                <Element name="news">
                    <div className="flex flex-col items-center space-around">
                        <div className="text-5xl font-bold mt-7 mb-5">Aktualności</div>
                        <Line color={'border-orange-900'} />
                        <CardsList data={sampleData} />
                    </div>
                </Element>
                <div className="bg-orange-900 pl-5 p-5 flex justify-center">
                    <Element name="gallery">
                        {isLoadingPhotos ? <Spinner /> : <GalleryComponent photoData={photoData} />}
                    </Element>
                </div>
                <div className="bg-neutral-300 pl-5 p-5 flex justify-center">
                    <Element name="gallery">
                        {isLoadingKosciol ? <Spinner /> : <WorshipComponent data={kosciolsData} />}
                    </Element>
                </div>
                <div className="flex flex-col space-around bg-orange-900 text-neutral-300 justify-center">
                    <Element name="contact">
                        <ContactSection data={contactData} />
                    </Element>
                </div>
            </div>
            {/* <ScrollToTop smooth component={ArrowUpIcon} color="#F45" /> */}
        </>
    );
}

export default App;
