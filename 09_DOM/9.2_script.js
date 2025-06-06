function show () {
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    const listElement = document.getElementsByClassName('li');
    console.log(listElement);

    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);

    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts);
}