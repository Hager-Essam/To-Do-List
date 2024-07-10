

let addingBtn = document.getElementById("addingBtn");
addingBtn.addEventListener("click", function () {
    let Input = document.getElementById("input"),
        tasksList = document.getElementById("tasksList"),
        newtask = Input.value;

    if (newtask.trim() !== "") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newtask));
        tasksList.appendChild(li);
        Input.value = "";

        li.addEventListener("click", function () {
            if (!li.classList.contains("done")) {
                li.classList.add("done");
                tasksList.appendChild(li);
            }
            else {
                li.classList.remove("done");
                let completedTasks = tasksList.querySelector("done");
                if (completedTasks) {
                    tasksList.insertBefore(li, completedTasks);
                } else {
                    tasksList.insertBefore(li, null);
                }
            }
        });
    }
});




