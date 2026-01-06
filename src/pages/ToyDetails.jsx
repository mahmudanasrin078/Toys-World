import React, { useEffect, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { Link, useParams } from "react-router";
import { IoIosStarHalf } from "react-icons/io";
import { toast } from "react-toastify";

const ToyDetails = () => {
  const { id } = useParams();

  const [popularToy, setPopularToy] = useState([]);

  // -----------
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    fetch(`/toys.json`)
      .then((res) => res.json())
      .then((data) => setPopularToy(data));
  }, [id]);
  //console.log(popularToy);

  const selectedToy = popularToy?.find((toy) => toy.toyId == id);
  const { pictureURL, toyName, rating, description, availableQuantity, price } =
    selectedToy || {};

  // --------------

  // Handle form 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      
     
      toast.success("Form submitted successfully!");
      setFormData({ name: "", email: "" });
    } else {
      setSuccessMessage(" Please fill out all fields.");
    }
  };

  return (
    <div className="">
      <title> Home-ToyDetails</title>
      <div className=" grid grid-cols-12 gap-5 ">
        <div className="card bg-base-100  shadow-sm p-2 mx-auto max-w-5xl col-span-12 md:col-span-8">
          <figure className="h-48 overflow-hidden">
            <img className="w-full h-full" src={pictureURL} alt="Image" />
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
              <p>{description}</p>

              <p className="font-semibold text-[16px] text-gray-700">
                Available Quantity: 
                <span className="text-green-500"> ( {availableQuantity})</span>
               
              </p>

              <p className="font-semibold text-[16px] text-gray-700">Price: 
                <span className="text-green-500"> {price} $</span> 
              </p>
            </div>

            <div className="card-actions justify-center">
              <Link to="/" className="btn btn-primary  my-3">
                More Info
              </Link>
            </div>
          </div>
        </div>
        

        {/*  Try Now  */}

        <div className="mt-10 bg-white shadow-lg p-6 rounded-lg col-span-12 md:col-span-4 ">
          <h3 className="text-2xl font-bold mb-4 text-center">Try Now</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full mt-1"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full mt-1"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary w-full">
              Try Now
            </button>
          </form>

          {successMessage && (
            <p className="text-green-600 font-medium text-center mt-4">
              {successMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
