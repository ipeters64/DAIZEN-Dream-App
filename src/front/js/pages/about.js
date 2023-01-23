import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const About = () => {
    const { store, actions } = useContext(Context);

    return(
        <div classname="container about" class="bg-white">
            <h1>About Us</h1>
        </div>
    )
}