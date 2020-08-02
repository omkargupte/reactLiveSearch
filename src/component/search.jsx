import React from "react";
import { useState } from "react";
import Result from "../component/result";

const Search = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleInput = (event) => {
    const val = event.target.value;
    //alert(val);
    setSearchVal(val);
  };

  return (
    <>
      <br />
      <br />
      <input
        type="text"
        placeholder="Search"
        value={searchVal}
        onChange={handleInput}
      />
      <br />
      <br />
      {searchVal !== "" ? <Result searchedData={searchVal} /> : null}
    </>
  );
};

export default Search;
