import "./node_modules/jquery/dist/jquery.min.js";
import dictionary from "./dictionary.json" assert { type: "json"};

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
    var count = 0;
    for (var i in data) {
        if (data.hasOwnProperty(i)) {
            count++;
        }
    }
    return (count === 0);
}


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











const point_ex = () =>{
    return `
    <div class="input-group w-100 d-flex justify-content-center align-items-center p-0 m-top-10-px" id="point-exchange">
        <input type="text" class="form-control d-flex direction-rtl justify-content-end align-items-center w-80" aria-label="Amount (to the nearest dollar)">

        <span class="input-group-text w-10 d-flex justify-content-center align-items-center"><b>.</b></span>
        <input type="text" class="form-control w-10 d-flex" aria-label="Amount (to the nearest dollar)">
    </div>
    `
}


const static_ex = () =>{
    return `
<div class="input-group w-100 d-flex justify-content-center align-items-center p-0 m-top-10-px " id="static-exchange">
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
  <span class="input-group-text">.00</span>
</div>
    `
}

const element = $('#exchange'),
    second_form = $('#second-form'),
    third_form = $('#third-form'),
    type_of_user = $('#userType');


element.on('change', (e) => {
    e.preventDefault();
    let point = $('#point-exchange'),
        static_ = $('#static-exchange'),
    value = element.find(":selected").text();

    if(value === "Static" || value === "ڕێژەیی"){
        console.log("hello world");

        if(point.length > 0){
            point.remove();
        }
        element.after(static_ex());


    }else{
        if(value === "Point" || value === "بێڕێژە"){
            if(static_.length > 0){
                static_.remove()

            }
            // $(point_ex()).insertAfter(element);

            element.after(point_ex());

        }


    }
})


const first_name  = $('#firstName'),
      last_name = $('#lastName'),
      email_help = $('#email'),
      card_number = $('#cardNumber');


const user_type_input = $('#userTypeInput'),
    full_name_input = $('#fullNameInput'),
    email_address_input = $('#emailAddressInput'),
    card_number_input = $('#cardNumberInput');


var dictype = 'english',
    direction_rtl = 'direction-rtl',
    direction_ltr = 'direction-ltr',
    flex_row_reverse = 'flex-row-reverse',
    flex_row = 'flex-row',
       font_0_9= 'font-vw-0_9',
   font_0_8= 'font-vw-0_8',
    font_1= 'font-vw-1';



var changeVar = (val,dictype, selectedDicType, item, elem) => {
    if (selectedDicType === "kurdish"){
        // console.log(item[selectedDicType]);
        $(val).html(item[selectedDicType]);
        JreplaceClasses($(val), [direction_ltr],[direction_rtl])

        if(elem === "input" || elem === "textarea"){

            $(val).attr("placeholder", item[selectedDicType])
            let value = $(val).attr("placeholder").toLowerCase();
            if( value === "ناوی یەکەم"){
                JreplaceClasses($(val).parent().parent(),[flex_row], [flex_row_reverse])
            }
        }else{
            $(val).html(item[selectedDicType]);
            JreplaceClasses($(val), [direction_ltr],[direction_rtl])

        }
        if(elem === "b"){
            JreplaceClasses($(val).parent(), [direction_ltr],[direction_rtl])
        }

        if(elem === "span"){
            JreplaceClasses($(val),font_1,  font_0_9);
        }
    }
    else{
        // console.log(item[selectedDicType]);
        $(val).html(item[selectedDicType]);
        JreplaceClasses($(val),[direction_rtl], [direction_ltr])

        if(elem === "input" || elem === "textarea"){

            $(val).attr("placeholder", item[selectedDicType])
            let value = $(val).attr("placeholder").toLowerCase();
            if( value === "first name"){
                JreplaceClasses($(val).parent().parent(), [flex_row_reverse],[flex_row])
            }
        }else{
            $(val).html(item[selectedDicType]);
            JreplaceClasses($(val),[direction_rtl], [direction_ltr])

        }
        if(elem === "b"){
            JreplaceClasses($(val).parent(),[direction_rtl], [direction_ltr])
        }
        if(elem === "span"){
            JreplaceClasses($(val),  font_0_9,font_1);
        }
    }
}






var changeDictType = (selectedDictype) =>{

    $("[data-dict |= 'on']").each((i, val) =>{
        // console.log(val)
        JreplaceClasses($(val), [direction_ltr],[direction_rtl])
        // let selected = selectedDictype
        dictionary.forEach((item, index) => {
            // console.log($(val).prop("tagName").toLowerCase())

            if($(val).prop("tagName").toLowerCase() === "b"){

                if($(val).text().toLowerCase() === item[dictype]){
                    changeVar(val, dictype, selectedDictype, item, "b")

                }
            }
            else if($(val).prop("tagName").toLowerCase() === "div"){
                // console.log("reached here bruh " + item[dictype] + " " +$(val).text() )
                if($(val).text().toLowerCase() === item[dictype]){
                    changeVar(val, dictype, selectedDictype, item, "div")

                }

            }
            else if($(val).prop("tagName").toLowerCase() === "option"){
                // console.log("reached here bruh " + item[dictype] + " " +$(val).text() )

                if($(val).text().toLowerCase() === item[dictype]){
                    changeVar(val, dictype, selectedDictype, item, "option")

                }
            }
            else if($(val).prop("tagName").toLowerCase() === "span"){
                if($(val).text().toLowerCase() === item[dictype]){
                    changeVar(val, dictype, selectedDictype, item, "span")


                }
            }
            else if($(val).prop("tagName").toLowerCase() === "input"){
                if($(val).attr("placeholder").toLowerCase() === item[dictype]){
                        changeVar(val, dictype, selectedDictype, item, "input")
                }
            }
            else if($(val).prop("tagName").toLowerCase() === "textarea"){
                if($(val).attr("placeholder").toLowerCase() === item[dictype]){
                    changeVar(val, dictype, selectedDictype, item, "textarea")
                }
            }
        })

    })
    dictype = selectedDictype

}

// changeDictType("kurdish")



$('#english-button').on('click', () => {
    let selected = "english";
    changeDictType(selected);
})



$('#kurdish-button').on('click', () => {
    let selected = "kurdish";
    changeDictType(selected);
})





