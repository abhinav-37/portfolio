const contact = document.querySelector("#contact");
const button_load = document.getElementById("button_load");
contact.addEventListener("submit",(e) => {
    button_load.style.display ="block";
    e.preventDefault();
    db.collection("contact").add({
        name:contact.name.value,
        email:contact.email.value,
        message:contact.message.value
    }).then((e) => {
        if (e) {
            contact.reset();
            $('#success_modal').modal('show')
            button_load.style.display ="none";
        } else {
            contact.reset();
            $('#failture_modal').modal('show')
        }
    });
});