
console.log(window.location.search)
let params = new URLSearchParams(window.location.search);

if(!params.has('id')){
    window.location.replace('../')
}

