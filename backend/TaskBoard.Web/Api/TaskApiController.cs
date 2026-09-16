using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.Models;

namespace TaskBoard.Api
{
    [ApiController]
    [Route("api/tasks")]
    public class TasksApiController : ControllerBase
    {
        private static readonly List<TaskItem> Tasks = new();

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(Tasks);
        }

        [HttpPost]
        public IActionResult Create(CreateTaskRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Title))
            {
                return BadRequest("Başlık zorunludur.");
            }

          var task = new TaskItem
            {
                Id = Tasks.Count + 1,
                Title = request.Title,
                Priority = request.Priority,
                Status = "open"
            };

            Tasks.Add(task);

            return Created($"/api/tasks/{task.Id}", task);
        }
        [HttpPatch("{id}/status")]
        public IActionResult UpdateStatus(int id, UpdateStatusRequest request)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);

            if (task == null)
            {
                return NotFound("Görev bulunamadı.");
            }

            if (string.IsNullOrWhiteSpace(request.Status))
            {
                return BadRequest("Durum zorunludur.");
            }

            task.Status = request.Status;

            return Ok(task);
        }
    }
}