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
      <h1>Result:</h1>
      <div className="result"></div>
    </div>
  );
};
