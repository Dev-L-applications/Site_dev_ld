
let nouveau   = document.querySelector('#nouveau');
let citation  = document.querySelector('#citation');
let auteur    = document.querySelector('#auteur');

let dernier   = 0;
let nombreAleatoire = 0;
// Tableau de citations
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le développement informatique est une aventure passionnante, plaine de créativité, gratifiante, toujours en pleine évolution. J'aime coder ! ", "LDdwwm"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
  ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
  ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
  ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
  ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
  ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
  ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
];

//Fonction qui va générer un nombre aléatoire grace à l'objet Math.random
function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

// événement quand on click sur nouveau on appel l'index d'une citation dans le tableau ci-dessus
nouveau.addEventListener('click', () => {
    do {
        nbrAleatoire = genererNombreEntier(citations.length); //Mise en mémoire du nbr aléatoire par rapport au nbr d'index du tableau
    }
    while (nbrAleatoire == dernier)

    citation.textContent = citations[nbrAleatoire][0];
    auteur.textContent   = citations[nbrAleatoire][1];
    dernier              = nombreAleatoire;
});