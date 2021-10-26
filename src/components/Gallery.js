import { gallery } from "../constants/gallery";

const Gallery = () => {
  return (
    <section className='gallery'>
      {gallery.map((image) => (
        <figure
          key={image.id}
          className={`gallery__item gallery__item--${image.id}`}
        >
          <img
            src={image.imgSrc}
            alt={`Gallery ${image.id}`}
            className='gallery__img'
          />
        </figure>
      ))}
    </section>
  );
};

export default Gallery;
