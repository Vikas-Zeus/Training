const linkName = document.querySelector(".link-name");
const nameInput = document.querySelector(".name-input");

function setName(name) {
    linkName.innerText = "Welcome, ";
    let nameInner = document.createElement("span");
    nameInner.innerText = name;
    nameInner.setAttribute("class", "name");
    linkName.appendChild(nameInner);
}

nameInput.addEventListener("change", () => {
    setName(nameInput.value);
});
