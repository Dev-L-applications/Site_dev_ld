
let nouveau   = document.querySelector('#nouveau');
let citation  = document.querySelector('#citation');
let auteur    = document.querySelector('#auteur');

let dernier   = 0;
let nombreAleatoire = 0;
// Tableau de citations
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le développement informatique est une aventure passionnante, pleine de créativité, gratifiante, toujours en pleine évolution. J'aime coder ! ", "LDdwwm"],
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
  ["Une petite impatience ruine un grand projet.", "Confucius"],
  ["La confiance est un élément majeur : sans elle, aucun projet n’aboutit.", "Eric Tabarly"],
  ["Tu peux tout accomplir dans la vie si tu as le courage de le rêver, l’intelligence d’en faire un projet réaliste, et la volonté de voir ce projet mené à bien", "Sidney A. Friedman"],
  ["Seul, on va plus vite. Ensemble on va plus loin.", "proverbe africain"],
  ["Prévoir consiste à projeter dans l’avenir ce qu’on a perçu dans le passé.", "Henri Bergson"],
  ["On ne se débarrasse pas d’une habitude en la flanquant par la fenêtre. Il faut lui faire descendre l’escalier marche par marche", "Mark Twain"],
  ["Pour réussir il ne suffit pas de prévoir, il faut aussi savoir improviser","Isaac Asimov"],
  ["Il n’y a pas de vent favorable pour celui qui ne sait pas où il va","Sénèque"],
  ["Si tu crois que tu vas réussir, ou si tu crois que tu vas echouer, dans les deux cas tu as raison.","Henry Ford"],
  ["Nos pensées dessinent notre réalité et nous conditionnent, il faut commencer par croire que tout est possible.","Mohamed Boclet(A lire, Top)."],
  ["Si l'avenir m'intéresse, c'est parce que je vais y passé le reste de ma vie.","Marc Twain"]
  ["Ceux qui réussissent n’abandonnent jamais. Ceux qui abandonnent ne réussissent jamais.","Napoléon Hill"],
  ["Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.","Winston Churchill"],
  ["Le succès est la somme de petits efforts, répétés jour après jour.","Robert Collier"],
  ["La persévérance est la clé de tout succès durable.","Earl Nightingale"],
  ["Le plus grand plaisir de la vie est de réaliser ce que les autres vous croient incapable d’accomplir.","Walter Bagehot"],
  ["Notre plus grande gloire n’est pas de ne jamais tomber, mais de nous relever à chaque chute.","Confucius"],
  ["Vous ne savez jamais à quel point vous êtes fort jusqu’au jour où être fort reste votre seule option.","Bob Marley"],
  ["La seule limite à notre épanouissement de demain sera nos doutes d’aujourd’hui.","Franklin D. Roosevelt"],
  ["La vie est comme une bicyclette, il faut avancer pour ne pas perdre l’équilibre.","Albert Einstein"],
  ["Si vous ne croyez pas en vous-même, pourquoi quelqu’un d’autre le ferait-il ?","Michael Jordan"],
  ["Si vous voulez que la vie vous sourie, apportez-lui d’abord votre bonne humeur.","Spinoza"],
  ["Celui qui déplace la montagne, c’est celui qui commence à enlever les petites pierres.","Confucius"],
  ["Si vous ne commettez pas d’erreur, c’est que vous ne travaillez pas assez dur sur les problèmes. Et ça, c’est une grande erreur.","Franck Wilczek"],
  ["Il n’y a pas de petites ou grandes choses mais il y a ce que j’aime, ce que je fais et ce qui me plait.","Jacques Prévert"],
  ["Ce n’est pas tant ce que les gens ignorent qui cause de vrais problèmes, c’est tout ce qu’ils savent et qui n’est pas vrai.","Mark Twain"],
  ["Votre temps est limité, alors ne le gaspillez pas en vivant la vie de quelqu’un d’autre. Ne soyez pas piégés par les idées toutes faites -les dogmes- ce qui revient à vivre selon le résultat de la pensée d’autrui. Ne laissez pas le bruit de l’opinion des autres étouffer votre voix intérieure. Et, le plus important de tout, ayez le courage de suivre votre cœur et votre intuition. Eux savent déjà ce que vous voulez vraiment devenir. Tout le reste est secondaire.","Steve Jobs"],
  ["Il faut en tout cas admettre une vérité dérangeante : on est vieux dans le regard des autres bien avant de l'être dans le sien.","Benoîte Groult"],
  ["Dans ce monde égoïste qui est le nôtre, on se demande parfois si on ne devrait pas se déguiser en miroir pour que les autres nous accordent un regard","Philippe Geluck"],
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