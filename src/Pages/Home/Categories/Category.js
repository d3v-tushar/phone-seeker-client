import React from "react";
import { Link } from "react-router-dom";

const Category = ({category}) => {
  return (
    <div className="card w-auto bg-neutral text-neutral-content my-4">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{category.brand}</h2>
        <p>We are using cookies for no reason.</p>
        <div className="card-actions justify-end">
          <Link to={`/category/${category.category}`}><button className="btn btn-primary">See All</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
