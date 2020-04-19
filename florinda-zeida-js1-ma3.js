/* Question 1 */

(a, b) => a - b;

/* Question 2 */
const urlGames = "https://api.rawg.io/api/games?genres=sports";

fetch(urlGames)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        displaysName(json);
    })
    .catch(function(error) {
        console.dir(error);
    });

function displaysName(tittle) {
    for (let i = 0; i < tittle.results.length; i++) {
        console.log(tittle.results[i].name);
    }
};

/* Question 3 */

const text = "These cats are outrageous.";
const changeText = text.replace("cats", "giraffes");
console.log(changeText);

/* Question 4 */

function redirect() {
    var parsedUrl = new URL(window.location.href);
    var userId = parsedUrl.searchParams.get("userId");
    if (!userId) {
        window.location.href = 'third.html';
    }
    if (userId && userId < 10) {
        window.location.href = 'first.html';
    } else if (userId && userId >= 10) {
        window.location.href = 'second.html';
    }
}

/* Question 5 */

function removeButton() {
    const container = document.querySelector(".container")
    const elemButton = document.querySelector(".btn");
    container.removeChild(elemButton);
};
removeButton();


/* Question 6 */
const elephantsElement = document.querySelector(".elephants");
const newElement = document.createElement("li");
newElement.innerText = "Parrots";
newElement.className = "parrots";
elephantsElement.appendChild(newElement);
elephantsElement.before(newElement);

/* Question 7 */
const urlGames = "https://api.rawg.io/api/games/3801";

async function getGames() {
    try {
        const response = await fetch(urlGames);
        const jsonResponse = await response.json();
        const ratingResult = jsonResponse;
        console.log(ratingResult.rating);
    } catch (error) {
        console.log(error);
    } finally {
        console.log("evrething is done");
    }
};
getGames()

function getRating() {
    const container = document.querySelector(".rating");
    let html = "";
    container.forEach(function(index) {
        console.log(index.rating);

        html += `<div>${index.rating}</div>`;

    });
    container.innerHTML = html;
};