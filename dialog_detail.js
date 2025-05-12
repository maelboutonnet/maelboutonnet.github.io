const job_data = {
    stage1: {
        title:"Stagiaire – IRIT",
        detail: "Suite à un prototype dans le cadre de mon master 1, j'ai été chargé d'implémenter une version v0 utilisable. <br>L'objectif du clavier était de permettre à un utilisateur atteint de déficience motrice importante de programmer ses propres logiciels. <br>Au travers d'une mise en oeuvre Agile sur 6 mois, et de prototypes rapidement fournis à des utilisateurs finaux, <br>j'ai pu mettre en oeuvre les compétences que j'ai appris dans le cadre scolaire, dans un contexte réel (plutôt orienté recherche qu'entreprise)",
        tech: "<strong>Tech : </strong>Java (Software), Swing (UI), Log4J (journaux)"
    }
}

function displayDetail(id) {
    // Créer les éléments
    const overlay = document.createElement('div');
    const dialog = document.createElement('div');
    const titre = document.createElement('h2');
    const contenu = document.createElement('p');
    const tech = document.createElement('p');
    const boutonFermer = document.createElement('button');

    // Ajouter du contenu
    job = job_data[id];
    titre.textContent = job.title;
    contenu.innerHTML = job.detail;
    tech.innerHTML = job.tech;
    boutonFermer.textContent = 'Fermer';

    // Styliser rapidement
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 1000;

    dialog.style.backgroundColor = 'white';
    dialog.style.padding = '20px';
    dialog.style.borderRadius = '8px';
    dialog.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    dialog.style.minWidth = '300px';
    dialog.style.textAlign = 'center';

    boutonFermer.style.marginTop = '20px';
    boutonFermer.style.padding = '10px 20px';
    boutonFermer.style.cursor = 'pointer';

    // Ajouter comportement bouton fermer
    boutonFermer.onclick = function() {
        document.body.removeChild(overlay);
    };
    overlay.addEventListener('click', function () {
        document.body.removeChild(overlay);
    });

    dialog.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    // Assembler la boîte
    dialog.appendChild(titre);
    dialog.appendChild(contenu);
    dialog.appendChild(tech);
    dialog.appendChild(boutonFermer);
    overlay.appendChild(dialog);
    document.body.appendChild(overlay);
}