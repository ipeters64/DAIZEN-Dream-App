import React from "react";

export const Home = () => {
  return (
    <div className="main-content">
      <h1 className="content-h1"> Dream Interpretations </h1>
      <form>
        <label for="dreamAbout">I had a </label>
        <input placeholder="dream" type="text" list="about" />
        <datalist id="about">
          <option value="dream">Dream</option>
          <option value="nightmare">Nightmare</option>
        </datalist>
        <label for="dreamWas">where I was </label>
        <input placeholder="action" type="text" list="was" />
        <datalist id="was">
          <option value="action word">Flying</option>
          <option value="action word">Running</option>
          <option value="action word">Swimming</option>
        </datalist>
        <label for="dreamWas">with a </label>

        <input placeholder="animal" type="text" list="have" />
        <datalist id="have">
          <option value="animal">dog</option>
          <option value="animal">cat</option>
          <option value="animal">bird</option>
        </datalist>

        <button class="summit main-btn">Get Result</button>
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

// export const Home = () => {
//   class DreamForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { value: "null" };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//       this.setState({ value: event.target.value });
//     }

//     handleSubmit(event) {
//       alert("Interpretation loading: " + this.state.value);
//       event.preventDefault();
//     }

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             I had a
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="null">----</option>
//               <option value="dream">Dream</option>
//               <option value="nightmare">Nightmare</option>
//             </select>
//             where I was
//             <select>
//               <option value="action word">insert action</option>
//               <option value="flying">Flying</option>
//               <option value="running">Running</option>
//               <option value="swimming">Swimming</option>
//             </select>
//             with/from this
//             <select>
//               <option value="animal">insert animal</option>
//               <option value="fly">Fly</option>
//               <option value="rhino">Rhino</option>
//               <option value="snake">Snake</option>
//             </select>
//             in
//             <select>
//               <option value="location">insert location</option>
//               <option value="beach">The Beach</option>
//               <option value="my-Room">My Room</option>
//               <option value="forest">The Forest</option>
//             </select>
//             and so on!
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }
// };

// ReactDOM.render(<DreamForm />, document.getElementById("root"));
