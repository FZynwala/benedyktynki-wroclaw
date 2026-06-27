import { useState } from 'react';
import { ColumnsPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import { Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';
import './index.css';
import Line from './Line';

export default function GalleryComponent({ photoData }) {
    const [index, setIndex] = useState(-1);
    // console.log('photoData', photoData.data[0].photos[0].url);
    const data = photoData.data[0].photos.map((photo) => {
        return {
            src: `http://localhost:1337${photo.url}`,
        };
    });
    // console.log('photosp', data);

    return (
        <>
            <div className="flex flex-col items-center mb-10">
                <div className="text-5xl font-bold mt-7 mb-5 text-neutral-300">Galeria</div>
                <Line color={'border-neutral-300'} />
            </div>
            <ColumnsPhotoAlbum
                photos={data}
                columns={(containerWidth) => {
                    console.log('containerWidth', containerWidth);
                    if (containerWidth < 400) return 2;
                    if (containerWidth < 800) return 3;
                    return 4;
                }}
                onClick={({ index }) => setIndex(index)}
            />

            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={data}
                index={index}
                thumbnails={{ hidden: false, position: 'bottom', gap: 7, border: 1, vignette: false }}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
    );
}
