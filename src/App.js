import 'react-photo-album/columns.css';
import { Element } from 'react-scroll';
import ScrollToTop from 'react-scroll-to-top';
import AboutUsSection from './AboutUsSection';
import CardsList from './CardsList';
import ContactSection from './ContactSection';
import GalleryComponent from './GalleryComponent';
import ArrowUpIcon from './icons/ArrowUpIcon';
import './index.css';
import Line from './Line';
import Spinner from './Spinner';
import TopMenu from './TopMenu';
import useFetch from './useFetch';
import WorshipComponent from './WorshipComponent';

function App() {
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

    const {
        loading: isLoadingAboutUs,
        error: aboutUsError,
        data: aboutUsData,
    } = useFetch('http://localhost:1337/api/about?populate=*');

    const {
        loading: isLoadingContact,
        error: contactError,
        data: contactData,
    } = useFetch('http://localhost:1337/api/contact?populate=*');

    const {
        loading: isLoadingAktualnosci,
        error: aktualnosciError,
        data: aktualnosciData,
    } = useFetch('http://localhost:1337/api/aktualnoscis?populate=*');

    return (
        <>
            <div className="bg-neutral-300">
                <TopMenu data={{ id: '1' }} />
                <div className="w-full h-screen bg-[url('../public/top_image_v.jpg')] bg-cover bg-center"></div>
                <div className="bg-black w-full h-screen z-40 top-0 absolute opacity-75 text-white text-center align-text-bottom text-7xl">
                    <div className="flex justify-center">
                        <div className="absolute bottom-5 font-semibold text-3xl md:text-5xl lg:text-7xl">
                            Benedyktynki Sakramentki Wrocław
                        </div>
                    </div>
                </div>
                <Element name="aboutus">
                    <div className="flex flex-col items-center space-around bg-orange-900 text-neutral-300">
                        {isLoadingAboutUs ? <Spinner /> : <AboutUsSection data={aboutUsData} />}
                    </div>
                </Element>
                <Element name="news">
                    <div className="flex flex-col items-center space-around">
                        <div className="text-5xl font-bold mt-7 mb-5">Aktualności</div>
                        <Line color={'border-orange-900'} />
                        {isLoadingAktualnosci ? <Spinner /> : <CardsList data={aktualnosciData} />}
                    </div>
                </Element>
                <div className="bg-orange-900 pl-5 p-5 flex justify-center">
                    <Element name="gallery">
                        {isLoadingPhotos ? <Spinner /> : <GalleryComponent photoData={photoData} />}
                    </Element>
                </div>
                <div className="bg-neutral-300 pl-5 p-5 flex justify-center">
                    <Element name="worship">
                        {isLoadingKosciol ? <Spinner /> : <WorshipComponent data={kosciolsData} />}
                    </Element>
                </div>
                <div className="flex flex-col space-around bg-orange-900 text-neutral-300 justify-center">
                    <Element name="contact">
                        {isLoadingContact ? <Spinner /> : <ContactSection data={contactData} />}
                    </Element>
                </div>
            </div>
            <ScrollToTop smooth component={ArrowUpIcon} color="#F453" />
        </>
    );
}

export default App;
