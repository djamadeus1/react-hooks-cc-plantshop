import React from "react";
//import Search from "./Search";

function Header() {
  return (
    <header>
      <h1>
        Plantsy
        <span className="logo" role="img">
          🌱
        </span>
      </h1>
      {/* <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> {} */}
    </header>
  );
}

export default Header;
