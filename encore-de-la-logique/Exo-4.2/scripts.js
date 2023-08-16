// demander l'heure,puis la minute à l'utilisateur.
let heure = parseInt(prompt("entrez l'heure"));

let minute = parseInt(prompt("entrez la minute"));

// cette partie permet d'ajouter un minute de plus sur la minute saisir;
minute = minute + 1

// verifaction de la conversion des heures et minutes
if(minute === 60){
    minute = 0 ;
    heure = heure + 1
}else if(heure === 24){
    heure = 0;
}

// afficher message dans la page
let afficherHeure = document.querySelector("p");
afficherHeure.innerText = `Dans une minute il sera: ${heure} heure(s), ${minute} minute(s)`;

