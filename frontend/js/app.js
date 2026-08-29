let tasks = [
    {
        id: 1,
        title: "Veritabanı Kurulumu",
        priority: "high",
        status: "open"
    },
    {
        id: 2,
        title: "Klasör Yapısının Kurulması",
        priority: "normal",
        status: "completed"
    },
    {
        id: 3,
        title: "HTML Formlarının Oluşturulması",
        priority: "normal",
        status: "completed"
    },
    {
        id: 4,
        title: "CSS Tasarımını Tamamlama",
        priority: "normal",
        status: "open"
    },
    {
        id: 5,
        title: "README Güncelleme",
        priority: "low",
        status: "open"
    }
];
const form = document.querySelector("#task-form");
const tableBody = document.querySelector("#task-table-body");

const totalTask = document.querySelector("#total-task");
const pendingTask = document.querySelector("#pending-task");
const completedTask = document.querySelector("#completed-task");

console.log(form);
console.log(tableBody);

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        if (filter === "all") {
            renderTasks(tasks);
        } else {
            const filteredTasks = tasks.filter(task => task.status === filter);
            renderTasks(filteredTasks);
        }
    });
});
function renderTasks(items) {

    totalTask.textContent = tasks.length;
    pendingTask.textContent = tasks.filter(task => task.status === "open").length;
    completedTask.textContent = tasks.filter(task => task.status === "completed").length;

    tableBody.innerHTML = items.map(task => `
        <tr>
            <td>${task.id}</td>
            <td>${task.title}</td>
            <td>
                <span class="badge badge-${task.priority}">
                ${task.priority === "high" ? "Yüksek" : task.priority === "normal" ? "Normal" : "Düşük"}
                </span>
            </td>
            <td>${task.status}</td>
            <td>${task.createdAt || "-"}</td>
            <td>
                <button type="button" data-id="${task.id}">Tamamla</button>
            </td>
        </tr>
    `).join("");
}
renderTasks(tasks);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const priority = document.querySelector("#priority").value;

    const newTask = {
        id: tasks.length + 1,
        title: title,
        priority: priority,
        status: "open",
        createdAt: new Date().toLocaleDateString("tr-TR")
    };

    tasks.push(newTask);

    renderTasks(tasks);

    form.reset();
});
tableBody.addEventListener("click", function (event) {
    if (event.target.dataset.id) {
        const taskId = Number(event.target.dataset.id);

        const task = tasks.find(task => task.id === taskId);

        if (task) {
            task.status = "completed";
            renderTasks(tasks);
        }
    }
});
