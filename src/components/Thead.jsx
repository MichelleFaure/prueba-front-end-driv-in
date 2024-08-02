import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";

const Thead = ({ handleSort, up }) => {
  return (
    <thead>
      <tr>
        <th className="py-2 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block mx-1">Auto</p>
          <button onClick={() => handleSort("class")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 font-medium text-white text-start">
          <p className="whitespace-wrap me-1 inline-block ">Combustible</p>
          <button onClick={() => handleSort("fuel_type")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">Marca</p>
          <button onClick={() => handleSort("make")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">Modelo</p>
          <button onClick={() => handleSort("model")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">Año</p>
          <button onClick={() => handleSort("year")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">Transmisión</p>
          <button onClick={() => handleSort("transmission")}>
            {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
          </button>
        </th>
        <th className="py-2 pe-2 max-w-24 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block ">
            Consumo en ciudad
            <button className="mx-1" onClick={() => handleSort("city_mpg")}>
              {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
            </button>
          </p>
        </th>
        <th className="py-2 pe-2 max-w-24 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">
            Consumo en carretera
            <button className="mx-1" onClick={() => handleSort("highway_mpg")}>
              {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
            </button>
          </p>
        </th>
        <th className="py-2 pe-2 max-w-24 font-medium text-white text-start">
          <p className="whitespace-wrap inline-block me-1">
            Consumo Mixto
            <button
              className="mx-1"
              onClick={() => handleSort("combination_mpg")}
            >
              {up ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
            </button>
          </p>
        </th>
      </tr>
    </thead>
  );
};
export default Thead;
