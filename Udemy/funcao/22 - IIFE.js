// IIFE - Immediately Invoked Function Expression

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

//escopo global
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')