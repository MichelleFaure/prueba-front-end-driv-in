import { useEffect, useState } from "react"
import { FaCircleArrowDown, FaCircleArrowUp } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import MapModal from "./components/MapModal";
import Pagination from "./components/Pagination";
import TableBody from "./components/TableBody";
import Thead from "./components/Thead";
import Filter from "./components/Filters";
import Header from "./components/Header";


const App = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState([]);

  const [up, setUp] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedMakes, setSelectedMakes] = useState([]);
  const [selectedModels, setSelectedModels] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedTransmissions, setSelectedTransmissions] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://api.api-ninjas.com/v1/cars?limit=50&year=2018",
            {
              headers: {
                "X-Api-Key": import.meta.env.VITE_API_KEY_CARS,
              },
            }
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.error("Error fetching data: ", error);
        }
      };

      fetchData();
    }, []);
  //Función selecciona los valores unicos, elimina los repetidos para crear cat. de filtros
  const uniqueValues = (key) => [...new Set(data.map((car) => car[key]))];

  //Función que maneja los cambios de filtros
  const handleFilterChange = (filterType, value) => {
    const setFilter = {
      class: setSelectedClasses,
      make: setSelectedMakes,
      model: setSelectedModels,
      year: setSelectedYears,
      transmission: setSelectedTransmissions,
    }[filterType];

    //Si el valor esta en el arreglo no se agrega, si no existe se agrega a la lista de filtros.
    setFilter((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };
  

  //Genera el arreglo de los vehiculos filtrados 
  const filteredData = data.filter((car) => {
    return (
      (selectedClasses.length === 0 || selectedClasses.includes(car.class)) &&
      (selectedMakes.length === 0 || selectedMakes.includes(car.make)) &&
      (selectedModels.length === 0 || selectedModels.includes(car.model)) &&
      (selectedYears.length === 0 ||
        selectedYears.includes(car.year.toString())) &&
      (selectedTransmissions.length === 0 ||
        selectedTransmissions.includes(car.transmission))
    );
  });

  //Ordena los elementos de la tabla
  const handleSort = (key) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return up ? 1 : -1;
      if (a[key] > b[key]) return up ? -1 : 1;
      return 0;
    });

    setUp(!up);
    setData(sortedData);
  };

  //Valores para calcular paginacion.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  //Función que maneja modal que muestra el mapa(MapModal.jsx)
  const handleRowClick = (vehicleInfo) => {
    setisModalOpen(true);
    setSelectedVehicle(vehicleInfo);
  };

  //Cerrar modal
  const closeModal = () => {
    setisModalOpen(false);
  };

  return (
    <div>
      <Header></Header>
      <div className="flex">
        {/* //FILTROS */}
        <Filter
          uniqueValues={uniqueValues}
          handleFilterChange={handleFilterChange}
          selectedClasses={selectedClasses}
          selectedMakes={selectedMakes}
          selectedModels={selectedModels}
          selectedYears={selectedYears}
          selectedTransmissions={selectedTransmissions}
        />

        <div className="overflow-x-auto rounded  ms-4">
          <table className="min-w-full divide-y-1 text-sm">
            {/* //TABLE HEAD. titulos de las columnas */}
            <Thead handleSort={handleSort} up={up} />

            {/* //TABLE BODY. contenido de la tabla. */}
            <TableBody
              currentItems={currentItems}
              handleRowClick={handleRowClick}
            />
          </table>
        </div>
      </div>

      {/* //MODAL MAPA. */}
      {isModalOpen && (
        <MapModal selectedVehicle={selectedVehicle} closeModal={closeModal} />
      )}

      {/* //PAGINACION. */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default App;