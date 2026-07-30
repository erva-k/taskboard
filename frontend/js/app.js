const form = document.querySelector("#task-form");
const tableBody = document.querySelector("#task-table-body");

console.log(form);
console.log(tableBody);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const priority = document.querySelector("#priority").value;
    const description = document.querySelector("#description").value.trim();

    console.log(title);
    console.log(priority);
    console.log(description);


    let badgeClass = "";
    let priorityText = "";

if (priority === "high") {
    badgeClass = "badge-high";
    priorityText = "Yüksek";
} else if (priority === "normal") {
    badgeClass = "badge-normal";
    priorityText = "Normal";
} else {
    badgeClass = "badge-low";
    priorityText = "Düşük";
}
const taskId = tableBody.rows.length +1 ;
tableBody.insertAdjacentHTML("beforeend", `
    <tr>
        <td>${taskId}</td>
        <td>${title}</td>
        <td><span class="badge ${badgeClass}">${priorityText}</span></td>
        <td>Beklemede</td>
        <td>${new Date().toLocaleDateString("tr-TR")}</td>
    </tr>
`);

form.reset();


    console.log("Form başarıyla gönderildi.");
});