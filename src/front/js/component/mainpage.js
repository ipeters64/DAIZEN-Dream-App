import React from "react";

export const MainPage = () => {
  return (
    <div className="main-content">
      <h1 className="content-h1"> Dream Interpretations!!! </h1>
      <form>
        <label for="dreamAbout">I Dreamed About</label>
        <input
          placeholder="About what was your dream"
          type="text"
          list="about"
          id="dreamAbout"
        />
        <datalist id="about">
          <option>about your 1 </option>
          <option>about your 2 </option>
          <option>about your 3 </option>
          <option>about your 4 </option>
        </datalist>
        <label for="dreamWas">In The Dream There Was A</label>
        <input
          placeholder="What did your dream have"
          type="text"
          list="was"
          id="dreamWas"
        />
        <datalist id="was">
          <option>was your 1 </option>
          <option>was your 2 </option>
          <option>was your 3 </option>
          <option>was your 4 </option>
        </datalist>

        <button class="summit main-btn">See what your Dream mean</button>
      </form>
      <div className="result">
        <h1>Result:</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};
