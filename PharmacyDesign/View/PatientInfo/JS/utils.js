
export var empty = (data) => {
    if (typeof (data) == 'number' || typeof (data) == 'boolean') {
        return false;
    }
    if (typeof (data) == 'undefined' || data === null) {
        return true;
    }
    if (typeof (data.length) != 'undefined') {
        return data.length === 0;
    }
    let count = 0;
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return (count === 0);
}


export const  capitalizeFirstLetter = (str) => {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}


export var byQuery = (query) => {
    return document.querySelector(query)
}
export var allByQuery = (query) => {
    return document.querySelectorAll(query)
}
export var byTag = (tag_name) => {
    return document.getElementsByTagName(tag_name)
}
export var byClass = (class_name) => {
    return document.getElementsByClassName(class_name)
}
export var byId = (id_name) => {
    return document.getElementById(id_name)
}

export var byName = (tag_name) => {
    return document.getElementsByName(tag_name)
}


const queryCheck = (s) => document.createDocumentFragment().querySelector(s)
export const isSelectorValid = (selector) => {
    try { queryCheck(selector) } catch { return false }
    return true
  }
  