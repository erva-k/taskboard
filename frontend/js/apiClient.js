const API_URL = "http://localhost:5272/api/tasks";

async function request(url, options = {}) {
    const response = await fetch(url, {
    credentials: "include",

    headers: {
        "Content-Type": "application/json"
    },

    ...options
});;

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "API işlemi başarısız oldu.");
    }

    if (response.status === 204) {
        return null;
    }

    return await response.json();
}

const taskApi = {
    getTasks: () => request(API_URL),

    createTask: (task) => request(API_URL, {
        method: "POST",
        body: JSON.stringify(task)
    }),

    updateTask: (id, task) => request(`${API_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify(task)
    }),

    updateStatus: (id, status) => request(`${API_URL}/${id}/status`, {
        method: "PATCH",
        body: JSON.stringify({ status })
    }),

    deleteTask: (id) => request(`${API_URL}/${id}`, {
        method: "DELETE"
    })
};