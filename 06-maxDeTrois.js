const { number } = require("yargs");

/*
  Énoncé :
  Crée une fonction `maxDeTrois(a, b, c)` qui :
    - retourne "Les trois nombres sont égaux" si les trois valeurs sont identiques
    - retourne le plus grand des trois sinon
    - retourne null si le nombre d'arguments est incorrect ou si un argument n'est pas un nombre

  Signature attendue :
    function maxDeTrois(a, b, c) -> number | string | null

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function maxDeTrois(a, b, c) {
  if (a==b==c){
    return "Les trois nombres sont égaux";
  }
  else if (typeof (a || b || c) !== number )
  return null;
  // Placeholder neutre : retourne null pour indiquer non-implémentation
  else if(a>b&&c)
  return a;
  else if(b<a&&c){ 
  return b;
  }
  else {
  return c;
  }
  
  }



// Ne pas modifier la ligne ci-dessous
module.exports = { maxDeTrois };
