const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const ageInput = document.getElementById("age");
const cityInput = document.getElementById("city");
const hobbyInput = document.getElementById("hobby");
const result = document.getElementById("formResult");
const submit = document.getElementById("submit");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = usernameInput.value.trim();
    if (name == "") {
        result.textContent = "Ошибка: Имя не может быть пустым!";
        result.style.color = "red";
        usernameInput.focus();
        return;
    }
    const age = Number(ageInput.value);
    if (isNaN(age) || age <= 0 || age > 120) {
        result.textContent = "Ошибка: Введите корректный возраст (от 1 до 120)!";
        result.style.color = "red";
        ageInput.focus();
        ageInput.value = "";
        return;
    }
    const city = cityInput.value.trim();
    if (city == "") {
        result.textContent = "Ошибка: Город не может быть пустым!";
        result.style.color = "red";
        cityInput.focus();
        return;
    }
    const hobby = hobbyInput.value.trim();
    if (hobby == "") {
        result.textContent = "Ошибка: Хобби не может быть пустым!";
        result.style.color = "red";
        hobbyInput.focus();
        return;
    }
});