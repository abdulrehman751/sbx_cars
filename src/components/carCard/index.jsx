import { FaHeart } from "react-icons/fa";

const CarCard = ({
  favorites,
  year,
  model,
  make,
  image,
  city,
  country,
  price,
  timeLeft,
}) => {
  return (
    <div className='relative bg-white shadow-lg rounded-2xl overflow-hidden p-4'>
      <button className='absolute top-7 right-5 bg-black/50 text-white p-2 rounded-full flex items-center gap-1'>
        <FaHeart className='w-5 h-5 text-red-500' />
        <span className='text-sm'>{favorites}</span>
      </button>

      <img src={image} alt={make} className='w-full h-48 object-cover' />

      <div className='p-4'>
        <p className='text-gray-500 text-sm'>{year}</p>
        <h2 className='text-lg font-bold'>{make}</h2>
        <p className='text-gray-700 text-sm'>{model}</p>

        <p className='text-gray-500 text-sm mt-2'>
          {city}, {country}
        </p>

        <div className='mt-4 flex justify-between items-center border-t pt-2 text-sm font-semibold'>
          <div>
            <p className='text-gray-500'>Latest bid</p>
            <p className='text-black'>{price}</p>
          </div>
          <div className='text-right'>
            <p className='text-gray-500'>Time left</p>
            <p className='text-yellow-500'>{timeLeft}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
