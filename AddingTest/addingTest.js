var addition_button = document.getElementById('addition-button'),
    test_container = document.getElementById('test-container'),
    test_addition_name = document.getElementById('test-addition-name'),
    category = document.getElementById('category'),
    test = document.getElementById('test'),
    btn_container = document.getElementById('button-container'),
    suggestion = document.getElementById('suggestion-container');




var testName = (test_name) => {

    return `
    <div class="row mx-0 mt-2 m-0 br-15-px p-2 font-size-15-px test-parts">
        <div class="w-20 dis-flex-center-start test-name" id=""><b>${test_name}</b></div>
        <div class="w-20 dis-flex-center-start p-1">
            <input type="text" class="form-control p-1 " readonly value="333">
        </div>
        <div class="w-20 dis-flex-center-start  p-1">
            <input type="text" class="form-control p-1 " readonly value="333">
        </div>
        <div class="w-25 dis-flex-center-start  p-1">
            <input type="text" class="form-control p-1 " readonly value="333">
        </div>
        <div class="w-15 dis-flex-center ">
            <div class="btn dis-flex-center delete-button rounded rounded-2 w-90 border-0">
                Delete
            </div>
        </div>
    </div>
    `
}


var removeSuggestion = () => {
    suggestion.style.maxHeight = '50px';
    suggestion.style.opacity = "0";
    suggestion.style.top = "100%";
    setTimeout(() => {
        suggestion.style.display = 'none';
    }, 350)
}
var showSuggestion = () => {
    suggestion.style.display = 'flex';
    setTimeout(() => {
        suggestion.style.maxHeight = '400px';
        suggestion.style.overflowY = 'scroll';
        suggestion.style.top = "110%";
        suggestion.style.opacity = "1";

    }, 300)
}

test_addition_name.addEventListener('keypress', (e) => {
    // event.preventDefault();
    if (e.key === "Enter" && test_addition_name.value !== "") {
        console.log("slfkjsl");
        test_container.insertAdjacentHTML('afterbegin', testName(test_addition_name.value));
        removeSuggestion();
        delete_button();
        test_addition_name.focus();
    }

});

document.addEventListener("click", () => {
    if (!suggestion.matches(':hover') && !test_addition_name.matches(':hover')) {
        removeSuggestion();
    }
});

test_addition_name.addEventListener('input', (e) => {
    // event.preventDefault();
    suggestion.style.display = 'flex';
    if (test_addition_name.value !== "") {
        showSuggestion();
    } else {
        removeSuggestion();
    }
});

var suggestion_features = () => {
    var suggestions = [...document.getElementsByClassName('suggestions')];
    suggestions.forEach((val, i) => {
        val.addEventListener('click', () => {
            test_addition_name.value = val.innerHTML.trim();
            test_addition_name.focus();
            removeSuggestion();
        })
    });
};



var delete_button = () => {
    var delete_button = [...document.getElementsByClassName('delete-button')];
    var test_parts = [...document.getElementsByClassName('test-parts')];
    delete_button.forEach((val, i) => {
        // console.log(i);
        if (!test_parts[i].classList.contains('ran_over')) {
            var temp = i;
            val.addEventListener('click', () => {
                test_parts[i].parentElement.removeChild(test_parts[temp]);
                // console.log(temp)
            });
            test_parts[i].classList.add('ran_over');
        }
    });
}

category.addEventListener('click', () => {
    btn_container.innerHTML = '';
    if (category.classList.contains('color-white')) {
        category.classList.remove('color-white');
        category.classList.add('color-green');
    }

    if (test.classList.contains('color-green')) {
        test.classList.remove('color-green');
        test.classList.add('color-white');
    }
    btn_container.innerHTML = `
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        Autoimmunity
    </button>
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        Bacteriology
    </button>
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        Biochemistry
    </button>
    `
});


test.addEventListener('click', () => {
    btn_container.innerHTML = '';
    if (test.classList.contains('color-white')) {
        test.classList.remove('color-white');
        test.classList.add('color-green');
    }

    if (category.classList.contains('color-green')) {
        category.classList.remove('color-green');
        category.classList.add('color-white');
    }
    btn_container.innerHTML = `
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        Xwen
    </button>
    
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        Xwen
    </button>
    <button class="btn test-adding-buttons rounded rounded-1 mb-2">
        miz
    </button>

`
});

suggestion_features();
delete_button();





