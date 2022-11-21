import React from "react";

export const MainPage = () => {
  return (
    <div className="main-content">
      <h1 className="content-h1"> Dream Interpretations!!! </h1>
      <form>
        <label>
          I Dreamed About
          <input type="text" name="name" />
          In The Dream There Was A
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
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
