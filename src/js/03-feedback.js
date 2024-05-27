import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");

const STORAGE_KEY = "feedback-form-state";

const saveFormState = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);


const loadFormState = () => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
        const { email, message } = JSON.parse(savedState);
        emailInput.value = email;
        messageInput.value = message;
    }
};

form.addEventListener("input", saveFormState);
window.addEventListener("load", loadFormState);
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    console.log(formData);

    form.reset();
    localStorage.removeItem(STORAGE_KEY);
});
