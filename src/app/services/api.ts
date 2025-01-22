// mockApi

import Place from "../models/place.model";
import flats from "../../../mocks/flats.json"
import places from "../../../mocks/places.json"

// Função para simular a obtenção de dados da API
export const getPlaces = async (): Promise<Place[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(places);
    }, 1000); // Simula um atraso de 1 segundo
  });
};