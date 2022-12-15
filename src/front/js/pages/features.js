import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Features = () => {
    const { store, actions } = useContext(Context);

    return(
      <div classname="container features">
        <h1>Features</h1>
        <Link to="/">
            <button classname="main-btn">Back home</button>
        </Link>
      </div>
    );
};