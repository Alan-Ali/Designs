function getCaretCoordinates() {
    let x = 0,
        y = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        const selection = window.getSelection();
        console.log('selection: ' + selection);
        // Check if there is a selection (i.e. cursor in place)
        if (selection.rangeCount !== 0) {
            // Clone the range
            const range = selection.getRangeAt(0).cloneRange();
            console.log('range: ' + range);
            // Collapse the range to the start, so there are not multiple chars selected
            range.collapse(true);
            // getCientRects returns all the positioning information we need
            const rect = range.getClientRects()[0];
            console.log('rect: ' + rect);
            if (rect) {
                x = rect.left; // since the caret is only 1px wide, left == right
                y = rect.top; // top edge of the caret
                console.log('x: ' + x + ", y: " + y);

            }
        }
        return { x, y };
    } else {
        return { x: null, y: null }
    }

}

var text = document.getElementById('textarea')
object = document.getElementById('object'),
    recommended = [...document.getElementsByClassName('recommended')],
    disapear = () => {
        if (object.classList.contains('d-block')) {
            object.classList.remove('d-block');

            object.classList.add('d-none');
        }
    },
    appear = () => {
        if (object.classList.contains('d-none')) {
            object.classList.remove('d-none');
            object.classList.add('d-block');
        }
    },
    changePos = (x, y) => {

        var top = y + 18,
            left = x + 15;

        object.style.top = top + "px";
        object.style.left = left + "px";
    };


var value = getCaretCoordinates();

var recommend = () => {

    recommended.forEach((val, i) => {

        val.addEventListener('click', () => {
            let value = val.value;
            text.innerHTML = text.innerHTML + " " + value;
            object.classList.add('d-none');
        });

    })
}
recommend();

document.getElementsByTagName('body')[0].addEventListener('click', () => {
    if (!object.matches(':hover') || !text.matches(':hover')) {
        object.classList.remove('d-block');
        object.classList.add('d-none');
    }
});

text.addEventListener('keydown', (e) => {

    value = getCaretCoordinates();
    // || (value.y == 0 && value.x == 0)
    if (e.key === "Backspace" || e.key === "Enter" || (value.y == 0 && value.x == 0)) {
        disapear();
    } else {
        changePos(value.x, value.y);
        appear();
    }

});
