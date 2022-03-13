function contarOvejas(ovejas) {
  // aquí tu magia
  const filterarray = [];
  for (i = 0; i < ovejas.length; i++) {
    if (
      ovejas[i].color === "rojo" &&
      ovejas[i].name.indexOf("N") > -1 &&
      ovejas[i].name.indexOf("a") > -1
    ) {
      // console.log(ovejas[i]);
      filterarray.push(ovejas[i]);
    }
  }

  return filterarray;
}

const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);
