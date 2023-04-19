const API_BASE_URL = 'http://168.138.141.170:6060/api/v1/carcassonne';

(async function () {
  await getInterface();
})();



async function getInterface() {
  try {
    const response = await axios.post(API_BASE_URL + '/interface', {});

    // PONTOS
    $("#total_points_victor").val(response.data.VICTOR_POINTS);
    $("#total_points_shindi").val(response.data.SHINDI_POINTS);
    $("#total_points_renan").val(response.data.RENAN_POINTS);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // NUMERO DE CASTELOS E CIDADES
    $("#city_points").text('Cidades: ' + response.data.CITIES);
    $("#road_points").text('Ruas: ' + response.data.ROADS);
    $("#biggest_city").text(response.data.BIGGEST_CITY + ' tiles');
    $("#biggest_road").text(response.data.BIGGEST_ROAD + ' tiles');
    $("#king_city").text('Rei: ' + response.data.KING_CITY);
    $("#king_road").text('Rei: ' + response.data.KING_ROAD);
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // OURO E ESPECIARIAS
    $("#ouro-victor").text('Ouro: ' + response.data.VICTOR_GOLD + ' ~ ' + response.data.VICTOR_GOLD_POINTS + ' pts');
    $("#barril-victor").text('Barril: ' + response.data.VICTOR_BARREL + ' ~ ' + response.data.VICTOR_BARREL_POINTS + ' pts');
    $("#trigo-victor").text('Trigo: ' + response.data.VICTOR_WHEAT + ' ~ ' + response.data.VICTOR_WHEAT_POINTS + ' pts');
    $("#seda-victor").text('Seda: ' + response.data.VICTOR_SILK + ' ~ ' + response.data.VICTOR_SILK_POINTS + ' pts');

    $("#ouro-shindi").text('Ouro: ' + response.data.SHINDI_GOLD + ' ~ ' + response.data.SHINDI_GOLD_POINTS + ' pts');
    $("#barril-shindi").text('Barril: ' + response.data.SHINDI_BARREL + ' ~ ' + response.data.SHINDI_BARREL_POINTS + ' pts');
    $("#trigo-shindi").text('Trigo: ' + response.data.SHINDI_WHEAT + ' ~ ' + response.data.SHINDI_WHEAT_POINTS + ' pts');
    $("#seda-shindi").text('Seda: ' + response.data.SHINDI_SILK + ' ~ ' + response.data.SHINDI_SILK_POINTS + ' pts');

    $("#ouro-renan").text('Ouro: ' + response.data.RENAN_GOLD + ' ~ ' + response.data.RENAN_GOLD_POINTS + ' pts');
    $("#barril-renan").text('Barril: ' + response.data.RENAN_BARREL + ' ~ ' + response.data.RENAN_BARREL_POINTS + ' pts');
    $("#trigo-renan").text('Trigo: ' + response.data.RENAN_WHEAT + ' ~ ' + response.data.RENAN_WHEAT_POINTS + ' pts');
    $("#seda-renan").text('Seda: ' + response.data.RENAN_SILK + ' ~ ' + response.data.RENAN_SILK_POINTS + ' pts');

    // FADA
    $("#fada-victor").text('Fada: ' + response.data.VICTOR_FAIRY_ROUND + ' ~ ' + response.data.VICTOR_FAIRY_FEATURE + ' pts');
    $("#fada-shindi").text('Fada: ' + response.data.SHINDI_FAIRY_ROUND + ' ~ ' + response.data.SHINDI_FAIRY_FEATURE + ' pts');
    $("#fada-renan").text('Fada: ' + response.data.RENAN_FAIRY_ROUND + ' ~ ' + response.data.RENAN_FAIRY_FEATURE + ' pts');
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

async function addCity() {
  try {
    await axios.post(API_BASE_URL + '/addCity', {});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeCity() {
  try {
    await axios.post(API_BASE_URL + '/removeCity', {});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addRoad() {
  try {
    await axios.post(API_BASE_URL + '/addRoad', {});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeRoad() {
  try {
    await axios.post(API_BASE_URL + '/removeRoad', {});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addFairy(player) {
  try {
    await axios.post(API_BASE_URL + '/addFairyPoint', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeFairy(player) {
  try {
    await axios.post(API_BASE_URL + '/removeFairyPoint', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addGold(player) {
  try {
    await axios.post(API_BASE_URL + '/addGold', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeGold(player) {
  try {
    await axios.post(API_BASE_URL + '/removeGold', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addBarrel(player) {
  try {
    await axios.post(API_BASE_URL + '/addBarrel', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeBarrel(player) {
  try {
    await axios.post(API_BASE_URL + '/removeBarrel', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addWheat(player) {
  try {
    await axios.post(API_BASE_URL + '/addWheat', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeWheat(player) {
  try {
    await axios.post(API_BASE_URL + '/removeWheat', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function addSilk(player) {
  try {
    await axios.post(API_BASE_URL + '/addSilk', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

async function removeSilk(player) {
  try {
    await axios.post(API_BASE_URL + '/removeSilk', {player});
    await getInterface();   
  } catch (error) {
    console.error(error);
  }
}

// async function countTiles(value) {
//   let valor = $("#input_tiles").val();
//   if(value === '+'){
//     $("#input_tiles").val(valor + 1);
//   }

//   if(value === '-'){
//     $("#input_tiles").val(valor -1);
//   }
// }
 
async function addFeature(player) {

  let meeple = $('input[name="radio_meeple"]:checked').val();
  let feature = $("#select_features").val();

  let tiles = $("#input_tiles").val();
  let shields = $("#input_shields").val();

  let watchtower_type =  $("#select_watchtower").val();
  let watchtower_quantity =  $("#input_watchtower").val();

  let inn = $('#check_inn').is(':checked');
  let porco = $('#check_porco').is(':checked');
  let catedral = $('#check_catedral').is(':checked');
  let fada = $('#check_fada').is(':checked');
  let mago = $('#check_mago').is(':checked');
  let bruxa = $('#check_bruxa').is(':checked');

  if(feature === 'CITY') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      wtch: bruxa,
      mage: mago,
      tiles: tiles,
      shields: shields,
      cathedral: catedral,
      watchtower_feature: watchtower_type,
      watchtower_quantity: watchtower_quantity
    }

    try {
      const result = await axios.post(API_BASE_URL + '/city', obj);

      console.log(obj);
      console.log(result);

      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }

  if(feature === 'ROAD') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      wtch: bruxa,
      mage: mago,
      tiles: tiles,
      inn: inn,
      watchtower_feature: watchtower_type,
      watchtower_quantity: watchtower_quantity
    }

     try {
      await axios.post(API_BASE_URL + '/road', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }


  if(feature === 'FARM') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      completed_cities: tiles,
      castles: shields,
      pig: porco
    }

    try {
      await axios.post(API_BASE_URL + '/farm', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }


  if(feature === 'BARN') {
    const obj = {
      player: player,
      meeple: meeple,
      completed_cities: tiles,
      castles: shields
    }

    try {
      await axios.post(API_BASE_URL + '/barn', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }


  if(feature === 'MAMADA') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      completed_cities: tiles,
      castles: shields,
      pig: porco
    }

    try {
      await axios.post(API_BASE_URL + '/mamada', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }


  if(feature === 'GARDEN') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      tiles: tiles
    }

    try {
      await axios.post(API_BASE_URL + '/garden', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }


  if(feature === 'MONASTERY') {
    const obj = {
      player: player,
      meeple: meeple,
      fairy: fada,
      tiles: tiles
    }

    try {
      await axios.post(API_BASE_URL + '/monastery', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }

  if(feature === 'CASTLE') {
    const obj = {
      player: player,
      meeple: meeple,
      total_points: tiles
    }

    try {
      await axios.post(API_BASE_URL + '/castle', obj);
      await getInterface();   
    } catch (error) {
      console.error(error);
    }
  }

  $('input[name="radio_meeple"]:checked').val('NORMAL');
  $("#select_features").val('');

  $("#input_tiles").val(0);
  $("#input_shields").val(0);

  $("#select_watchtower").val('');
  $("#input_watchtower").val(0);

  $('#check_inn').prop('checked', false);
  $('#check_porco').prop('checked', false);
  $('#check_catedral').prop('checked', false);
  $('#check_fada').prop('checked', false);
  $('#check_mago').prop('checked', false);
  $('#check_bruxa').prop('checked', false);

}