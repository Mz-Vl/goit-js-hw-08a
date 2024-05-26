import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");

const STORAGE_KEY = "feedback-form-state";

const saveFormState = throttle(() => {
    const formData = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);


const loadFormState = () => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        email.value = email;
        message.value = message;
    }
};

form.addEventListener("input", saveFormState);
window.addEventListener("load", loadFormState);
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        email: email.value,
        message: message.value,
    };

    console.log(formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});
