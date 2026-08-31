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

const filterButtons = document.querySelectorAll("[data-filter]");
const priorityButtons = document.querySelectorAll("[data-priority]");

const clearStorageButton = document.querySelector("#clear-storage");
const importTasksButton = document.querySelector("#import-tasks");
const message = document.querySelector("#message");


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const raw = localStorage.getItem("tasks");

    if (!raw) {
        return;
    }

    try {
        const savedTasks = JSON.parse(raw);

        if (Array.isArray(savedTasks)) {
            tasks = savedTasks;
        } else {
            tasks = [];
            showMessage("Görev verisi geçersiz.", true);
        }
    } catch (error) {
        tasks = [];
        showMessage("Görev verileri okunamadı.", true);
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


form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const priority = document.querySelector("#priority").value;

    if (!title) {
        showMessage("Görev başlığı boş bırakılamaz.", true);
        return;
    }

    const newTask = {
        id: tasks.length + 1,
        title: title,
        priority: priority,
        status: "open",
        createdAt: new Date().toLocaleDateString("tr-TR")
    };

    tasks.push(newTask);

    saveTasks();
    renderTasks(tasks);

    form.reset();

    showMessage("Görev başarıyla eklendi.");
});


tableBody.addEventListener("click", function (event) {
    if (event.target.dataset.id) {
        const taskId = Number(event.target.dataset.id);

        const task = tasks.find(task => task.id === taskId);

        if (task) {
            task.status = "completed";

            saveTasks();
            renderTasks(tasks);

            showMessage("Görev tamamlandı.");
        }
    }
});


clearStorageButton.addEventListener("click", function () {
    localStorage.removeItem("tasks");

    tasks = [];

    renderTasks(tasks);

    showMessage("localStorage temizlendi.");
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

        saveTasks();
        renderTasks(tasks);

        showMessage("Örnek görevler başarıyla içeri aktarıldı.");
    } catch (error) {
        showMessage("Örnek görevler yüklenirken hata oluştu.", true);
    }
}


importTasksButton.addEventListener("click", loadSampleTasks);


loadTasks();
renderTasks(tasks);