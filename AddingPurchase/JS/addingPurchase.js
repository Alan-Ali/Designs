


// import {byId} from "../../assets/utils.js"

var byId = (id_name) => {
    return document.getElementById(id_name)
}

var input = byId('fileinput');

input.addEventListener('change', () => {
    let file = input.files[0];
    let file_name = byId('filename');
    file_name.innerHTML = file.name;
    // console.log(file);
});