import { useState, useRef } from "react";

function Header() {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const searchBtn = (event) => {
    console.log(inputRef.current.value);
    event.preventDefault();
  };

  return (
    <div className="flex justify-center flex-row items-center truncate h-11 m-3">
      <input
        id="input"
        className="w-500 h-10 border border-black rounded-xl px-2"
        ref={inputRef}
        type="text"
        value={name || ""}
        placeholder="Enter your city"
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={searchBtn}
        id="search-button"
        className="bg-white flex m-10 h-10 border border-black rounded-xl justify-center items-center w-40"
      >
        Search
      </button>
    </div>
  );
}

export default Header;
