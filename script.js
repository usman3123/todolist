const field = document.querySelector(".input-field");
const listcontainer = document.querySelector(".list-container");

function addtext() {
    if (field.value === '') {
        alert("please enter text!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = field.value;

        const span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        span.classList.add("style");

        li.appendChild(span);
        listcontainer.appendChild(li);
    }
    field.value = "";
    savedata();
}

listcontainer.addEventListener("click", (e) => {
    if (e.target.closest("span")) {
        e.target.closest("li").remove();
        savedata();
    } 
    else if (e.target.closest("li")) {
        e.target.closest("li").classList.toggle("checked");
        savedata();
    }
});
function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data")
}
showtask();