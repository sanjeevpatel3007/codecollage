
const inputBox = document.getElementById("form-input");
const listContainer = document.getElementById("list-container");

function Addtask() {
    event.preventDefault(); 
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = `${inputBox.value}<img class="editbtn" src="./img/editN.png" alt="Image"> <img class="removebtn" src="./img/deleteN.png" alt="Image"> `;
        

        listContainer.appendChild(li);
        const removeBtn = li.querySelector(".removebtn");
        const editBtn = li.querySelector(".editbtn");
        removeBtn.addEventListener("click", function () {
            li.remove();
        });
        editBtn.addEventListener("click", function () {
            inputBox.value = li.textContent;
            //  inputBox.value = li.textContent.trim();
            inputBox.focus();
            li.remove();
        });
    }
    inputBox.value = "";
}

listContainer.addEventListener('click', function (event) {
if (event.target.tagName === 'LI') {
event.target.classList.toggle('clicked');
if (event.target.style.textDecoration === 'line-through') {
    event.target.style.textDecoration = 'none';
    event.target.style.backgroundColor = ' rgb(236, 240, 243)';
} else {
    event.target.style.textDecoration = 'line-through';
    event.target.style.backgroundColor = '#e43031';
}
}
});

