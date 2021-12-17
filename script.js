const knygos = {
  grozines: [
    {
      price: 9.99,
      title: "Dvieju keliu knyga",
      year: "2001",
      ISBN: 9786098120691,
      pagecount: 281,
    },
    {
      price: 19.99,
      title: "Bendrininkai",
      year: "2000",
      ISBN: 9485122636591,
      pagecount: 225,
    },
    {
      price: 3.99,
      title: "Sudeginta gyva",
      year: "2005",
      ISBN: 9786098121854,
      pagecount: 120,
    },
    {
      price: 5.99,
      title: "Dievas visada keliauja incognito",
      year: "2018",
      ISBN: 9786098124812,
      pagecount: 422,
    },
  ],
  fantastines: [
    {
      price: 7.99,
      title: "Kopa",
      year: "2002",
      ISBN: 9786098124896,
      pagecount: 123,
    },
    {
      price: 14.99,
      title: "Antrasis Fondas",
      year: "2018",
      ISBN: 97860981123511,
      pagecount: 356,
    },
    {
      price: 9.99,
      title: "Vilko valanda",
      year: "2010",
      ISBN: 97860981295513,
      pagecount: 188,
    },
    {
      price: 5.99,
      title: "Soliaris",
      year: "2020",
      ISBN: 9786098121277,
      pagecount: 345,
    },
  ],
  jaunimui: [
    {
      price: 4.99,
      title: "Renios dienorastis",
      year: "2003",
      ISBN: 9786012120691,
      pagecount: 452,
    },
    {
      price: 8.99,
      title: "Altoriu sesely",
      year: "2001",
      ISBN: 9786098121854,
      pagecount: 548,
    },
    {
      price: 11.99,
      title: "Pianiste is Vienos",
      year: "2012",
      ISBN: 97860981287812,
      pagecount: 684,
    },
    {
      price: 3.99,
      title: "Karo zirgas",
      year: "2018",
      ISBN: 97860981288741,
      pagecount: 298,
    },
  ],
};

// UZDUOTIS išvesti knygas, kurios išleistos 2018m.

for (let i in knygos) {
  // console.log(i); //duoda kategorijas
  //console.log(knygos[i], i); // duoda duomenis su kategorijomis
  for (let j in knygos[i]) {
    //  console.log(j); //duoda numeraciją kiekvienos knygos kategorijoje
    for (let k in knygos[i][j]) {
      //  console.log(k); // duoda kategorijos pavadinima
      //  console.log(knygos[i][j][k]); //duoda ir kategorijos pavadinima ir reiksme

      if (knygos[i][j].year === "2018") {
        //  console.log(`${k}: ${knygos[i][j][k]} `); // isspausdinama informacija tik apie knygas isleistas 2018 m.
        if (k === "title") {
          console.log(`${k}: ${knygos[i][j][k]}`); // ispausdinami tik tu knygu pavadinimai kurios isleistos 2018 m.
        }
      }
    }
  }
}

// UZDUOTIS išvesti knygų kategorijas su pigiausiomis knygomis

for (let i in knygos) {
  //console.log(i); //duoda kategorijas
  //console.log(knygos[i], i); // duoda duomenis su kategorijomis
  for (let j in knygos[i]) {
    //  console.log(j); //duoda numeraciją kiekvienos knygos kategorijoje
    for (let k in knygos[i][j]) {
      // console.log(k); // duoda kategorijos pavadinima
      //console.log(k, knygos[i][j][k]); //duoda  reiksme
      if (knygos[i][j][k] === 3.99) {
        console.log(i, knygos[i][j][k]); // isspausdintos kategorijos kurios turi pigiausia knyga nurodant tikslia suma
      }
    }
  }
}
