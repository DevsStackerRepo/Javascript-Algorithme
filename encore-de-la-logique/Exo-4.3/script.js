// demander l'heure,puis la minute et la seconde à l'utilisateur.
let heure = parseInt(prompt("entrez l'heure"));

let minute = parseInt(prompt("entrez la minute"));

let seconde = parseInt(prompt("entrez la seconde"))

// cette partie permet d'ajouter un minute de plus sur la seconde saisir;
seconde = seconde + 1

// verifaction de la conversion des heures et minutes
if(seconde === 60){
    seconde = 0
    minute = minute + 1;
}else if(minute === 60){
    minute = 0
    heure = heure + 1;
}else if(heure === 24){
    heure = 0;
}

// afficher message dans la page
let afficherHeure = document.querySelector("p");
afficherHeure.innerText = `Dans une seconde il sera: ${heure} heure(s), ${minute} minute(s) ${seconde} seconde(s)`;

