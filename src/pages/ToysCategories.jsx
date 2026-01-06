import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";

const ToysCategories = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // ------
  //const [popularToys, setPopularToys]=useState([])

  // console.log(id, data);
  useEffect(() => {}, [data, id]);
  return <div>ToysCategories ToysCategories {id}</div>;
};

export default ToysCategories;
