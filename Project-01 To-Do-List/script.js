document.addEventListener('DOMContentLoaded', function() {
    const inputBox = document.getElementById("input");
    const listContainer = document.getElementById("list-container");

    function addTask() {
        if (inputBox.value === "") {
            alert("You must write something");
        } else {
            let li = document.createElement("li");
            li.textContent = inputBox.value;
            let span = document.createElement("span");
            span.textContent = "\u00D7";
            span.className = "close";
            li.appendChild(span);
            listContainer.appendChild(li);
            inputBox.value = "";
        }
        saveData();
    }

    document.getElementById("addButton").addEventListener("click", addTask);

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
        } else if (e.target.classList.contains("close")) {
            e.target.parentElement.remove();
        }
        saveData();
    });

    function saveData() {
        localStorage.setItem("todoData", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("todoData") || "";
        // Reattach events to close buttons
        document.querySelectorAll('.close').forEach(button => {
            button.onclick = function() {
                this.parentElement.remove();
                saveData();
            }
        });
    }

    showTask();
});
