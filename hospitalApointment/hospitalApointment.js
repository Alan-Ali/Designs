var chevron_left = document.getElementById('chevron-left'),
    chevron_right = document.getElementById('chevron-right'),
    month_name = document.getElementById('month-name'),
    year_number = document.getElementById('year-number'),
    week_container = [...document.getElementsByClassName('week-container')],
    date_container = [...document.getElementsByClassName('date-container')],
    main_date_container = [...document.getElementsByClassName('date-container')],
    date_name = [...document.getElementsByClassName('date-name')],
    date_number = [...document.getElementsByClassName('date-number')];


function getDayName(date = new Date(), locale = 'en-IQ') {
    return date.toLocaleDateString(locale, { weekday: 'long' });
}



const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
], daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}, visibility = (element, action) => {
    if (action) {
        if (element.classList.contains('vis-off')) {
            element.classList.remove('vis-off')
            element.classList.add('vis-on');
        } else {
            element.classList.add('vis-on');
        }
    } else {
        if (element.classList.contains('vis-on')) {
            element.classList.remove('vis-on');
            element.classList.add('vis-off');
        } else {
            element.classList.add('vis-off');
        }
    }
},

    resolvingDates = (d) => {
        // prev_date = new Date(wanted_year, wanted_month, 1),
        let new_date = new Date(d.getFullYear(), d.getMonth(), 1),
            first_week_day = new_date.getDay();
        for (let i = 0; i < 7; i++) {
            if (i <= first_week_day) {
                // 33, 37, 41
                date_number[i].innerHTML = "";
                visibility(date_container[i], false);
            }
        }
        let month_days = daysInMonth(d.getMonth() + 1, d.getFullYear());
        let value = null;
        for (let i = 0; i < date_container.length; i++) {
            if (i <= month_days) {
                value = i + 1;
                date_number[i + first_week_day + 1].innerHTML = "<b>" + value + "</b>";
                visibility(date_container[i + first_week_day + 1], true);
            } else if (i + first_week_day < date_container.length) {
                date_number[i + first_week_day].innerHTML = "";
                visibility(date_container[i + first_week_day], false);
            }

        }

    };





var currentDate = () => {
    const d = new Date();

    month_name.setAttribute('data-month-number', d.getMonth());
    year_number.setAttribute('data-year-number', d.getFullYear());

    // console.log(month_name.getAttribute('data-month-number'))
    // console.log(year_number.getAttribute('data-year-number'))

    month_name.innerHTML = monthNames[d.getMonth()];
    year_number.innerHTML = d.getFullYear();

    // prev_date = new Date(wanted_year, wanted_month, 1),
    resolvingDates(d);


}


window.onload = currentDate();

chevron_left.addEventListener('click', () => {

    var month_number_ = parseInt(month_name.getAttribute('data-month-number')),
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));

    // console.log(month_number_);
    if (month_number_ + 1 > 11) {

        month_name.setAttribute('data-month-number', (0).toString());
        year_number.setAttribute('data-year-number', (year_number_ + 1).toString());
        month_number_ = parseInt(month_name.getAttribute('data-month-number'));
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));

        var d = new Date(year_number_ + 1, 0, 0);

    } else {
        // console.log((month_number_ + 1).toString());
        month_name.setAttribute('data-month-number', (month_number_ + 1).toString());
        year_number.setAttribute('data-year-number', (year_number_).toString());
        month_number_ = parseInt(month_name.getAttribute('data-month-number'));
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));

        var d = new Date(year_number_, month_number_ + 1, 0);
    }

    console.log(month_name.getAttribute('data-month-number'));
    console.log(year_number.getAttribute('data-year-number'))

    month_name.innerHTML = monthNames[month_number_];
    year_number.innerHTML = year_number_;

    resolvingDates(d);


});


chevron_right.addEventListener('click', () => {

    var month_number_ = parseInt(month_name.getAttribute('data-month-number')),
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));
    // console.log(month_number_);
    if (month_number_ - 1 < 0) {

        month_name.setAttribute('data-month-number', (11).toString());
        year_number.setAttribute('data-year-number', (year_number_ - 1).toString());
        month_number_ = parseInt(month_name.getAttribute('data-month-number'));
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));


        var d = new Date(year_number_ - 1, 0, 0);

    } else {


        // console.log((month_number_ + 1).toString());
        month_name.setAttribute('data-month-number', (month_number_ - 1).toString());
        year_number.setAttribute('data-year-number', (year_number_).toString());
        month_number_ = parseInt(month_name.getAttribute('data-month-number'));
        year_number_ = parseInt(year_number.getAttribute('data-year-number'));

        var d = new Date(year_number_, month_number_ - 1, 0);

    }

    console.log(month_name.getAttribute('data-month-number'));
    console.log(year_number.getAttribute('data-year-number'))

    month_name.innerHTML = monthNames[month_number_];
    year_number.innerHTML = year_number_;




    resolvingDates(d);
});