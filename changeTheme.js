let button = document.querySelector('button');

button.addEventListener('click', () => {
    const htmlElement = document.documentElement;

    htmlElement.classList.toggle("dark")

    if (htmlElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
});