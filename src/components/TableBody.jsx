const TableBody = ({ currentItems, handleRowClick }) => {
  return (
    <tbody className="divide-y divide-white text-white font-semibold">
      {currentItems.map((car, index) => (
        <tr key={index} onClick={() => handleRowClick(car)}>
          <td className="whitespace-wrap pe-4 py-2 text-white max-w-28 ">
            {car.class}
          </td>
          <td className="whitespace-wrap pe-4  py-2 text-white">
            {car.fuel_type}
          </td>
          <td className="whitespace-wrap pe-4  py-2 text-white">
            {car.make}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-white max-w-28">
            {car.model}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-white">
            {car.year}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-center text-white">
            {car.transmission}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-center text-white">
            {car.city_mpg}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-center text-white">
            {car.highway_mpg}
          </td>
          <td className="whitespace-wrap pe-4 py-2 text-center text-white">
            {car.combination_mpg}
          </td>
        </tr>
      ))}
    </tbody>
  );
};
export default TableBody