import React, {useState} from "react";
const Input = ({showDiv})  => {
  const [searchWord, setsearchWord] = useState("");
  return (
    <div>
        <input type="text" placeholder="search..." onChange={(e) => setsearchWord(e.target.value)}/>
      {showAnotherButton && <button data-testid='button'>Click Here</button>}
      <h1>{searchWord}</h1>
      {showDiv && (
          <div data-testid = "divWantToShow">
              Hey My Name is Felix
        </div>
      )}
    </div>
  );
}
export default Input;