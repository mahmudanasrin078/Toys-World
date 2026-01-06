import React from 'react';
import { useLoaderData } from 'react-router';
import ToyCards from '../components/ToyCards';

const ShowAllToy = () => {

    const data = useLoaderData();
    //console.log(data)
    return (
       <div>
       
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
        {data.map((popularToys) => (
          <ToyCards key={popularToys.toyId} popularToy={popularToys}></ToyCards>
        ))}
      </div>
       </div>
    );
};

export default ShowAllToy;