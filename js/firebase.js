const contact = document.querySelector("#contact");

contact.addEventListener("submit",(e) => {
    e.preventDefault();
    db.collection("contact").add({
        name:contact.name.value,
        email:contact.email.value,
        message:contact.message.value
    }).then((e) => {
        if (e) {
            contact.reset();
            $('#success_modal').modal('show')
        } else {
            contact.reset();
            $('#failture_modal').modal('show')
        }
    });
});