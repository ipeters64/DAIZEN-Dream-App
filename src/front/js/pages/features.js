import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Features = () => {
    const { store, actions } = useContext(Context);

    return(
      <div classname="container features" class="bg-white">
        <h1 class="text-center">Here is a list of Articles that we used for research creating our Dream App</h1>
        <h4>Astronaut Abby: <a href="https://www.astronautabby.com/the-science-behind-sleep-and-dreams/">https://www.astronautabby.com/the-science-behind-sleep-and-dreams/</a></h4>
        <h4>Oxford Academic: <a href="https://academic.oup.com/sleep/article/16/2/163/2749368?login=false">https://academic.oup.com/sleep/article/16/2/163/2749368?login=false</a></h4>
        <h4>New York Academy of Sciences: <a href="https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.13412">https://nyaspubs.onlinelibrary.wiley.com/doi/10.1111/nyas.13412</a></h4>
        <h4>Pubmed: <a href="https://pubmed.ncbi.nlm.nih.gov/15766897/">https://pubmed.ncbi.nlm.nih.gov/15766897/</a></h4>
        <h4>Nature.com: <a href="https://www.nature.com/search?q=dreams%20interpretations&order=relevance">https://www.nature.com/search?q=dreams%20interpretations&order=relevance</a></h4>
        <h4>New York Times: <a href="https://www.nytimes.com/search?query=dreams+interpretation">https://www.nytimes.com/search?query=dreams+interpretation</a></h4> </div>
    );
        <Link to="/">
            <button classname="main-btn">Back home</button>
        </Link>
      
};