using Microsoft.EntityFrameworkCore;
using TaskBoard.Data;
using TaskBoard.Web.Models;

namespace TaskBoard.Web.Services
{
    public class TaskService : ITaskService
    {
        private readonly TaskBoardDbContext _context;

        public TaskService(TaskBoardDbContext context)
        {
            _context = context;
        }

        public async Task<List<TaskResponse>> GetAllAsync()
        {
            return await _context.TaskItems
                .Select(task => new TaskResponse
                {
                    Id = task.Id,
                    Title = task.Title,
                    Priority = task.Priority,
                    Status = task.Status,
                    CreatedAt = task.CreatedAt
                })
                .ToListAsync();
        }

        public async Task<TaskResponse?> GetByIdAsync(int id)
        {
            var task = await _context.TaskItems
                .FirstOrDefaultAsync(t => t.Id == id);

            if (task == null)
            {
                return null;
            }

            return ToResponse(task);
        }

        public async Task<TaskResponse> CreateAsync(CreateTaskRequest request)
        {
            var task = new TaskItem
            {
                Title = request.Title,
                Priority = request.Priority,
                Status = "open"
            };

            _context.TaskItems.Add(task);

            await _context.SaveChangesAsync();

            return ToResponse(task);
        }

        public async Task<bool> UpdateAsync(
            int id,
            UpdateTaskRequest request)
        {
            var task = await _context.TaskItems
                .FirstOrDefaultAsync(t => t.Id == id);

            if (task == null)
            {
                return false;
            }

            task.Title = request.Title;
            task.Priority = request.Priority;

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> UpdateStatusAsync(
            int id,
            UpdateStatusRequest request)
        {
            var task = await _context.TaskItems
                .FirstOrDefaultAsync(t => t.Id == id);

            if (task == null)
            {
                return false;
            }

            task.Status = request.Status;

            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var task = await _context.TaskItems
                .FirstOrDefaultAsync(t => t.Id == id);

            if (task == null)
            {
                return false;
            }

            _context.TaskItems.Remove(task);

            await _context.SaveChangesAsync();

            return true;
        }

        private static TaskResponse ToResponse(TaskItem task)
        {
            return new TaskResponse
            {
                Id = task.Id,
                Title = task.Title,
                Priority = task.Priority,
                Status = task.Status,
                CreatedAt = task.CreatedAt
            };
        }
    }
}