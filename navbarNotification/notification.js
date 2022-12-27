const notif_button = document.getElementById("notif-button"),
    notif_list = document.getElementById("listOfNotifications"),
    notif_list_close = () => {
        notif_list.style.opacity = "0";
        notif_list.style.top = "125%";
        notif_list.style.maxHeight = "0";
        notif_button.setAttribute('data-switch', "off")
        setTimeout(() => {
            notif_list.style.visibility = "hidden";
        }, 150)
    };



notif_button.addEventListener('click', () => {
    // console.log(notif_button.dataset.switch);
    if (notif_button.dataset.switch === "off") {

        notif_list.style.visibility = "visible";
        notif_list.style.opacity = "1";
        notif_list.style.top = "130%";
        notif_list.style.maxHeight = "400px";
        notif_button.setAttribute('data-switch', "on");
        console.log(notif_button.dataset.switch);
    } else {
        // console.log('here')
        notif_list_close();
    }

});


document.addEventListener("click", () => {

    if (notif_button.dataset.switch === "on" && !notif_button.matches(":hover") && !notif_list.matches(":hover")) {
        notif_list_close();
    }
});