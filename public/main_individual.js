const API_BASE_URL = 'http://168.138.141.170:6060/api/v1/carcassonne';

// (async function () {
//   await getInterface();
// })();

$(document).ready(async function() {

  setInterval(getInterface, 5000);

  await getInterface();

  let watchtower_type =  '';
  let inn = false;
  let porco = false;
  let catedral = false;
  let fada = false;
  let mago = false;
  let bruxa = false;
  let botao = '';
  let group_tiles = '';
  let group_shields = '';
  let group_watchtower = '';
  let label_tiles = ''
  let label_shields = ''

  $('#select_features_victor').change(function() {
    let feature_select = $(this).val();

    watchtower_type =  $("#select_watchtower_victor");
    inn = $('#group_inn_victor');
    porco = $('#group_pig_victor');
    catedral = $('#group_catedral_victor');
    fada = $('#group_fairy_victor');
    mago = $('#group_mage_victor');
    bruxa = $('#group_witch_victor');
    botao = $('#group_btn_victor');
    group_tiles = $('#group_tiles_victor');
    group_shields = $('#group_shields_victor');
    group_watchtower = $('#group_watchtower_victor');

    label_tiles = $('#label_tiles_victor');
    label_shields = $('#label_shields_victor');

    if(feature_select === '') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.hide();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.hide();
    }

    if(feature_select === 'CITY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.show();
      watchtower_type.show();
      inn.hide();
      porco.hide();
      catedral.show();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'ROAD') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.show();
      watchtower_type.show();
      inn.show();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'FARM') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'BARN') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MAMADA') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'GARDEN') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MONASTERY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'CASTLE') {

      label_tiles.text('Total de Pontos');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

  });

  $('#select_features_shindi').change(function() {
    let feature_select = $(this).val();

    watchtower_type =  $("#select_watchtower_shindi");
    inn = $('#group_inn_shindi');
    porco = $('#group_pig_shindi');
    catedral = $('#group_catedral_shindi');
    fada = $('#group_fairy_shindi');
    mago = $('#group_mage_shindi');
    bruxa = $('#group_witch_shindi');
    botao = $('#group_btn_shindi');
    group_tiles = $('#group_tiles_shindi');
    group_shields = $('#group_shields_shindi');
    group_watchtower = $('#group_watchtower_shindi');

    label_tiles = $('#label_tiles_shindi');
    label_shields = $('#label_shields_shindi');

    if(feature_select === '') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.hide();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.hide();
    }

    if(feature_select === 'CITY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.show();
      watchtower_type.show();
      inn.hide();
      porco.hide();
      catedral.show();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'ROAD') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.show();
      watchtower_type.show();
      inn.show();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'FARM') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'BARN') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MAMADA') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'GARDEN') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MONASTERY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'CASTLE') {

      label_tiles.text('Total de Pontos');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

  });

  $('#select_features_renan').change(function() {
    let feature_select = $(this).val();

    watchtower_type =  $("#select_watchtower_renan");
    inn = $('#group_inn_renan');
    porco = $('#group_pig_renan');
    catedral = $('#group_catedral_renan');
    fada = $('#group_fairy_renan');
    mago = $('#group_mage_renan');
    bruxa = $('#group_witch_renan');
    botao = $('#group_btn_renan');
    group_tiles = $('#group_tiles_renan');
    group_shields = $('#group_shields_renan');
    group_watchtower = $('#group_watchtower_renan');

    label_tiles = $('#label_tiles_renan');
    label_shields = $('#label_shields_renan');

    if(feature_select === '') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.hide();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.hide();
    }

    if(feature_select === 'CITY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.show();
      watchtower_type.show();
      inn.hide();
      porco.hide();
      catedral.show();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'ROAD') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.show();
      watchtower_type.show();
      inn.show();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.show();
      bruxa.show();
      botao.show();
    }

    if(feature_select === 'FARM') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'BARN') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MAMADA') {

      label_tiles.text('Cidades Completas');
      label_shields.text('Castelos');

      group_tiles.show();
      group_shields.show();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.show();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'GARDEN') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'MONASTERY') {

      label_tiles.text('Tiles');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.show();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

    if(feature_select === 'CASTLE') {

      label_tiles.text('Total de Pontos');
      label_shields.text('Escudos');

      group_tiles.show();
      group_shields.hide();
      group_watchtower.hide();
      watchtower_type.hide();
      inn.hide();
      porco.hide();
      catedral.hide();
      fada.hide();
      mago.hide();
      bruxa.hide();
      botao.show();
    }

  });
});

async function getInterface() {

  try {
    // const response = await axios.post(API_BASE_URL + '/interface', {});
    const response = await axios.get(API_BASE_URL + '/interface');

    // PONTOS

    $("#score_victor").text('Victor: ' + response.data.VICTOR_POINTS + ' pts');
    $("#score_shindi").text('Shindi: ' + response.data.SHINDI_POINTS + ' pts');
    $("#score_renan").text('Renan: ' + response.data.RENAN_POINTS + ' pts');

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

    // RUA E CIDADE
    $("#rei-cidade-victor").text('Rei Cidade: ' + response.data.VICTOR_POINTS_KING_CITY + ' pts');
    $("#rei-rua-victor").text('Rei Rua: ' + response.data.VICTOR_POINTS_KING_ROAD + ' pts');
    $("#cidades-victor").text('Cidades: ' + response.data.VICTOR_CITIES + ' ~ ' + response.data.VICTOR_POINTS_CITIES + ' pts');
    $("#ruas-victor").text('Ruas: ' + response.data.VICTOR_ROADS + ' ~ ' + response.data.VICTOR_POINTS_ROADS + ' pts');
    $("#monasterios-victor").text('Monastérios: ' + response.data.VICTOR_MONASTERIES + ' ~ ' + response.data.VICTOR_POINTS_MONASTERIES + ' pts');
    $("#jardins-victor").text('Jardins: ' + response.data.VICTOR_GARDENS + ' ~ ' + response.data.VICTOR_POINTS_GARDENS + ' pts');
    $("#construtor-victor").text('Construtor: ' + response.data.VICTOR_CONSTRUCTOR);

    $("#rei-cidade-shindi").text('Rei Cidade: ' + response.data.SHINDI_POINTS_KING_CITY + ' pts');
    $("#rei-rua-shindi").text('Rei Rua: ' + response.data.SHINDI_POINTS_KING_ROAD + ' pts');
    $("#cidades-shindi").text('Cidades: ' + response.data.SHINDI_CITIES + ' ~ ' + response.data.SHINDI_POINTS_CITIES + ' pts');
    $("#ruas-shindi").text('Ruas: ' + response.data.SHINDI_ROADS + ' ~ ' + response.data.SHINDI_POINTS_ROADS + ' pts');
    $("#monasterios-shindi").text('Monastérios: ' + response.data.SHINDI_MONASTERIES + ' ~ ' + response.data.SHINDI_POINTS_MONASTERIES + ' pts');
    $("#jardins-shindi").text('Jardins: ' + response.data.SHINDI_GARDENS + ' ~ ' + response.data.SHINDI_POINTS_GARDENS + ' pts');
    $("#construtor-shindi").text('Construtor: ' + response.data.SHINDI_CONSTRUCTOR);

    $("#rei-cidade-renan").text('Rei Cidade: ' + response.data.RENAN_POINTS_KING_CITY + ' pts');
    $("#rei-rua-renan").text('Rei Rua: ' + response.data.RENAN_POINTS_KING_ROAD + ' pts');
    $("#cidades-renan").text('Cidades: ' + response.data.RENAN_CITIES + ' ~ ' + response.data.RENAN_POINTS_CITIES + ' pts');
    $("#ruas-renan").text('Ruas: ' + response.data.RENAN_ROADS + ' ~ ' + response.data.RENAN_POINTS_ROADS + ' pts');
    $("#monasterios-renan").text('Monastérios: ' + response.data.RENAN_MONASTERIES + ' ~ ' + response.data.RENAN_POINTS_MONASTERIES + ' pts');
    $("#jardins-renan").text('Jardins: ' + response.data.RENAN_GARDENS + ' ~ ' + response.data.RENAN_POINTS_GARDENS + ' pts');
    $("#construtor-renan").text('Construtor: ' + response.data.RENAN_CONSTRUCTOR);

    // console.log(response);
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

async function countTiles(value, name) {
  let valor = Number($("#input_tiles_" + name).val());
  if(value === '+'){
    $("#input_tiles_" + name).val(valor + 1);
  }

  if(value === '-'){
    $("#input_tiles_" + name).val(valor -1);
  }
}

async function countShields(value, name) {
  let valor = Number($("#input_shields_" + name).val());
  if(value === '+'){
    $("#input_shields_" + name).val(valor + 1);
  }

  if(value === '-'){
    $("#input_shields_" + name).val(valor -1);
  }
}

async function countWatchtower(value, name) {
  let valor = Number($("#input_watchtower_" + name).val());
  if(value === '+'){
    $("#input_watchtower_" + name).val(valor + 1);
  }

  if(value === '-'){
    $("#input_watchtower_" + name).val(valor -1);
  }
}

async function addFeature(player) {

  let meeple = '';
  let feature = 0;

  let tiles = 0;
  let shields =  0;

  let watchtower_type =  '';
  let watchtower_quantity =  0;

  let inn = false;
  let porco = false;
  let catedral = false;
  let fada = false;
  let mago = false;
  let bruxa = false;

  if(player === 'VICTOR') {
    meeple = $('input[name="radio_meeple_victor"]:checked').val();
    feature = $("#select_features_victor").val();

    tiles = Number($("#input_tiles_victor").val());
    shields = Number($("#input_shields_victor").val());

    watchtower_type =  $("#select_watchtower_victor").val();
    watchtower_quantity =  Number($("#input_watchtower_victor").val());

    inn = $('#check_inn_victor').is(':checked');
    porco = $('#check_porco_victor').is(':checked');
    catedral = $('#check_catedral_victor').is(':checked');
    fada = $('#check_fada_victor').is(':checked');
    mago = $('#check_mago_victor').is(':checked');
    bruxa = $('#check_bruxa_victor').is(':checked');
  }

  if(player === 'SHINDI') {
    meeple = $('input[name="radio_meeple_shindi"]:checked').val();
    feature = $("#select_features_shindi").val();

    tiles = Number($("#input_tiles_shindi").val());
    shields = Number($("#input_shields_shindi").val());

    watchtower_type =  $("#select_watchtower_shindi").val();
    watchtower_quantity =  Number($("#input_watchtower_shindi").val());

    inn = $('#check_inn_shindi').is(':checked');
    porco = $('#check_porco_shindi').is(':checked');
    catedral = $('#check_catedral_shindi').is(':checked');
    fada = $('#check_fada_shindi').is(':checked');
    mago = $('#check_mago_shindi').is(':checked');
    bruxa = $('#check_bruxa_shindi').is(':checked');
  }

  if(player === 'RENAN') {
    meeple = $('input[name="radio_meeple_renan"]:checked').val();
    feature = $("#select_features_renan").val();

    tiles = Number($("#input_tiles_renan").val());
    shields = Number($("#input_shields_renan").val());

    watchtower_type =  $("#select_watchtower_renan").val();
    watchtower_quantity =  Number($("#input_watchtower_renan").val());

    inn = $('#check_inn_renan').is(':checked');
    porco = $('#check_porco_renan').is(':checked');
    catedral = $('#check_catedral_renan').is(':checked');
    fada = $('#check_fada_renan').is(':checked');
    mago = $('#check_mago_renan').is(':checked');
    bruxa = $('#check_bruxa_renan').is(':checked');
  }


  // console.log(meeple)
  // console.log(feature)
  // console.log(tiles)
  // console.log(shields)
  // console.log(watchtower_type)
  // console.log(watchtower_quantity)
  // console.log(inn)
  // console.log(porco)
  // console.log(catedral)
  // console.log(fada)
  // console.log(mago)
  // console.log(bruxa)

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

    console.log(obj)

    try {
      await axios.post(API_BASE_URL + '/city', obj);
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

    console.log(obj)

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

    console.log(obj)

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

    console.log(obj)

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

    console.log(obj)

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

    console.log(obj)

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

    console.log(obj)

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

    console.log(obj)

    try {
      await axios.post(API_BASE_URL + '/castle', obj);
      await getInterface();
    } catch (error) {
      console.error(error);
    }
  }

  await resetModal();

}

async function resetModal() {
  $('input[name="radio_meeple_victor"]:checked').val('NORMAL');
  $("#select_features_victor").val('');
  $("#input_tiles_victor").val(0);
  $("#input_shields_victor").val(0);
  $("#select_watchtower_victor").val('');
  $("#input_watchtower_victor").val(0);
  $('#check_inn_victor').prop('checked', false);
  $('#check_porco_victor').prop('checked', false);
  $('#check_catedral_victor').prop('checked', false);
  $('#check_fada_victor').prop('checked', false);
  $('#check_mago_victor').prop('checked', false);
  $('#check_bruxa_victor').prop('checked', false);

  $('input[name="radio_meeple_shindi"]:checked').val('NORMAL');
  $("#select_features_shindi").val('');
  $("#input_tiles_shindi").val(0);
  $("#input_shields_shindi").val(0);
  $("#select_watchtower_shindi").val('');
  $("#input_watchtower_shindi").val(0);
  $('#check_inn_shindi').prop('checked', false);
  $('#check_porco_shindi').prop('checked', false);
  $('#check_catedral_shindi').prop('checked', false);
  $('#check_fada_shindi').prop('checked', false);
  $('#check_mago_shindi').prop('checked', false);
  $('#check_bruxa_shindi').prop('checked', false);

  $('input[name="radio_meeple_renan"]:checked').val('NORMAL');
  $("#select_features_renan").val('');
  $("#input_tiles_renan").val(0);
  $("#input_shields_renan").val(0);
  $("#select_watchtower_renan").val('');
  $("#input_watchtower_renan").val(0);
  $('#check_inn_renan').prop('checked', false);
  $('#check_porco_renan').prop('checked', false);
  $('#check_catedral_renan').prop('checked', false);
  $('#check_fada_renan').prop('checked', false);
  $('#check_mago_renan').prop('checked', false);
  $('#check_bruxa_renan').prop('checked', false);

  ////////////////////////////////////////////////////////////

  $("#select_watchtower_victor").hide();
  $('#group_inn_victor').hide();
  $('#group_pig_victor').hide();
  $('#group_catedral_victor').hide();
  $('#group_fairy_victor').hide();
  $('#group_mage_victor').hide();
  $('#group_witch_victor').hide();
  $('#group_btn_victor').hide();
  $('#group_tiles_victor').hide();
  $('#group_shields_victor').hide();
  $('#group_watchtower_victor').hide();

  $("#select_watchtower_shindi").hide();
  $('#group_inn_shindi').hide();
  $('#group_pig_shindi').hide();
  $('#group_catedral_shindi').hide();
  $('#group_fairy_shindi').hide();
  $('#group_mage_shindi').hide();
  $('#group_witch_shindi').hide();
  $('#group_btn_shindi').hide();
  $('#group_tiles_shindi').hide();
  $('#group_shields_shindi').hide();
  $('#group_watchtower_shindi').hide();

  $("#select_watchtower_renan").hide();
  $('#group_inn_renan').hide();
  $('#group_pig_renan').hide();
  $('#group_catedral_renan').hide();
  $('#group_fairy_renan').hide();
  $('#group_mage_renan').hide();
  $('#group_witch_renan').hide();
  $('#group_btn_renan').hide();
  $('#group_tiles_renan').hide();
  $('#group_shields_renan').hide();
  $('#group_watchtower_renan').hide();
}