import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import { Link } from "react-router";

const ToyCards = ({ popularToy }) => {
  const { pictureURL, toyName, rating, toyId, availableQuantity, price } =
    popularToy;
  //console.log(popularToy);
  return (
    <div>
      <div data-aos="flip-left" className="card bg-base-100  shadow-sm p-2">
        <figure className="h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={pictureURL}
            alt="Image"
          />
        </figure>
        <div className="card-body justify-center ">
          <div className="space-y-3">
            <div className=" flex">
              <p className="flex items-center gap-2 ">
                <IoStarSharp className="text-amber-500" />
                <IoStarSharp className="text-amber-500" />
                <IoStarSharp className="text-amber-500" />
                <IoStarSharp className="text-amber-500" />
                <IoIosStarHalf className="text-amber-500" /> {rating}
              </p>
            </div>
            <h2 className="card-title">{toyName}</h2>

            <p className="font-semibold text-[18px] text-gray-600">
              price : <span className=" text-green-500">{price} $</span>
            </p>
            <p className="font-semibold text-[18px] text-gray-600">
              Available Quantity :{" "}
              <span className="text-green-500">({availableQuantity})</span>
            </p>
          </div>

          <div className="card-actions justify-start">
            <Link
              to={`/toy-details/${toyId}`}
              className="btn btn-primary  my-3"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCards;
