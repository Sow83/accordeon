//Sélection des éléments(article)
const questions = document.querySelectorAll(".question");
//Ajout et suppression de classe dans les éléméents (article)
questions.forEach(question => {
    const questionTitle = question.querySelector(".question-title");
    questionTitle.addEventListener("click", function () {
        questions.forEach(item => {
            //Fait disparaitre le texte précédemment ouvert lors d'un clic  sur un autre bouton  
            if (item !== question) {
                item.classList.remove("show-text");         
            }
        });
        //ajoute et enlève la classe show-text dans toutes les balises articles
        question.classList.toggle("show-text"); 
    }); 
});