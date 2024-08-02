import React from "react";

const Header = () => {
  return (
    <header className="flex items-center gap-8 p-8 text-white">
      <img
        src="https://driv.in/hs-fs/hubfs/lgoo-drivin.png?width=165&height=49&name=lgoo-drivin.png"
        alt="Logo"
        className="w-28"
      />
      <h1 className="text-2xl">Gestor de Vehículos</h1>
    </header>
  );
};
export default Header;
