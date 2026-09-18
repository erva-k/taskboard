let tasks = [];
let editingTaskId = null;

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
        tasks = await taskApi.getTasks();
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
    message.className = isError
        ? "error-message"
        : "success-message";
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
                ${
                    task.status === "completed"
                        ? "Tamamlandı"
                        : "Beklemede"
                }
            </td>

            <td>${task.createdAt || "-"}</td>

            <td>
                ${
                    task.status === "open"
                        ? `
                            <button
                                type="button"
                                data-action="complete"
                                data-id="${task.id}">
                                Tamamla
                            </button>
                          `
                        : ""
                }

                <button
                    type="button"
                    data-action="edit"
                    data-id="${task.id}">
                    Düzenle
                </button>

                <button
                    type="button"
                    data-action="delete"
                    data-id="${task.id}">
                    Sil
                </button>
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
    const submitButton = form.querySelector('button[type="submit"]');

    if (!title) {
        showMessage("Görev başlığı boş bırakılamaz.", true);
        return;
    }

    try {
        submitButton.disabled = true;

        if (editingTaskId !== null) {
            await taskApi.updateTask(editingTaskId, {
                title: title,
                priority: priority
            });

            showMessage("Görev başarıyla güncellendi.");

            editingTaskId = null;
            submitButton.textContent = "Sisteme Ekle";
        } else {
            await taskApi.createTask({
                title: title,
                priority: priority
            });

            showMessage("Görev başarıyla eklendi.");
        }

        form.reset();
        await loadTasks();

    } catch (error) {
        console.error(error);

        showMessage(
            "İşlem sırasında bir hata oluştu.",
            true
        );
    } finally {
        submitButton.disabled = false;
    }
});


tableBody.addEventListener("click", async function (event) {
    const button = event.target.closest("button");

    if (!button) {
        return;
    }

    const taskId = Number(button.dataset.id);
    const action = button.dataset.action;

    if (!taskId) {
        return;
    }


    if (action === "edit") {
        const task = tasks.find(
            task => task.id === taskId
        );

        if (!task) {
            showMessage("Görev bulunamadı.", true);
            return;
        }

        document.querySelector("#title").value = task.title;
        document.querySelector("#priority").value = task.priority;

        editingTaskId = task.id;

        const submitButton = form.querySelector(
            'button[type="submit"]'
        );

        submitButton.textContent = "Görevi Güncelle";

        showMessage(
            "Görev bilgilerini düzenleyebilirsiniz."
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }


    if (action === "complete") {
        try {
            button.disabled = true;

            await taskApi.updateStatus(
                taskId,
                "completed"
            );

            showMessage("Görev tamamlandı.");

            await loadTasks();
        } catch (error) {
            console.error(error);

            showMessage(
                "Görev tamamlanırken bir hata oluştu.",
                true
            );
        } finally {
            button.disabled = false;
        }

        return;
    }


    if (action === "delete") {
        const confirmed = confirm(
            "Bu görevi silmek istediğinize emin misiniz?"
        );

        if (!confirmed) {
            return;
        }

        try {
            button.disabled = true;

            await taskApi.deleteTask(taskId);

            showMessage(
                "Görev başarıyla silindi."
            );

            await loadTasks();
        } catch (error) {
            console.error(error);

            showMessage(
                "Görev silinirken bir hata oluştu.",
                true
            );
        } finally {
            button.disabled = false;
        }
    }
});


async function loadSampleTasks() {
    try {
        showMessage(
            "Örnek görevler yükleniyor..."
        );

        const response = await fetch(
            "./data/tasks.json"
        );

        if (!response.ok) {
            throw new Error(
                "Örnek görevler yüklenemedi."
            );
        }

        const sampleTasks = await response.json();

        const importedTasks = sampleTasks.map(
            (task, index) => ({
                ...task,
                id: tasks.length + index + 1,
                createdAt:
                    task.createdAt ||
                    new Date().toLocaleDateString("tr-TR")
            })
        );

        tasks = [
            ...tasks,
            ...importedTasks
        ];

        renderTasks(tasks);

        showMessage(
            "Örnek görevler başarıyla içeri aktarıldı."
        );
    } catch (error) {
        console.error(error);

        showMessage(
            "Örnek görevler yüklenirken hata oluştu.",
            true
        );
    }
}


if (importTasksButton) {
    importTasksButton.addEventListener(
        "click",
        loadSampleTasks
    );
}


loadTasks();