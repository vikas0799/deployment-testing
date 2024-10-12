import React from "react";
import "./Products.css";

function Products(props) {
  const arr = props.arr;
  console.log(arr);

  return (
    <>
      {/* <h1>propes components</h1> */}
      <div>
        {arr.map((value, i) => {
          return (
            <div key={i}>
              <div className="category">
                <img
                  src={value.image}
                  alt={value.title}
                  className="category-image"
                />
                <div className="category-info">
                  <h2 className="category-title">{value.title}</h2>
                  <p className="category-description">{value.description}</p>
                  <p className="category-price">Price: ${value.price}</p>
                  <p className="category-rating">
                    Rating: {value.rating.rate} (Based on {value.rating.count}{" "}
                    reviews)
                  </p>
                  <button className="delete-button" onClick={() => props.deleteItem(i)}>Remove item</button>
                </div>
              </div>
             
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
