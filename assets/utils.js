
const JreplaceClasses = (element, css_class, replacement) => {
    // console.log()
    if (Array.isArray(css_class)) {
        if(Array.isArray(element)){
            for(let j = 0; element.length; j++){
                for (let i = 0; i < css_class.length; i++) {
                    if (element[j].prop('classList').contains(css_class[i])) {
                        element[j].prop('classList').remove(css_class[i]);
                    }
                }
                if (Array.isArray(replacement)) {
                    for (let i = 0; i < replacement.length; i++) {
                        element[j].prop('classList').add(replacement[i]);
                    }
                } else {
                    element[j].prop('classList').add(replacement);
                }
            }

        }else{
            for (let i = 0; i < css_class.length; i++) {
                if (element.prop('classList').contains(css_class[i])) {
                    element.prop('classList').remove(css_class[i]);
                }
            }
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.prop('classList').add(replacement[i]);
                }
            } else {
                element.prop('classList').add(replacement);
            }
        }



    } else {
        if(Array.isArray(element)){
            for(let i = 0; i < element.length;i++){
                if (element[i].prop('classList').contains(css_class)) {
                    element[i].prop('classList').remove(css_class);
                    if (Array.isArray(replacement)) {
                        for (let j = 0; j < replacement.length; j++) {
                            element[i].prop('classList').add(replacement[j]);
                        }
                    } else {
                        element[i].prop('classList').add(replacement);
                    }

                }
            }
        }else if (element.prop('classList').contains(css_class)) {
            element.prop('classList').remove(css_class);
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.prop('classList').add(replacement[i]);
                }
            } else {
                element.prop('classList').add(replacement);
            }

        }

    }
    // return element;
}




const replaceClasses = (element, css_class, replacement) => {
    // console.log()
    if (Array.isArray(css_class)) {
        if(Array.isArray(element)){
            for(let j = 0; element.length; j++){
                for (let i = 0; i < css_class.length; i++) {
                    if (element[j].classList.contains(css_class[i])) {
                        element[j].classList.remove(css_class[i]);
                    }
                }
                if (Array.isArray(replacement)) {
                    for (let i = 0; i < replacement.length; i++) {
                        element[j].classList.add(replacement[i]);
                    }
                } else {
                    element[j].classList.add(replacement);
                }
            }

        }else{
            for (let i = 0; i < css_class.length; i++) {
                if (element.classList.contains(css_class[i])) {
                    element.classList.remove(css_class[i]);
                }
            }
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.classList.add(replacement[i]);
                }
            } else {
                element.classList.add(replacement);
            }
        }



    } else {
        if(Array.isArray(element)){
            for(let i = 0; i < element.length;i++){
                if (element[i].classList.contains(css_class)) {
                    element[i].classList.remove(css_class);
                    if (Array.isArray(replacement)) {
                        for (let j = 0; j < replacement.length; j++) {
                            element[i].classList.add(replacement[j]);
                        }
                    } else {
                        element[i].classList.add(replacement);
                    }

                }
            }
        }else if (element.classList.contains(css_class)) {
            element.classList.remove(css_class);
            if (Array.isArray(replacement)) {
                for (let i = 0; i < replacement.length; i++) {
                    element.classList.add(replacement[i]);
                }
            } else {
                element.classList.add(replacement);
            }

        }

    }
    // return element;
}



 var byQuery = (query) => {
    return document.querySelector(query)
}
 var allByQuery = (query) => {
    return document.querySelectorAll(query)
}
 var byTag = (tag_name) => {
    return document.getElementsByTagName(tag_name)
}
 var byClass = (class_name) => {
    return document.getElementsByClassName(class_name)
}
var byId = (id_name) => {
    return document.getElementById(id_name)
}

 var byName = (tag_name) => {
    return document.getElementsByName(tag_name)
}
