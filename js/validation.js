const form = document.querySelector("#contact");

const fullNameValidation = () => {
    let input = form.elements.fullName
    let error = input.parentNode.querySelector(".form-error");
    let regex = /^[A-Za-z]+$/;

    if (input.value === "") {
        error.textContent = "El nombre y apellido son requeridos";
    } else if (input.value?.length > 15) {
        error.textContent = "El maximo de caracteres es de 15"
    } else if (!regex.test(input.value)) {
        error.textContent = "Debe contener solo letras mayusculas y/o minusculas"
    } else {
        error.textContent = ""
    }
};

const emailValidation = () => {
    let input = form.elements.email
    let error = input.parentNode.querySelector(".form-error");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input.value === "") {
        error.textContent = "El correo electronico es requerido";
    } else if (input.value?.length > 64) {
        error.textContent = "El maximo de caracteres es de 64"
    } else if (!regex.test(input.value)) {
        error.textContent = "Debe ser un correo electronico valido"
    } else {
        error.textContent = ""
    }
};

const phoneValidation = () => {
    let input = form.elements.phone
    let error = input.parentNode.querySelector(".form-error");
    let regex = /^\+[1-9]\d{1,14}$/;

    if (input.value === "") {
        error.textContent = "El numero de telefono es requerido";
    } else if (input.value?.length > 16) {
        error.textContent = "El maximo de numeros es de 16"
    } else if (!regex.test(input.value)) {
        error.textContent = "Debe ser un numero de telefono valido. Ej. +123456789"
    } else {
        error.textContent = ""
    }
};

const messageValidation = () => {
    let input = form.elements.message
    let error = input.parentNode.querySelector(".form-error");

    if (input.value === "") {
        error.textContent = "El numero de telefono es requerido";
    } else if (input.value?.length > 1024) {
        error.textContent = "El maximo de caracteres debe ser 1024"
    } else {
        error.textContent = ""
    }
};

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        fullNameValidation();
        emailValidation();
        phoneValidation();
        messageValidation();

        console.log("submit");
    });

    form.elements.fullName.addEventListener("input", fullNameValidation);
    form.elements.email.addEventListener("input", emailValidation);
    form.elements.phone.addEventListener("input", phoneValidation);
    form.elements.message.addEventListener("input", messageValidation);

    form.elements.fullName.addEventListener("blur", fullNameValidation);
    form.elements.email.addEventListener("blur", emailValidation);
    form.elements.phone.addEventListener("blur", phoneValidation);
    form.elements.message.addEventListener("blur", messageValidation);
}
