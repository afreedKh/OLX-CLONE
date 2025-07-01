import arrow from "../../assets/arrow-down-339-svgrepo-com.svg";

const CategoryBar = () => {
  return (
    <div className="category w-full mt-2.5 flex items-center px-2 md:px-4 lg:px-0">
      <div className="category-dropdown flex items-center justify-center ml-2 md:ml-6 lg:ml-14 flex-shrink-0">
        <p className="mr-2 font-bold text-xs md:text-sm">ALL CATEGORIES</p>
        <img src={arrow} alt="arrow_img" className="w-4 md:w-5 lg:w-6" />
      </div>

      <div className="flex-1 overflow-x-auto ml-3 md:ml-6 lg:ml-11">
        <ul className="flex items-center gap-2 md:gap-4 lg:gap-4 pb-1 md:pb-0">
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer">
            Cars
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer">
            Motorcycles
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer">
            Mobile Phones
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:block hidden">
            For Sale: Houses & Apartments
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:hidden">
            Houses
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer">
            Scooters
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:block hidden">
            Commercial & Other Vehicles
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:hidden">
            Vehicles
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:block hidden">
            For Rent: Houses & Apartments
          </li>
          <li className="whitespace-nowrap text-xs md:text-sm hover:text-blue-600 cursor-pointer lg:hidden">
            Rent
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CategoryBar;
