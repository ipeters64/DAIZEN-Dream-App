import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const DreamMeaning = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container dream-meaning">
      <h1>Why Do we dream?</h1>
      <p>
        The exact reason why we dream is not known, and there are many theories
        about the function of dreaming. Some scientists believe that dreaming
        may help to process emotions and experiences, consolidate memories, and
        facilitate learning and problem-solving. Others think that dreams may
        serve no particular purpose at all, and are simply a byproduct of the
        brain's activity during sleep. The history of dreaming and dream
        interpretation is also a long and fascinating one, dating back to
        ancient cultures. In many early societies, dreams were considered to be
        messages from the gods or the spirit world, and were thought to hold
        important information or prophecies. As a result, people often paid
        close attention to their dreams and tried to interpret their meanings.
        Over time, the study of dreaming has evolved, and today there are many
        different theories and approaches to understanding the role of dreams in
        our lives. Some people continue to believe that dreams have spiritual or
        supernatural significance, while others view them as a purely
        psychological phenomenon. Whatever the case may be, dreaming remains a
        mysterious and intriguing aspect of human experience.
      </p>
      <Link to="/">
        <button className="main-btn">Back home</button>
      </Link>
    </div>
  );
};
