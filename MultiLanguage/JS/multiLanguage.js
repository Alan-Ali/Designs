
if(translation[prevLanguage]['type'] === 'rtl'){
    replaceClasses(byId('body'), 'direction-ltr','direction-rtl');
}


const menu = byId('menu');
const menu_object = byId('menu-object');
const close_button = byId('close-button');
const menu_object_c = byClass('menu-object');

// language buttons
const ku = byId('ku');
const en = byId('en');

var menu_position = "right"

// for(let i = 0; i < input.length; i++) {
//     // input[i].placeholder = "lasdfkjals"
//     input[i].placeholder =  translation[prevLanguage]['dictionary'][input[i].getAttribute('data-dict')];
// }


ku.addEventListener('click', () => {
    setLang('ku');
    location.reload();
})

en.addEventListener('click', () => {
    setLang('en');
    location.reload();
})

var input_words = () => {
    
    var inputs = byTag('input');

    for(let i = 0; i < inputs.length; i++) {
        var dataWord = inputs[i].dataset.dict;
        var word = translation[prevLanguage]['dictionary'][dataWord];
        inputs[i].setAttribute('placeholder', word);
    }

}

input_words();

menu.addEventListener('click', () => {
    console.log('menu click');
    if(menu_position === 'left'){
        // menu_object.style.display = 'flex'c;
        menu_object.style.visibility = 'visible';
        menu_object.style.opacity = '1';

        menu_object_c[0].style.left = '0';
        menu_object_c[0].style.opacity = '1';

    }else{
        // menu_object.style.display = 'flex';
        menu_object.style.visibility = 'visible';
        menu_object.style.opacity = '1';

        menu_object_c[0].style.right = '0';
        
        menu_object_c[0].style.opacity = '1';        

    }


    // replaceClasses(menu_object, 'd-none', 'd-flex');

});

close_button.addEventListener('click', () => {
    
    if(menu_position === 'left'){
        // menu_object.style.display = 'none';
        
        menu_object_c[0].style.left = '-200px';
        menu_object_c[0].style.opacity = '0';
        menu_object.style.opacity = '0';
        menu_object.style.visibility = 'hidden';

    }else{
        
        // menu_object.style.display = 'none';
        
        menu_object_c[0].style.right = '-200px';
        menu_object_c[0].style.opacity = '0';
        menu_object.style.opacity = '0';
        menu_object.style.visibility = 'hidden';


    }   
});
