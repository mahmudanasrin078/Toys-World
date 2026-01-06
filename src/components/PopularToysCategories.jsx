import React, { use } from "react";
import { NavLink } from "react-router";


const popularToysCategoriesPromise = fetch("/toys.json").then((res) =>
  res.json()
);
const PopularToysCategories = () => {
  //console.log(popularToysCategoriesPromise);
  const toysCategories = use(popularToysCategoriesPromise);

  // ------------popular toys----
  const popularToys = toysCategories.slice(0, 6);

  return (
    <div>
      <h2 className="font-bold">Popular Toys ({popularToys.length})</h2>

      <div className="grid grid-cols-1 mt-5 gap-3">
        {popularToys.map((popularToy) => (
          <NavLink
            key={popularToy.toyId}
            to={`/toysCategory/${popularToy.toyId}`}
            className={"btn bg-base-100 border-0 hover:bg-base-300"}
          >
            {popularToy.subCategory}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default PopularToysCategories;
