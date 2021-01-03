fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "292526727fmsh6a6c8461e5c2712p135117jsnbb5ae03b527f",
        "x-rapidapi-host": "quotes15.p.rapidapi.com"
    }
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
        document.getElementById('quote').innerHTML = response.content;
        document.getElementById('author').innerHTML = '- ' + response.originator.name;
    })
    .catch(err => {
        console.error(err);
    });