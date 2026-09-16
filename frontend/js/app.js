let tasks = [];

const form = document.querySelector("#task-form");
const tableBody = document.querySelector("#task-table-body");

const totalTask = document.querySelector("#total-task");
const pendingTask = document.querySelector("#pending-task");
const completedTask = document.querySelector("#completed-task");

const filterButtons = document.querySelectorAll("[data-filter]");
const priorityButtons = document.querySelectorAll("[data-priority]");
const importTasksButton = document.querySelector("#import-tasks");
const message = document.querySelector("#message");


async function loadTasks() {
    try {
        const response = await fetch("http://localhost:5272/api/tasks");

        if (!response.ok) {
            throw new Error("Görevler API'den alınamadı.");
        }

        tasks = await response.json();

        renderTasks(tasks);
    } catch (error) {
        console.error(error);
        showMessage("Görevler yüklenirken bir hata oluştu.", true);
    }
}


function showMessage(text, isError = false) {
    if (!message) {
        return;
    }

    message.textContent = text;
    message.className = isError ? "error-message" : "success-message";
}


function renderTasks(items) {
    totalTask.textContent = tasks.length;

    pendingTask.textContent = tasks.filter(
        task => task.status === "open"
    ).length;

    completedTask.textContent = tasks.filter(
        task => task.status === "completed"
    ).length;

    tableBody.innerHTML = items.map(task => `
        <tr>
            <td>${task.id}</td>

            <td>${task.title}</td>

            <td>
                <span class="badge badge-${task.priority}">
                    ${
                        task.priority === "high"
                            ? "Yüksek"
                            : task.priority === "normal"
                            ? "Normal"
                            : "Düşük"
                    }
                </span>
            </td>

            <td>
                ${task.status === "completed" ? "Tamamlandı" : "Beklemede"}
            </td>

            <td>${task.createdAt || "-"}</td>

            <td>
                ${
                    task.status === "open"
                        ? `<button type="button" data-id="${task.id}">
                             Tamamla
                           </button>`
                        : "-"
                }
            </td>
        </tr>
    `).join("");
}


filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        const filter = button.dataset.filter;

        if (filter === "all") {
            renderTasks(tasks);
        } else {
            const filteredTasks = tasks.filter(
                task => task.status === filter
            );

            renderTasks(filteredTasks);
        }
    });
});


priorityButtons.forEach(button => {
    button.addEventListener("click", function () {
        const priority = button.dataset.priority;

        if (priority === "all") {
            renderTasks(tasks);
        } else {
            const filteredTasks = tasks.filter(
                task => task.priority === priority
            );

            renderTasks(filteredTasks);
        }
    });
});

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const priority = document.querySelector("#priority").value;

    if (!title) {
        showMessage("Görev başlığı boş bırakılamaz.", true);
        return;
    }

    try {
        const response = await fetch("http://localhost:5272/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                priority: priority
            })
        });

        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage || "Görev eklenemedi.");
        }

        form.reset();
        showMessage("Görev başarıyla eklendi.");

        await loadTasks();
    } catch (error) {
        console.error(error);
        showMessage("Görev eklenirken bir hata oluştu.", true);
    }
});

tableBody.addEventListener("click", async function (event) {
    if (!event.target.dataset.id) {
        return;
    }

    const taskId = Number(event.target.dataset.id);

    try {
        const response = await fetch(
            `http://localhost:5272/api/tasks/${taskId}/status`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    status: "completed"
                })
            }
        );

        if (!response.ok) {
            throw new Error("Görev durumu güncellenemedi.");
        }

        showMessage("Görev tamamlandı.");
        await loadTasks();
    } catch (error) {
        console.error(error);
        showMessage("Görev tamamlanırken bir hata oluştu.", true);
    }
});


async function loadSampleTasks() {
    try {
        showMessage("Örnek görevler yükleniyor...");

        const response = await fetch("./data/tasks.json");

        if (!response.ok) {
            throw new Error("Örnek görevler yüklenemedi.");
        }

        const sampleTasks = await response.json();

        const importedTasks = sampleTasks.map((task, index) => ({
            ...task,
            id: tasks.length + index + 1,
            createdAt: task.createdAt || new Date().toLocaleDateString("tr-TR")
        }));

        tasks = [...tasks, ...importedTasks];
        renderTasks(tasks);

        showMessage("Örnek görevler başarıyla içeri aktarıldı.");
    } catch (error) {
        showMessage("Örnek görevler yüklenirken hata oluştu.", true);
    }
}


importTasksButton.addEventListener("click", loadSampleTasks);


loadTasks();
