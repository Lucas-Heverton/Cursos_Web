/*
//SEM PROMISSE
var xhr = new XMLHttpRequest();

// api de ususarios do github
xhr.open('GET', 'https://api.github.com/users/lucas-heverton');
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
    }
}

-----------------------------------------------------------------------------

//COM PROMISSE
var minhaPromise = function() {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.gihthub.com/users/lucas-heverton');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição!');
                }
            }
        }
    });
}

minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.error(error);
    });
*/

// COM AXIOS
//com o axios as informações são maiores temos uma visibilidade maior.
axios.get('https://api.github.com/users/lucas-heverton')
    .then(function (resolve) {
        console.log(resolve)
    })
    .catch(function(error) {
        console.warn(error)
    });
