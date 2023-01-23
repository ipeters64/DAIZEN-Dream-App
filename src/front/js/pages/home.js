import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [dream, setDream] = useState("dream");
  const [animal, setAnimal] = useState("dog");
  const [action, setAction] = useState("flying");
  const [place, setPlace] = useState("myRoom");
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="main-content">
      <h1 className="content-h1"> Dream Interpretations </h1>
      <form>
        <label htmlFor="dreamAbout">I had a </label>
        <select
          name="dream"
          id="dreamAbout"
          onChange={(e) => {
            setDream(e.target.value);
          }}
          value={dream}
        >
          <option value=""> Choose one </option>
          <option value="dream"> Dream </option>
          <option value="nightmare"> Nightmare </option>
        </select>

        <label htmlFor="dreamWas">where I was </label>
        <select
          name="action"
          id="dreamWas"
          onChange={(e) => {
            setAction(e.target.value);
          }}
          value={action}
        >
          <option value=""> Choose one </option>
          <option value="flying">Flying</option>
          <option value="running">Running</option>
          <option value="swimming">Swimming</option>
          <option value="eating">Eating</option>
          <option value="dancing">Dancing</option>
          <option value="kissing">Kissing</option>
          <option value="screaming">Screaming</option>
          <option value="falling">Falling</option>
          <option value="chased">Chased</option>
          <option value="hiding">Hiding</option>
          <option value="drowning">Drowning</option>
          <option value="fighting">Fighting</option>
        </select>

        <label htmlFor="dreamAnimal">with a </label>
        <select
          name="animal"
          id="dreamAnimal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          value={animal}
        >
          <option value=""> Choose one </option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="unsure">Unsure</option>
        </select>

        <label htmlFor="dreamwas">at</label>
        <select
          placeholder="where"
          type="text"
          list="place"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
          value={place}
        >
          <option value=""> Choose one </option>
          <option value="myRoom">My Room</option>
          <option value="beach">Beach</option>
          <option value="forest">Forest</option>
          <option value="unsure">Unsure</option>
        </select>

        <button
          className="summit main-btn"
          onClick={(e) => {
            e.preventDefault();
            actions.getDreamMeaning(dream, animal, action, place);
            setIsLoading(true);
            setTimeout(() => {
              setIsResult(true);
              setIsLoading(false);
            }, 1000);
          }}
        >
          {!isLoading ? (
            "Get Result"
          ) : (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          )}
        </button>
      </form>
      {isResult ? (
        <div className="result">
          <h1>Result:</h1>
          <p>{store.dreamActionResult}</p>
          <p>{store.dreamAnimalResult}</p>
          <p>{store.dreamPlaceResult}</p>
          <button
            onClick={() => {
              setIsResult(false);
            }}
          >
            Clear Result
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};