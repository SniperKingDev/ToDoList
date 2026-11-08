//créer la fonction ajouter

function Ajouter() {
const tacheInput = document.getElementById("tacheInput");

const taches = document.getElementById("Taches");
//Créer un élement li  et un élement checkbox et prendre la valeur de l'input et le mettre dans cette élement
const task = document.createElement("li");
const checkbox = document.createElement("input");
const span = document.createElement("span");

if(tacheInput.value === "") {
alert("il faut mettre une tache !");
}
else {
//le type de input
checkbox.type = "checkbox";
//prendre le texte de l'input 
span.textContent = tacheInput.value;

span.appendChild(checkbox);
task.appendChild(span);
//afficher dans la zone réserve a cette effet
taches.appendChild(task);
//quand le checkbox est true donc au click
checkbox.addEventListener("change", function() {

    if (checkbox.checked) {
        task.classList.add("terminee");

        setTimeout(function() {
            taches.prepend(task);
        }, 100);

    } else {
        task.classList.remove("terminee");
        taches.appendChild(task);
    }

});
//supprimer le texte
tacheInput.value = "";
}
}
//utiliser un gestionnaire d'évenement si la touche entre
tacheInput.addEventListener("keydown", function(event) {
  if(event.key === "Enter") {
    Ajouter();
  }
});
//avoire tous ce que l'utilisateur entre dans le champ
tacheInput.addEventListener("keydown", function(e) {
    console.log(e.key);
});
//projet terminer le 05/11/2026 à 19h23(heure de l'écriture)
//js c'est toi et le html aussi css = AI