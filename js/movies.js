/**
 * Sélection de tous les films
 */
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