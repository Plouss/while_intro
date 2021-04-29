// let classe = []
// let cla = prompt("choisissez le nombre max d'étudiants dans la classe");
// while (classe.length != cla) {
//     classe.push(prompt("rentrez un nom"))
// }
// console.log(classe);


// //EXO1
// let classe = ["Alexis", "Andy", "Charles", "Dorian", "Farhad", "Ilyas", "Junior", "Kev", "Loïc"]
// let i= 0
// while (i<9) {
//     console.log("Bonjour " + classe [i]);
//     i++
// }
// console.log(classe);


// //EXO2
// let fruits = ["banane", "kiwi", "fraise", "peche", "orange", "ananas"]
// console.log(fruits);
// while (fruits.length != 0) {
//     fruits.pop()
//     console.log(fruits);
// }


// //EXO3
// let plegumes = ["banane", "kiwi", "fraise", "peche"];
// let caisseLegumes = [];
// let i = 0;
// while (i<plegumes.length) {
//     caisseLegumes.push(plegumes[0]);
//     plegumes.splice(0, 1);
// }
// console.log(caisseLegumes);
// console.log(plegumes);


// //EXO4
// let enigme = prompt("Comment on appelle un traitre?");
// while (enigme != "Adrien") {
//     enigme = prompt("Mauvaise réponse");
// }
// alert("Oui, c'est bien Adrien!!");


// //exo5
// let enigme;
// do {
//     enigme = prompt("Qu'est-ce qui bouge et qui ne bouge pas?");
//     if (enigme=="Tout") {
//         alert("Bonne réponse")
//     } else {
//         enigme = prompt("réessayez!")
//     }
// } while (enigme != "Tout");


// //exo6

// //methode farhad
// const date = new Date();
// let ourYear = date.getFullYear();
// let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
// let yourTry;
// let triesNum = 3;
// let answer = ourYear - randomYear;
// while (triesNum > 0) {
//     yourTry = +prompt(`Si je suis née en ${randomYear}, quel age j'ai aujourd'hui ?`);
//     triesNum--;
//     if (yourTry == answer) {
//         triesNum = 0;
//     }
// }

// if (yourTry == answer) {
//     alert("Bonne réponse");
// } else {
//     alert(`Il te reste ${triesNum} essaies`);
// }

// //methode andy
// const date = new Date();
// let ourYear = date.getFullYear();
// let randomYear = Math.floor(Math.random()*(ourYear-1970+1))+1970;
// let question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
// let i = 0;

// while ((question != ourYear-randomYear) && i < 2) {
//     question = prompt(`Si je suis née en ${randomYear}, quel age ai je aujourd'hui ?`);
//     i++;
// }

// if (question == ourYear-randomYear) {
//     alert('bonne réponse');
// } else {
//     alert('game over');
// }

//exo7
let panierFruits = [];

while (panierFruits.length != 8) {
    panierFruits.push(prompt("Remplissez le panier de fruit, jusqu'a obtenir 8 fruits"));
    alert(panierFruits); //fin
}

let question = prompt("desire tu retirer un fruit ? ");

let panierFruit = [];
let reponse;
let index = false;
let compteur = 0;

while (index == false) {
    if (compteur < 8) {
        reponse = prompt("Donnez moi un fruit");
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        console.log(reponse);
        panierFruit.push(reponse);
        compteur++;
    }

    if (compteur == 8) {
        alert(panierFruit);
        reponse = prompt('Voulez vous retirer un fruit ?');
        reponse = reponse.charAt(0).toUpperCase() + reponse.slice(1);
        panierFruit.splice(panierFruit.indexOf(reponse), 1);

        if (panierFruit.indexOf(reponse) == -1) {
            index = true;
        }
    }
}

alert('merci bonne appétit');
alert(`ceci est le derniere etat de votre panier: ${panierFruit}`);