import { useState } from "react";

function Header() {
  const [name, setName] = useState("");
  return (
    <div className="flex justify-center flex-row items-center truncate h-11 m-3">
      <input
        className="w-500 h-10 border border-black rounded-xl px-2"
        type="text"
        value={name || ""}
        placeholder="Enter your city"
        onChange={(e) => setName(e.target.value)}
      />
      <button className="bg-white flex m-10 h-10 border border-black rounded-xl justify-center items-center w-40">
        Search
      </button>
    </div>
  );
}

export default Header;
