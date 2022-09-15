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



var byId = (id_name) => {
    return document.getElementById(id_name)
}
var byClass = (class_name) => {
    return document.getElementsByClassName(class_name)
}
let that = JSON.parse(localStorage.getItem('langs'));

// console.log();



const elem = document.querySelectorAll('.translate[data-dict]');
console.log(that.ku['dictionary'])
const class_cells = byClass('direction-cells');
const class_words = byClass('direction-words');


var translate = (lang) => {

    var word = null; 
    for(let i = 0; i < elem.length; i++) {
        // console.log();
        word = elem[i].getAttribute('data-dict')
        elem[i].innerHTML = that[lang]['dictionary'][word];
    }
    
    direction_change(lang);
}



var direction_change = (lang) => {
    for(let i=0; i< class_cells.length; i++) {
        if(that[lang]['type'] === 'rtl'){
            if(class_cells[i].classList.contains('direction-ltr')){
                replaceClasses(class_cells[i],'direction-ltr', 'direction-rtl');
                // replaceClasses(class_cells[i], 'direction-ltr', 'direction-rtl');
            }
            
            }else{
            if(class_cells[i].classList.contains('direction-rtl')){
                replaceClasses(class_cells[i],'direction-rtl', 'direction-ltr');
                // replaceClasses(class_cells[i], 'direction-rtl', 'direction-ltr');

            }
         
        }
    }

    for(let i=0; i< class_words.length; i++) {
        if(that[lang]['type'] === 'rtl'){
            replaceClasses(class_words[i], 'direction-ltr', 'direction-rtl');
            
        }else{
            replaceClasses(class_words[i], 'direction-rtl', 'direction-ltr');
            
          
        }
    }
}



const ku = byId('ku');
const en = byId('en');


ku.addEventListener('click', () => {
    translate('ku');
})
en.addEventListener('click', () => {
    translate('en');
})

