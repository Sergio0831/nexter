import { homes } from "../constants/homes";
import Sprite from "../img/sprite.svg";

const Homes = () => {
  return (
    <section className='homes'>
      {homes.map((home) => {
        const { id, image, name, location, rooms, space, price } = home;

        return (
          <div className='home' key={id}>
            <img src={image} alt={name} className='home__img' />
            <svg className='home__like'>
              <use href={Sprite + "#icon-heart-full"}></use>
            </svg>
            <h5 className='home__name'>{name}</h5>
            <div className='home__location'>
              <svg>
                <use href={Sprite + "#icon-map-pin"}></use>
              </svg>
              <p>{location}</p>
            </div>
            <div className='home__rooms'>
              <svg>
                <use href={Sprite + "#icon-profile-male"}></use>
              </svg>
              <p>{rooms} rooms</p>
            </div>
            <div className='home__area'>
              <svg>
                <use href={Sprite + "#icon-expand"}></use>
              </svg>
              <p>
                {space} m<sup>2</sup>
              </p>
            </div>
            <div className='home__price'>
              <svg>
                <use href={Sprite + "#icon-key"}></use>
              </svg>
              <p>&euro;{price.toLocaleString()}</p>
            </div>
            <button className='btn home__btn' type='button'>
              Contact Realtor
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Homes;
