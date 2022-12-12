import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DreamMeaning = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1>Hellow</h1>
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};
