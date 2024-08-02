// Componente que muestra la ubicación en una posicion random del MapModal(GoogleMaps)
import React from "react";
import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

// Funcion que entrega valores random para que el marker se ubique dentro de Santiago.
const randomPosition = () => {
  const minLat = -34.0;
  const maxLat = -33.3;
  const minLng = -71.2;
  const maxLng = -70.5;

  const lat = (Math.random() * (maxLat - minLat) + minLat).toFixed(2);
  const lng = (Math.random() * (maxLng - minLng) + minLng).toFixed(2);
  return { lat: parseFloat(lat), lng: parseFloat(lng) };
};

const MapModal = ({ selectedVehicle, closeModal }) => {
  const { class: vehicleClass, make, model } = selectedVehicle; //desestructuración de selected vehicles. Datos vienen al hacer click en una fila de la tabla.

  const [open, setOpen] = useState(true); //Estado para mostrar/ocultar infoWindow

  const [position, setPosition] = useState(randomPosition); //Estado para guardar la position y ser utilizada en el marker y infoWindow

  useEffect(() => {
    setPosition(randomPosition());
  }, []);

  return (
    <section className="absolute top-0 w-full h-full  flex justify-center items-center ">
      <div className="w-3/5 h-3/5 bg-white p-4 border rounded-md shadow-xl">
        <div className="w-full flex justify-between ">
          <div className="font-semibold">Ubicación del vehículo</div>
          <IoMdClose className="text-2xl" onClick={closeModal} />
        </div>
        <div className="w-full h-full p-5">
          <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <Map defaultCenter={position} defaultZoom={11}>
              <Marker position={position} onClick={() => setOpen(true)} />
              {open && (
                <InfoWindow
                  minWidth={150}
                  position={position}
                  onCloseClick={() => setOpen(false)}
                >
                  <section>
                    <div className="mb-4">
                      <h3 className="font-semibold">Tipo de auto</h3>
                      <p>{vehicleClass}</p>
                    </div>
                    <div className="my-4">
                      <h3 className="font-semibold">Marca</h3>
                      <p>{make}</p>
                    </div>
                    <div className="my-4">
                      <h3 className="font-semibold">modelo</h3>
                      <p>{model}</p>
                    </div>
                  </section>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>
        </div>
      </div>
    </section>
  );
};
export default MapModal;
