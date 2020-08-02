import React from "react";

const Result = (props) => {
  const img = `https://source.unsplash.com/300x300/?${props.searchedData}`;
  return (
    <>
      <img src={img} alt="alt" />
    </>
  );
};

export default Result;
