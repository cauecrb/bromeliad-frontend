// Dados fictícios só para visualizar o layout — sem chamada de API ainda.
export const mockBromeliads = [
  {
    id: 1,
    commonName: "Bromélia-imperial",
    scientificName: "Alcantarea imperialis",
    accessionCode: "AL-0012",
    status: "floracao",
    placeholderColor: "#5a6b3f",
  },
  {
    id: 2,
    commonName: "Gravatá-de-fogo",
    scientificName: "Aechmea fasciata",
    accessionCode: "AE-0043",
    status: "vegetativo",
    placeholderColor: "#3f5b45",
  },
  {
    id: 3,
    commonName: "Bromélia-relógio",
    scientificName: "Vriesea hieroglyphica",
    accessionCode: "VR-0007",
    status: "repouso",
    placeholderColor: "#2c4a5e",
  },
  {
    id: 4,
    commonName: "Cravo-do-mato",
    scientificName: "Tillandsia stricta",
    accessionCode: "TI-0021",
    status: "floracao",
    placeholderColor: "#6b3f2a",
  },
];

export const mockStats = [
  { label: "Total de bromélias", value: 48 },
  { label: "Em floração", value: 12, accent: "accent" },
  { label: "Precisando atenção", value: 3, accent: "gold" },
];
