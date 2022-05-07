/**
 * Sélection de tous les films
 */
const selectAllMovies = () => {
    fetch('http://api.test/movies.php')
    .then(response => response.json())
    .then(movies => {
        let tbody = document.querySelector('tbody');

        movies.forEach(movie => {
            let tr = `<tr>
                <th scope="row">${movie.id}</th>
                <td>
                    <img class="w-25 rounded" src="${movie.image}" alt="">
                </td>
                <td>${movie.title}</td>
                <td>${movie.date}</td>
                <td>
                    <a href="details.php?id=${movie.id}">Détails</a>
                </td>
            </tr>`;

            tbody.innerHTML += tr;
        });
    })
    .catch(error => alert(error));
}

// Affiche tous les films
selectAllMovies();


const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Créer un objet des données du formulaire
    const datas = {
        "title": document.querySelector('#title').value,
        "description": document.querySelector('#description').value,
        "date": document.querySelector('#date').value,
        "time": document.querySelector('#time').value,
        "director": document.querySelector('#director').value,
        "image": document.querySelector('#image').value,
        "trailer": document.querySelector('#trailer').value
    }

    fetch('http://api.test/add.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datas) // Convertit en JSON
    })
        .then(response => response.json())
        .then(movie => {
            // Affiche tous les films
            selectAllMovies();
        })
        .catch(error => alert(error));
});