import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <p>
        {" "}
        <strong>Definition:</strong>
        {props.meaning.definition}
      </p>
      <p>
        <strong>Example:</strong>
        <em>{props.meaning.example}</em>
      </p>
      <p>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

// meaning.definition;

// import React from "react";

//export default function Meaning(props) {
// console.log(props.meaning);
// return (
//  <div className="Meaning">
//    <h3>{props.meaning.partOfSpeech}</h3>
//   {Array.isArray(props.meaning.meanings) &&
//   props.meaning.meanings.map(function (meaning, index) {
//   return (
//   <div key={index}>
//   <p>
//  {meaning.definition}
//  <br />
//   <em>{meaning.example}</em>
//   </p>
//  </div>
//    );
//   })}
//  </div>
//  );
// }

// meaning.definition;

//   <p>{props.meaning.definition}</p>
//   <p>{props.meaning.example}</p>
