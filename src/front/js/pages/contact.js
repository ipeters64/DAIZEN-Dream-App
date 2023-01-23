import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Contact = () => {
    const { store, actions } = useContext(Context);

    return(
        <div classname="container contact" class="bg-white">
            <h1 class="text-center">Contact Us</h1>
            <h2>Danny:</h2>
        </div>
    )
}