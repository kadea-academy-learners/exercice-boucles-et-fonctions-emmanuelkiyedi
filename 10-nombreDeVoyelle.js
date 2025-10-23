/*
  Énoncé :
  Écris une fonction `nombreDeVoyelles(phrase)` qui retourne le nombre de voyelles
  (a, e, i, o, u, y) dans une chaîne, insensible à la casse.

  Signature attendue :
    function nombreDeVoyelles(phrase) -> number

  Placeholder : levée d'erreur pour indiquer que l'exercice doit être implémenté.
*/
function nombreDeVoyelles(phrase) {
  // Exercice non implémenté : doit compter les voyelles
  // Placeholder neutre : retourne 0 pour indiquer non-implémentation
  let nombreDeVoyelles = 0;
  phrase = phrase.toLowerCase(); 
  for(let i=0; i<phrase.length; i++){
  if (phrase[i]=="a"){
    nombreDeVoyelles=nombreDeVoyelles+1
  }
  else if (phrase[i]=="e"){ 
    nombreDeVoyelles++
  }
  else if (phrase[i]=="i"){
    nombreDeVoyelles++
  }
  else if (phrase[i]=="o"){
    nombreDeVoyelles++
  }
  else if (phrase[i]=="u"){
    nombreDeVoyelles++
  }
  else if (phrase[i]=="y"){
    nombreDeVoyelles++
  }
    
}  
  return nombreDeVoyelles;
}
// Ne pas modifier la ligne ci-dessous
module.exports = { nombreDeVoyelles }
