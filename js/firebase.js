const contact = document.querySelector("#contact");

contact.addEventListener("submit",(e) => {
    e.preventDefault();
    db.collection("contact").add({
        name:contact.name.value,
        email:contact.email.value,
        message:contact.message.value
    });

    contact.reset();
    window.alert("thanks for contacting");
});