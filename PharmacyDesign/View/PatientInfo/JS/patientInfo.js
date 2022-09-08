
import "../../../node_modules/jquery/dist/jquery.min.js"
import {byName,isSelectorValid,byClass,byId, byTag, byQuery, allByQuery,empty, capitalizeFirstLetter } from "./utils.js"
// import { createPopper } from '@popperjs/core';
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";



// const popcorn = document.querySelector('#popcorn');
// const tooltip = document.querySelector('#tooltip');
// createPopper(popcorn,dropdown, {
//   placement: 'top',
// });




const chronicDiseaseAdd = (name, placeholder) => {
    return `
    <div id="${name}-addition" class="input-group w-100 m-top-15-px positoin-relative">
        <button id="${name}-addition-button" class="btn btn-success mdi mdi-plus w-9" type="button" aria-placeholder=""></button>
        <input id="${name}-input" type="text" class="form-control w-91" placeholder="${placeholder}" aria-label="Example text with button addon" aria-describedby="button-addon1">
    </div>
    `
}

const additionCard = (name) => {
    return `
    <div id="${name}-card" class="card m-top-15-px border-0 position-relative z-min-1" style="width: 100%;">
        <ul id="${name}-list" class="list-group ">

        </ul>
    </div>
    `
}

const additionCardWithoutIndex = (name) => {
    return `
    <div id="${name}-card" class="card m-top-15-px border-0" style="width: 100%;">
        <ul id="${name}-list" class="list-group ">

        </ul>
    </div>
    `
}

const chronicDiseaseItem = (name,placeholder) => {
    return `
    <li class="list-group-item  border-0">
        <div class="input-group w-100 ">
            <input type="text" class="form-control "  value="${placeholder}" placeholder="${placeholder}" aria-label="Recipient's username" aria-describedby="button-addon2" disabled >
            <button class="btn btn-danger mdi mdi-delete ${name}-item " type="button" ></button>
        </div>
    </li>
    `
}

const pastSurgeryAddition = (name, placeholder) => { 
    return `
    <div id="past-surgery-addition" class="m-top-15 w-100 z-0 ">
        <div id="${name}-addition" class="input-group w-100 m-top-15-px position-relative">
            <button id="${name}-addition-button" style="border-bottom-left-radius: 0px; " class="btn btn-success mdi mdi-plus w-9 " type="button" aria-placeholder=""></button>
            <input style="border-top-right-radius: 5px; border-bottom-right-radius: 0px; " id="${name}-input" type="text" class="form-control w-91 " placeholder="${placeholder} " aria-label="Example text with button addon" aria-describedby="button-addon1">
        </div>                    
        <div class="input-group w-100 rounded-0  ">
            <textarea id="${name}-textarea-input" class="form-control rounded-0 rounded-bottom w-100" aria-label="With textarea" placeholder="Description..."></textarea>
        </div>
    </div>
    
    `
}

const surgeryAddition = (name, textareaValue, inputValue) => {
    return `
    <li class="list-group-item  border-0 position-relative">
        <div class="input-group w-100 ">
            <input style="border-top-left-radius: 5px; border-bottom-left-radius: 0;" type="text" class="form-control "  value="${inputValue}" placeholder="" aria-label="" aria-describedby="button-addon2" disabled >
            <button style="border-top-right-radius: 5px; border-bottom-right-radius: 0;" class="btn btn-danger mdi mdi-delete ${name}-item " type="button" ></button>
        </div>

        <div class="input-group w-100">
            <div class="input-group rounded-0 position-relative ">
                <textarea style="" class="form-control rounded-0 rounded-bottom w-100" value="${textareaValue}" aria-label="With textarea" placeholder="" disabled>${textareaValue}</textarea>
            </div>
        </div> 
    </li>
    `
}


const pastSurgerySuggestion = () => {
    return `
    <div id="past-surgery-suggestion-card" class="card bg-color-transparent position-absolute  border-0 past-surgery-suggestion" style="width: 91%;">
        <ul id="past-surgery-suggestion-list" class="list-group bg-color-transparent bg-light border-0">
            <li class="list-group-item  border-0 bg-color-transparent m-0 p-0">
                <button type="button" class=" btn btn-outline-success w-100 m-0 rounded-0 d-flex justify-content-start align-items-center list-group-button">asd fasdf asdfsfs</button>
            </li>
            <li class="list-group-item  border-0 bg-color-transparent m-0 p-0">
                <button type="button" class=" btn btn-outline-success w-100 rounded-0 d-flex justify-content-start align-items-center  list-group-button">sdfa sdfasd fas</button>
            </li>
            <li class="list-group-item  border-0 bg-color-transparent m-0 p-0">
                <button type="button" class=" btn btn-outline-success w-100 rounded-0 rounded-bottom d-flex justify-content-start align-items-center  list-group-button">as d fasdf asd f</button>
            </li>   
        </ul>
</div>
    `
}







const radioButtonsAffairs = (name, val) => {
    const radio_type = name;
    let separated = radio_type.split("-");
    // console.log('#' + radio_type +'-addition-button')
    for(let i = 0; i < separated.length; i++) {
        separated[i] = capitalizeFirstLetter(separated[i]);
    }
    const joined = separated.join(" ");
    // const node_value = val.value; 
    console.log( byId(`${radio_type}-addition`))
    
    if(val.matches(":checked") && val.value.toLowerCase() == "yes" && !byId(`${radio_type}-addition`)){
        console.log("hello world")
        byId(`${radio_type}`).insertAdjacentHTML('beforeend',chronicDiseaseAdd(radio_type, joined))
        
        // console.log(chronicDiseaseAdd(radio_type, joined))

        

        byId(`${radio_type}-addition-button`).addEventListener("click", () => {      
            // console.log("here bruh")
            if(!empty(byId(`${radio_type}-input`).value)){
                // console.log("here bruh how are ou")
                if(!byId(`${radio_type}-card`)){
                    
                    byId(`${radio_type}`).insertAdjacentHTML('beforeend',additionCardWithoutIndex(radio_type));
                    byId(`${radio_type}-list`).insertAdjacentHTML( 'afterbegin' ,chronicDiseaseItem(radio_type, byId(`${radio_type}-input`).value));

                    
                }else{
                    byId(`${radio_type}-list`).insertAdjacentHTML( 'afterbegin' ,chronicDiseaseItem(radio_type, byId(`${radio_type}-input`).value));
                }
                byId(`${radio_type}-input`).value = "";
                
                [...byClass(`${radio_type}-item`)].forEach((val, i) => {
                    // console.log(" reached here")


                    val.addEventListener("click", ()=>{
                        // $(val).parent().parent().remove();
                        let i = 0, value = val;
                        while(i != 2){
                            value = value.parentNode;
                            // console.log(value);
                            i++;
                        }
                        value.parentNode.removeChild(value);
                    });
                })                
            }
    
    
        })

        byId(`${radio_type}-input`).addEventListener('keypress', (event) => {
            if(event.key === 'Enter'){
                if(!empty(byId(`${radio_type}-input`).value)){
                    if(!byId(`${radio_type}-card`)){
                        // console.log("drugs-allergy-card is empty");
                        byId(`${radio_type}`).insertAdjacentHTML('beforeend', additionCardWithoutIndex(radio_type));
                        byId(`${radio_type}-list`).insertAdjacentHTML('afterbegin', chronicDiseaseItem(radio_type, $(`#${radio_type}-input`).val()));
    
                        
                    }else{
                        byId(`${radio_type}-list`).insertAdjacentHTML('afterbegin', chronicDiseaseItem(radio_type, $(`#${radio_type}-input`).val()));
        
                    }
                    byId(`${radio_type}-input`).value = "";
                    
                    [...byClass(`${radio_type}-item`)].forEach((val, i) => {
                        // $(val).parent().parent().remove();

                        val.addEventListener("click", ()=>{
                            // $(val).parent().parent().remove();
                            let i = 0, value = val;
                            while(i != 2){
                                value = value.parentNode;
                                // console.log(value);
                                i++;
                            }
                            if(value.parentNode.hasChildNodes()){
                                value.parentNode.removeChild(value);
                            }
                            
                        });


                    })                
                }
            }
        })
    }else{
        byQuery(`#${radio_type}-addition`).parentNode.removeChild(byQuery(`#${radio_type}-addition`))
        byQuery(`#${radio_type}-card`).parentNode.removeChild(byQuery(`#${radio_type}-card`))
    }
    
}

byName('chronicdisease').forEach((val,i) => {
    console.log(val)
    val.addEventListener('change', (e) => {
        radioButtonsAffairs('chronic-disease', val);
    })
    
})

byName('familyhistory').forEach((val,i) => {
    console.log(val)
    val.addEventListener('change', (e) => {
        radioButtonsAffairs('family-history', val);
    })
    
})

byName('drugsallergy').forEach((val,i) => {
    console.log(val)
    val.addEventListener('change', (e) => {
        radioButtonsAffairs('drugs-allergy', val);
    })
    
})


byName('pastsurgery').forEach((val,i) => {
    console.log(val)
    val.addEventListener('change', (e) => {
        if(val.matches(":checked") && val.value.toLowerCase() == "yes" && !byId("#past-surgery-addition")){
            byId('past-surgery').insertAdjacentHTML('beforeend',pastSurgeryAddition("past-surgery", "Past surgery"));
        
            
            byId("past-surgery-input").addEventListener("focus", () => {
                byId("past-surgery-input").insertAdjacentHTML('afterend', pastSurgerySuggestion());

                [...byClass("list-group-button")].forEach((val, i) => {
                    val.addEventListener("click"  , () => {
                        byId("past-surgery-input").value = val.innerHTML; 
                        byId("past-surgery-suggestion-card").parentNode.removeChild(byId("past-surgery-suggestion-card"))
                    });
                })
            })
            
            byId('past-surgery-addition-button').addEventListener("click", () => {
                if(!empty(byId("past-surgery-input").value)){
                    if(!byId("past-surgery-card")){
                        // console.log("past-surgery-card is empty");
                        byId('past-surgery').insertAdjacentHTML('beforeend',additionCard("past-surgery"));
                        byId('past-surgery-list').insertAdjacentHTML('afterbegin',surgeryAddition("past-surgery", byId("past-surgery-textarea-input").value ,byId("past-surgery-input").value));
    
                    }else{
                        byId('past-surgery-list').insertAdjacentHTML('afterbegin',surgeryAddition("past-surgery", byId("past-surgery-textarea-input").value ,byId("past-surgery-input").value));
    
                    }
                    byId("past-surgery-suggestion-card").parentNode.removeChild(byId("past-surgery-suggestion-card"));
                    byId("past-surgery-input").value = "";
                    byId("past-surgery-textarea-input").value = "";
    
                    
                    [...byClass(`past-surgery-item`)].forEach((val, i) => {
                        // $(val).parent().parent().remove();

                        val.addEventListener("click", ()=>{
                            // $(val).parent().parent().remove();
                            let i = 0, value = val;
                            while(i != 2){
                                value = value.parentNode;
                                // console.log(value);
                                i++;
                            }
                            if(value.parentNode.hasChildNodes()){
                                value.parentNode.removeChild(value);
                            }
                            
                        });
                    })     
                }
            })

            let value = [byId(`past-surgery-input`), byId("past-surgery-textarea-input")];

            value.forEach((val, i )=> {

                val.addEventListener('keypress', (event) => {
                    if(event.key === 'Enter'){
                        console.log("Entered")
                        if(!empty(byId(`past-surgery-input`).value)){
                            if(!byId("past-surgery-card")){
                                // console.log("past-surgery-card is empty");
                                byId('past-surgery').insertAdjacentHTML('beforeend',additionCard("past-surgery"));
                                byId('past-surgery-list').insertAdjacentHTML('afterbegin',surgeryAddition("past-surgery", byId("past-surgery-textarea-input").value ,byId("past-surgery-input").value));
            
                            }else{
                                byId('past-surgery-list').insertAdjacentHTML('afterbegin',surgeryAddition("past-surgery", byId("past-surgery-textarea-input").value ,byId("past-surgery-input").value));
            
                            }
                            byId("past-surgery-input").value = "";
    
                            byId("past-surgery-textarea-input").value = "";
    
                    
                            [...byClass(`past-surgery-item`)].forEach((val, i) => {
        
                                val.addEventListener("click", ()=>{
                                    let i = 0, value = val;
                                    while(i != 2){
                                        value = value.parentNode;

                                        i++;
                                    }
                                    if(value.parentNode.hasChildNodes()){
                                        value.parentNode.removeChild(value);
                                    }
                                    
                                });
        
        
                            })    
                        }
                    }
                })
            })
        }
        else{
            byQuery(`#past-surgery-addition`).parentNode.removeChild(byQuery(`#past-surgery-addition`))
            byQuery(`#past-surgery-card`).parentNode.removeChild(byQuery(`#past-surgery-card`))
        }
    })
    
})


document.addEventListener("mouseover", (e) => {
    // e.preventDefault();

    e.stopPropagation();
//    setTimeout(() => {
    if(!byQuery("#past-surgery").matches(":hover") && byId("past-surgery-suggestion-card") ){
        // console.log("alsdkfjls")
        byId("past-surgery-suggestion-card").parentNode.removeChild(byId("past-surgery-suggestion-card"));
    }
//    }, 10000);
})



