import 'react-photo-album/columns.css';
import { Element } from 'react-scroll';
import AboutUsSection from './AboutUsSection';
import CardsList from './CardsList';
import ContactSection from './ContactSection';
import ErrorMessage from './ErrorMessage';
import GalleryComponent from './GalleryComponent';
import HamburgerMenu from './HamburgerMenu';
import './index.css';
import Spinner from './Spinner';
import TopMenu from './TopMenu';
import useFetch from './useFetch';
import WorshipComponent from './WorshipComponent';

export const prodUrl = 'https://competent-spirit-9c6c7cad85.strapiapp.com';
const devUrl = 'http://localhost:1337';

function App() {
    const {
        loading: isLoadingPhotos,
        error: photosError,
        data: photoData,
    } = useFetch(`${prodUrl}/api/galleries?populate=*`);

    const {
        loading: isLoadingKosciol,
        error: kosciolsError,
        data: kosciolsData,
    } = useFetch(`${prodUrl}/api/kosciols?populate=*`);

    const {
        loading: isLoadingAboutUs,
        error: aboutUsError,
        data: aboutUsData,
    } = useFetch(`${prodUrl}/api/about?populate=*`);

    const {
        loading: isLoadingContact,
        error: contactError,
        data: contactData,
    } = useFetch(`${prodUrl}/api/contact?populate=*`);

    const {
        loading: isLoadingAktualnosci,
        error: aktualnosciError,
        data: aktualnosciData,
    } = useFetch(`${prodUrl}/api/aktualnoscis?populate=*`);

    return (
        <>
            <div className="bg-neutral-300">
                <Element name="menu">
                    <TopMenu data={{ id: '1' }} />
                </Element>
                <HamburgerMenu />
                <div className="w-full h-screen bg-[url('../public/top_image_v.jpg')] bg-cover bg-center"></div>
                <div className="bg-black w-full h-screen z-40 top-0 absolute opacity-75 text-white text-center align-text-bottom text-7xl">
                    <div className="flex justify-center">
                        <div className="absolute bottom-10 font-semibold md:mb-0 sm:mb-4 text-3xl md:text-5xl lg:text-7xl">
                            Benedyktynki Sakramentki Wrocław
                        </div>
                    </div>
                </div>
                <Element name="aboutus">
                    <div className="min-h-48 flex flex-col items-center space-around bg-orange-900 text-neutral-300">
                        {isLoadingAboutUs ? (
                            <Spinner />
                        ) : aboutUsError ? (
                            <ErrorMessage />
                        ) : (
                            <AboutUsSection data={aboutUsData} />
                        )}
                    </div>
                </Element>
                <Element name="news">
                    <div className="min-h-48 flex flex-col items-center space-around">
                        <div className="text-5xl font-bold mt-7 mb-5">Aktualności</div>
                        <span className={`block h-[6px] origin-left w-[140px] bg-orange-900`} />
                        {isLoadingAktualnosci ? (
                            <Spinner />
                        ) : aktualnosciError ? (
                            <ErrorMessage />
                        ) : (
                            <CardsList data={aktualnosciData} />
                        )}
                    </div>
                </Element>
                <div className="min-h-48 w-100 bg-orange-900 pl-5 p-5 flex flex-col items-center justify-center">
                    <Element name="gallery">
                        {isLoadingPhotos ? (
                            <Spinner />
                        ) : photosError ? (
                            <ErrorMessage />
                        ) : (
                            <GalleryComponent photoData={photoData} />
                        )}
                    </Element>
                </div>
                <div className="min-h-48 bg-neutral-300 pl-5 p-5 flex justify-center">
                    <Element name="worship">
                        {isLoadingKosciol ? (
                            <Spinner />
                        ) : kosciolsError ? (
                            <ErrorMessage />
                        ) : (
                            <WorshipComponent data={kosciolsData} />
                        )}
                    </Element>
                </div>
                <div className="min-h-32 flex flex-col space-around bg-orange-900 text-neutral-300 justify-center">
                    <Element name="contact">
                        {isLoadingContact ? (
                            <Spinner />
                        ) : contactError ? (
                            <ErrorMessage />
                        ) : (
                            <ContactSection data={contactData} />
                        )}
                    </Element>
                </div>
            </div>
            {/* <ScrollToTop
                smooth
                component={<ArrowUpIcon />}
                className="flex justify-center items-center !rounded-full !bg-amber-500 !right-5"
                width="48"
            /> */}
        </>
    );
}

export default App;
