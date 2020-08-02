import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  //   console.log(location.pathname);
  return (
    <>
      <h1>
        User {fname} {lname} Page
      </h1>
      {location.pathname === `/user/omkar/gupte` ? (
        <button onClick={() => history.goBack()}>Go Back</button>
      ) : null}
    </>
  );
};

export default User;
