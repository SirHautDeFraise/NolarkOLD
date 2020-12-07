/**
 * Fonction qui va retourner le nombre de verre par l'alcool pur.
 * 
 * @param {int} nbVerres
 * @return {int}
 */
function getAlcoolPur(nbVerres) {
  const uniteAlcool = 10;
  return uniteAlcool * nbVerres;
}

/**
 * Fonction qui va retourner le coefficient par sexe
 * 
 * @param {string} sexe
 * @return {float}
 */
function getCoefDiffusion(sexe) {
  const coefDiffuH = 0.7, coefDiffuF = 0.6;
  if (sexe === 'homme') {
    return coefDiffuH;
  } else {
    return coefDiffuF;
  }
}

/**
 * Fonction qui va retourner l'alcoolemie avec tout les critères de au-dessus
 * 
 * @param {string} sexe
 * @param {int} poids
 * @param {int} nbVerres
 * @return {float}
 */
function getAlcoolemie(sexe, poids, nbVerres) {
// /!\ division par 0, on ne veut pas provoquer la destruction de l'univers ;o)
  if (poids > 0) {
    return (getAlcoolPur(nbVerres) / (poids * getCoefDiffusion(sexe))).toFixed(2);
  } else {
    return 0;
  }
}

/**
 * Fonction qui va retourner le type d'amende en fonction du gramme d'alcool
 * 
 * @param {type} alcoolemie
 * @return {String}
 */
function getAmende(alcoolemie) {
  if (alcoolemie < 0.8) {
    return 'Minoree : 90 euros / Forfaitaire : 135 euros / Majoree : 375 euros';
  } else {
    return '4500 euros';
  }
}

/**
 * Fonction qui retourne la sanction encourue en fonction de l'alcoolémie
 *
 * @param {float} alcoolemie
 * @returns {string}
 */
function getSanction(alcoolemie) {
  const seuil = 0.8;
  if (alcoolemie < seuil) {
    return '6 points + suspension 3 ans';
  } else {
    return '6 points + 2 ans de prison + suspension 3 ans + stage de sensibilisation';
  }
}

/**
 * Fonction qui retourne une valeur entière récupérée via
 * window.document.querySelector(id)
 *
 * @param {string} id
 * @returns {integer}
 */
function getInt(id) {
  let valeur = parseInt(window.document.querySelector(id).value);
  if (isNaN(valeur)) {
    window.document.querySelector(id).value = 0;
    return 0;
  } else {
    return valeur;
  }
}

/**
 * Fonction qui retourne un string récupéré dans un champ via son id
 *
 * @param {string} id
 * @returns {string}
 */
function getString(id) {
  return window.document.querySelector(id).value;
}