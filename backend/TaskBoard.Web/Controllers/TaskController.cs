using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.Models;
using TaskBoard.Models.ViewModels;

namespace TaskBoard.Web.Controllers
{
    public class TasksController : Controller
    {
        private static List<TaskItem> tasks = new List<TaskItem>
        {
            new TaskItem
            {
                Id = 1,
                Title = "Arayüzü düzenle",
                Priority = "high"
            },

            new TaskItem
            {
                Id = 2,
                Title = "API taslağı hazırla",
                Priority = "normal"
            }
        };

        public IActionResult Index()
        {
            return View(tasks);
        }

        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Create(CreateTaskViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            var newTask = new TaskItem
            {
                Id = tasks.Count + 1,
                Title = model.Title,
                Priority = model.Priority
            };

            tasks.Add(newTask);

            return RedirectToAction(nameof(Index));
        }
    }
}