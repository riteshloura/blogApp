import { useState } from "react";

function NavbarSearch({ query, setQuery }) {
  return (
    <div className="ml-5">
      <input
        type="text"
        placeholder="search post"
        className="bg-slate-100 outline-none p-2 rounded-md"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default NavbarSearch;
