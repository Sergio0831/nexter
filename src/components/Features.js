import sprite from "../img/sprite.svg";
import { features } from "../constants/features";

const Features = () => {
  return (
    <section className='features'>
      {features.map((feature) => {
        const { id, icon, heading, text } = feature;
        return (
          <div className='feature' key={id}>
            <svg className='feature__icon'>
              <use href={sprite + icon}></use>
            </svg>
            <h4 className='heading-4 heading-4--dark'>{heading}</h4>
            <p className='feature__text'>{text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
