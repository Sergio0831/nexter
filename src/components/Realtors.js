import { realtors } from "../constants/realtors";

const Realtors = () => {
  return (
    <div className='realtors'>
      <h3 className='heading-3'>Top 3 Realtors</h3>
      <div className='realtors__list'>
        {realtors.map((realtor) => (
          <div className='realtor' key={realtor.id}>
            <img
              className='realtors__img'
              src={realtor.img}
              alt={realtor.name}
            />
            <div className='realtors__details'>
              <h4 className='heading-4 heading-4--light'>{realtor.name}</h4>
              <p className='realtors__sold'>{realtor.sold} houses sold</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Realtors;
