const axios = require('axios');
const chalk = require('chalk');
const titleCase = (s) =>
  s.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())

let starterType = '';

//*Creating arrays for all starter Pokemon*//
const starters = [];
starters.push("1","4","7","25","133","152","155","158","252","255","258","387","390","393","495","498","501","650","653","656","728","810","813","816");
const grassStarters = [];
grassStarters.push("1","152","252","387","495","650","722","810");
const fireStarters = [];
fireStarters.push("4","155","255","390","498","653","725","813");
const waterStarters = [];
waterStarters.push("7","158","258","393","501","656","728","816");
const otherStarters = [];
otherStarters.push("25","133");

//*Picking a random starter Pokemon*//
const randomStarter = starters[Math.floor(Math.random() * starters.length)];
const randomGrassStarter = grassStarters[Math.floor(Math.random() * grassStarters.length)];
const randomFireStarter = fireStarters[Math.floor(Math.random() * fireStarters.length)];
const randomWaterStarter = waterStarters[Math.floor(Math.random() * waterStarters.length)];
const randomOtherStarter = otherStarters[Math.floor(Math.random() * otherStarters.length)]; 

//*Returning the starter Pokemon*//
async function getStarterMetadata() {
    console.log(chalk.green(`You have chosen a random starter! Grabbing attributes from PokeAPI for Pokemon ${randomStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
 async function getGrassStarterMetadata() {
    console.log(chalk.green(`You have chosen a grass starter! Grabbing attributes from PokeAPI for Pokemon ${randomGrassStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomGrassStarter}`
          let response =  await axios.get(sourceUrl);
          // console.log(response.data);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getFireStarterMetadata() {
    console.log(chalk.green(`You have chosen a fire starter! Grabbing attributes from PokeAPI for Pokemon ${randomFireStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomFireStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getWaterStarterMetadata() {
    console.log(chalk.green(`You have chosen a water starter! Grabbing attributes from PokeAPI for Pokemon ${randomWaterStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomWaterStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };
  async function getOtherStarterMetadata() {
    console.log(chalk.green(`You have chosen a non-traditional starter! Grabbing attributes from PokeAPI for Pokemon ${randomOtherStarter}.`))
      try {
          let sourceUrl = `https://pokeapi.co/api/v2/pokemon/${randomOtherStarter}`
          let response =  await axios.get(sourceUrl);
      return response.data;
      }
      catch(err) {
          console.log(err)
      }
  };

//*Returning starter Pokemon*//
async function init(){
    if (!starterType) {
    const starterMetadata = await getStarterMetadata();
    const starterName = starterMetadata.name;
    const starterSprite = starterMetadata.sprites.front_default;
    console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'grass') {
        const starterMetadata = await getGrassStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'fire') {
        const starterMetadata = await getFireStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'water') {
        const starterMetadata = await getWaterStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    else if (starterType === 'other') {
        const starterMetadata = await getOtherStarterMetadata();
        const starterName = starterMetadata.name;
        const starterSprite = starterMetadata.sprites.front_default;
        console.log(chalk.yellow(`Congrats Trainer, you caught ${titleCase(starterName)}!`));}
    }

init();
