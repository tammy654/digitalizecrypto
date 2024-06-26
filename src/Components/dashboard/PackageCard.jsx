
import { Link } from "react-router-dom";

const PackageCard = ({ item }) => {
  return (
    <div className="shadow-lg rounded-lg p-5 xl:p-10 text-primary-blue">
      <h2 className="text-sm text-center text-primary-blue">{item.name}</h2>
      <p className="text-xl xl:text-2xl text-center font-bold">
        {item.percent}%
      </p>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between text-sm">
          <p>Minimum Deposit:</p>
          <p>{item.min_deposit}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Maximum Deposit:</p>
          <p>{item.max_deposit}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Minimum Return:</p>
          <p>{item.min_return}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Maximum Return:</p>
          <p>{item.max_return}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Gift Bonus:</p>
          <p>{item.gift_bonus}</p>
        </div>
        <div className="flex justify-between text-sm">
          <p>Duration:</p>
          <p>{item.duration}</p>
        </div>

        
        <Link to="/dashboard/payment" className="w-full btn5 px-10 py-2 text-center align-center">
         
            Activate plan
        
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
