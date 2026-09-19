using Microsoft.AspNetCore.Mvc;
using TaskBoard.Web.Models;
using TaskBoard.Web.Services;
using Microsoft.AspNetCore.Authorization;

namespace TaskBoard.Api
{
    [ApiController]
    [Route("api/tasks")]
    public class TasksApiController : ControllerBase
    {
        private readonly ITaskService _taskService;

        public TasksApiController(ITaskService taskService)
        {
            _taskService = taskService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var tasks = await _taskService.GetAllAsync();

            return Ok(tasks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var task = await _taskService.GetByIdAsync(id);

            if (task == null)
            {
                return NotFound("Görev bulunamadı.");
            }

            return Ok(task);
        }

        [HttpPost]
        public async Task<IActionResult> Create(
            CreateTaskRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Title))
            {
                return BadRequest("Başlık zorunludur.");
            }

            var task = await _taskService.CreateAsync(request);

            return Created($"/api/tasks/{task.Id}", task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(
            int id,
            UpdateTaskRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Title))
            {
                return BadRequest("Başlık zorunludur.");
            }

            if (string.IsNullOrWhiteSpace(request.Priority))
            {
                return BadRequest("Öncelik zorunludur.");
            }

            var updated = await _taskService.UpdateAsync(id, request);

            if (!updated)
            {
                return NotFound("Görev bulunamadı.");
            }

            return NoContent();
        }

        [HttpPatch("{id}/status")]
        public async Task<IActionResult> UpdateStatus(
            int id,
            UpdateStatusRequest request)
        {
            if (string.IsNullOrWhiteSpace(request.Status))
            {
                return BadRequest("Durum zorunludur.");
            }

            var updated =
                await _taskService.UpdateStatusAsync(id, request);

            if (!updated)
            {
                return NotFound("Görev bulunamadı.");
            }

            return NoContent();
        }
            [Authorize(Roles = "Admin")]
            [HttpDelete("{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                var deleted = await _taskService.DeleteAsync(id);

                if (!deleted)
                {
                    return NotFound("Görev bulunamadı.");
                }

                return NoContent();
            }
    }
}