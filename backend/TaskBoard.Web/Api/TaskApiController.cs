using Microsoft.AspNetCore.Mvc;
using TaskBoard.Data;
using TaskBoard.Web.Models;

namespace TaskBoard.Api
{
    [ApiController]
    [Route("api/tasks")]
    public class TasksApiController : ControllerBase
    {
        private readonly TaskBoardDbContext _context;

        public TasksApiController(TaskBoardDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var tasks = _context.TaskItems.ToList();

            return Ok(tasks);
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
                Title = request.Title,
                Priority = request.Priority,
                Status = "open"
            };

            _context.TaskItems.Add(task);
            _context.SaveChanges();

            return Created($"/api/tasks/{task.Id}", task);
        }

        [HttpPatch("{id}/status")]
        public IActionResult UpdateStatus(int id, UpdateStatusRequest request)
        {
            var task = _context.TaskItems.FirstOrDefault(t => t.Id == id);

            if (task == null)
            {
                return NotFound("Görev bulunamadı.");
            }

            if (string.IsNullOrWhiteSpace(request.Status))
            {
                return BadRequest("Durum zorunludur.");
            }

            task.Status = request.Status;

            _context.SaveChanges();

            return Ok(task);
        }
    }
}