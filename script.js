const spanContainers = document.querySelectorAll ('.Title div');

spanContainers.forEach(item =>{

    const letters = item.children[0].textContent.split('');
    
    item.innerHTML = "";
   

    letters.forEach((el,index)=> {
        item.innerHTML += `<span style = "transition-delay: ${0.07*index}s">${el} </span>`
    })
}) 



/* 


? Explication du code ci-dessus : 

! La première ligne const spanContainers = document.querySelectorAll('.Title div'); sélectionne tous les éléments <div> qui sont des enfants de l'élément ayant la classe CSS "Title" et stocke cette liste d'éléments dans la variable spanContainers.

? La deuxième ligne utilise la méthode forEach() pour boucler sur chaque élément de la liste spanContainers.

!  À l'intérieur de la boucle forEach(), la variable letters est définie en utilisant la méthode split() appliquée au contenu texte du premier enfant de l'élément courant dans la boucle.

? Ensuite, la propriété innerHTML de l'élément courant est réinitialisée à une chaîne vide, ce qui supprime tout contenu HTML précédent de l'élément.

! Enfin, une autre boucle forEach() est utilisée pour boucler sur chaque lettre de la chaîne letters. À chaque itération de la boucle interne, un nouveau span est créé avec la lettre courante et une valeur de délai de transition calculée en fonction de l'index de la lettre. Ce span est ensuite ajouté à la propriété innerHTML de l'élément courant, en utilisant l'opérateur d'addition (+=) pour ajouter à la chaîne de HTML existante.


? En résumé, ce code JavaScript sélectionne des éléments spécifiques du document HTML, efface leur contenu existant, puis ajoute dynamiquement des éléments HTML en fonction du texte initial de l'élément. Ces éléments HTML sont animés en réponse aux interactions utilisateur spécifiées dans la feuille de style CSS correspondante.
*/