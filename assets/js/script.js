const titlesEl = document.getElementById("list");
const submitEl = document.getElementById("submit");
const searchEl = document.getElementById("search");


const buttonDo = function(event) {
    event.preventDefault();

    const searchTerm = searchEl.value

    if (searchTerm) {
        getStuff(searchTerm);

    }

}

const getStuff = function(searchTerm) {
    const searchUrl = "http://www.loc.gov/search/?q=" + searchTerm + "&fo=json"

    fetch(searchUrl)
    .then (function(response) {
        if (response.ok) {
            return response.json();
        }})
    .then (function(data) {
        displayStuff(data.results);
    })
    
}

const displayStuff = function(stuff) {
    console.log(stuff);
    for (let i = 0; i < stuff.length; i++) {
        const stuffEl = document.createElement("div");
        stuffEl.textContent = stuff[i].title;
        titlesEl.append(stuffEl);
    }
}

submitEl.addEventListener('click', buttonDo);