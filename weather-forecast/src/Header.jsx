/* eslint-disable react/no-unknown-property */
import { useState } from "react";

function Header() {
  const [name, setName] = useState("");
  return (
    <div class="flex justify-center flex-row items-center h-20 truncate">
      <input
        class="w-1/4 h-10 border border-black rounded-xl px-2"
        type="text"
        value={name || ""}
        placeholder="Enter your city"
        onChange={(e) => setName(e.target.value)}
      />
      <button class="bg-white flex m-10 w-40 h-10 border border-black rounded-xl justify-center items-center hover:cursor-pointer hover:bg-gray-400">
        Search
      </button>
    </div>
  );
}

export default Header;
