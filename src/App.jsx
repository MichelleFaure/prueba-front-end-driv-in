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
  const [data, setData] = useState([
    {
      city_mpg: 26,
      class: "small sport utility vehicle",
      combination_mpg: 28,
      cylinders: 4,
      displacement: 1.5,
      drive: "fwd",
      fuel_type: "gas",
      highway_mpg: 32,
      make: "chevrolet",
      model: "equinox fwd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "small sport utility vehicle",
      combination_mpg: 26,
      cylinders: 4,
      displacement: 1.5,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 30,
      make: "chevrolet",
      model: "equinox awd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "subcompact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "audi",
      model: "a5 cabriolet quattro",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "subcompact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 33,
      make: "audi",
      model: "a5 quattro",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "audi",
      model: "a4 quattro",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 33,
      make: "audi",
      model: "a4 quattro",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 23,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 27,
      make: "subaru",
      model: "wrx",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 18,
      class: "compact car",
      combination_mpg: 21,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 24,
      make: "subaru",
      model: "wrx",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "midsize car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "audi",
      model: "a5 sportback quattro",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 18,
      class: "large car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.8,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "genesis",
      model: "g80 awd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 19,
      class: "large car",
      combination_mpg: 22,
      cylinders: 6,
      displacement: 3.8,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 27,
      make: "genesis",
      model: "g80 rwd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 23,
      class: "small sport utility vehicle",
      combination_mpg: 25,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 27,
      make: "audi",
      model: "q5",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "subcompact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "audi",
      model: "a5 quattro",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "subcompact car",
      combination_mpg: 24,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 30,
      make: "audi",
      model: "s5",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 20,
      class: "subcompact car",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "audi",
      model: "s5 cabriolet",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 24,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 30,
      make: "audi",
      model: "s4",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "midsize car",
      combination_mpg: 24,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 30,
      make: "audi",
      model: "s5 sportback",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "large car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.3,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 24,
      make: "genesis",
      model: "g80 awd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "large car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.3,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "genesis",
      model: "g80 rwd",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 19,
      class: "small sport utility vehicle",
      combination_mpg: 21,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 24,
      make: "audi",
      model: "sq5",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 12,
      class: "standard sport utility vehicle",
      combination_mpg: 15,
      cylinders: 12,
      displacement: 6.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 19,
      make: "bentley",
      model: "bentayga",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "subcompact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "bmw",
      model: "430i convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 22,
      class: "subcompact car",
      combination_mpg: 26,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 32,
      make: "bmw",
      model: "430i xdrive convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "subcompact car",
      combination_mpg: 24,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "bmw",
      model: "440i convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 20,
      class: "subcompact car",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "bmw",
      model: "440i xdrive convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "subcompact car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "m4 convertible",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 16,
      class: "subcompact car",
      combination_mpg: 19,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 22,
      make: "bmw",
      model: "m4 convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 20,
      class: "subcompact car",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "bmw",
      model: "640i convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 19,
      class: "subcompact car",
      combination_mpg: 22,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 28,
      make: "bmw",
      model: "640i xdrive convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "subcompact car",
      combination_mpg: 20,
      cylinders: 8,
      displacement: 4.4,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "650i convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 16,
      class: "subcompact car",
      combination_mpg: 19,
      cylinders: 8,
      displacement: 4.4,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "650i xdrive convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 15,
      class: "subcompact car",
      combination_mpg: 17,
      cylinders: 8,
      displacement: 4.4,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 22,
      make: "bmw",
      model: "m6 convertible",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 14,
      class: "subcompact car",
      combination_mpg: 16,
      cylinders: 8,
      displacement: 4.4,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 20,
      make: "bmw",
      model: "m6 convertible",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "bmw",
      model: "430i coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 25,
      cylinders: 4,
      displacement: 2.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 33,
      make: "bmw",
      model: "430i coupe",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 23,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 33,
      make: "bmw",
      model: "430i xdrive coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 24,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 34,
      make: "bmw",
      model: "430i gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 23,
      class: "compact car",
      combination_mpg: 27,
      cylinders: 4,
      displacement: 2.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 33,
      make: "bmw",
      model: "430i xdrive gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 32,
      make: "bmw",
      model: "440i coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 31,
      make: "bmw",
      model: "440i xdrive coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 19,
      class: "compact car",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "bmw",
      model: "440i xdrive coupe",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 32,
      make: "bmw",
      model: "440i gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 21,
      class: "compact car",
      combination_mpg: 25,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 31,
      make: "bmw",
      model: "440i xdrive gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "compact car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "m4 coupe",
      transmission: "m",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "compact car",
      combination_mpg: 20,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 24,
      make: "bmw",
      model: "m4 coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 20,
      class: "compact car",
      combination_mpg: 23,
      cylinders: 6,
      displacement: 3.0,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 29,
      make: "bmw",
      model: "640i gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 19,
      class: "compact car",
      combination_mpg: 22,
      cylinders: 6,
      displacement: 3.0,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 28,
      make: "bmw",
      model: "640i xdrive gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 17,
      class: "compact car",
      combination_mpg: 20,
      cylinders: 8,
      displacement: 4.4,
      drive: "rwd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "650i gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 16,
      class: "compact car",
      combination_mpg: 19,
      cylinders: 8,
      displacement: 4.4,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "650i xdrive gran coupe",
      transmission: "a",
      year: 2018,
    },
    {
      city_mpg: 16,
      class: "compact car",
      combination_mpg: 19,
      cylinders: 8,
      displacement: 4.4,
      drive: "awd",
      fuel_type: "gas",
      highway_mpg: 25,
      make: "bmw",
      model: "alpina b6 xdrive gran coupe",
      transmission: "a",
      year: 2018,
    },
  ]);
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