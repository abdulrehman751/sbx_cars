import CarCard from "@/components/carCard";
import { CARS_DATA } from "@/constants/cars";

export default function Home() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 px-4'>
      {CARS_DATA.map((data, index) => {
        const {
          favorites,
          image,
          location,
          make,
          model,
          price,
          time_left,
          year,
        } = data;
        return (
          <CarCard
            key={index}
            city={location.city}
            country={location.country}
            favorites={favorites}
            image={image}
            make={make}
            model={model}
            year={year}
            price={price}
            timeLeft={time_left}
          />
        );
      })}
    </div>
  );
}
