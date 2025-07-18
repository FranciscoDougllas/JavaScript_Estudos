// Função para adicionar um novo contato na lista
function addContact() {
    // Obtém a seção onde os contatos serão adicionados
    const concatcSection = document.getElementById("contacts-list");

    // Cria o título do contato
    const h3 = document.createElement("h3");
    h3.innerText = "Contato";

    // Cria a lista (ul) para os campos do contato
    const ul = document.createElement("ul");

    // Cria o campo Nome
    const nameLi = document.createElement("li");
    nameLi.innerText = "Nome: ";
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);
    ul.appendChild(document.createElement("br"));

    // Cria o campo Telefone
    const phoneLi = document.createElement("li");
    phoneLi.innerText = "Telefone: ";
    const phoneInput = document.createElement("input");
    phoneInput.type = "text";
    phoneInput.name = "phone";
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);
    ul.appendChild(document.createElement("br"));

    // Cria o campo Endereço
    const addressLi = document.createElement("li");
    addressLi.innerHTML = "<label for='address'>Endereço: </label>";
    const addressInput = document.createElement("input");
    addressInput.type = "text";
    addressInput.name = "address";
    addressInput.id = "address";
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);
    ul.appendChild(document.createElement("br"));

    // Adiciona o título e a lista de campos na seção de contatos
    concatcSection.append(h3, ul);
}

// Função para remover o último contato da lista
function removeContact() {
    // Obtém a seção de contatos
    const contactSection = document.getElementById("contacts-list");
    // Seleciona todos os títulos (h3) e listas (ul) de contatos
    const titles = document.getElementsByTagName("h3");
    const contacts = document.getElementsByTagName("ul");

    // Remove o último título e a última lista de contato adicionados
    contactSection.removeChild(titles[titles.length - 1]);
    contactSection.removeChild(contacts[contacts.length - 1]);
}