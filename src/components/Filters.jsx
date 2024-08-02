import React from "react";

const Filter = ({
  uniqueValues,
  handleFilterChange,
  selectedClasses,
  selectedMakes,
  selectedModels,
  selectedYears,
  selectedTransmissions,
}) => {
  return (
    <div className="max-w-40 text-sm">
      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        close
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
          <h2 className="font-medium">Clase de vehículo</h2>
          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        {uniqueValues("class").map((cls) => (
          <div className=" my-2 ps-4 text-white">
            <input
              type="checkbox"
              value={cls}
              checked={selectedClasses.includes(cls)}
              onChange={() => handleFilterChange("class", cls)}
            />
            <label key={cls} className="ms-2">
              {cls}
            </label>
          </div>
        ))}
      </details>

      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        close
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
          <h2 className="font-medium">Marca</h2>
          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        {uniqueValues("make").map((make) => (
          <div className=" my-2 ps-4 text-white">
            <input
              type="checkbox"
              value={make}
              checked={selectedMakes.includes(make)}
              onChange={() => handleFilterChange("make", make)}
            />
            <label key={make} className="ms-2">
              {make}
            </label>
          </div>
        ))}
      </details>

      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        close
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
          <h2 className="font-medium">Modelo</h2>
          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        {uniqueValues("model").map((model) => (
          <div className=" my-2 ps-4 text-white">
            <input
              type="checkbox"
              value={model}
              checked={selectedModels.includes(model)}
              onChange={() => handleFilterChange("model", model)}
            />
            <label key={model} className="ms-2">
              {model}
            </label>
          </div>
        ))}
      </details>

      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        close
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
          <h2 className="font-medium">Año</h2>
          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        {uniqueValues("year").map((year) => (
          <div className=" my-2 ps-4 text-white">
            <input
              type="checkbox"
              value={year}
              checked={selectedYears.includes(year)}
              onChange={() => handleFilterChange("year", year)}
            />
            <label key={year} className="ms-2">
              {year}
            </label>
          </div>
        ))}
      </details>

      <details
        className="group [&_summary::-webkit-details-marker]:hidden"
        close
      >
        <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-100 p-4 text-gray-900">
          <h2 className="font-medium">Transmisión</h2>
          <svg
            className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>
        {uniqueValues("transmission").map((transmission) => (
          <div className=" my-2 ps-4 text-white">
            <input
              type="checkbox"
              value={transmission}
              checked={selectedTransmissions.includes(transmission)}
              onChange={() => handleFilterChange("transmission", transmission)}
            />
            <label key={transmission} className="ms-2">
              {transmission}
            </label>
          </div>
        ))}
      </details>
    </div>
  );
};

export default Filter;
