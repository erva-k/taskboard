using TaskBoard.Web.Models;

namespace TaskBoard.Web.Services
{
    public interface ITaskService
    {
        Task<List<TaskResponse>> GetAllAsync();

        Task<TaskResponse?> GetByIdAsync(int id);

        Task<TaskResponse> CreateAsync(CreateTaskRequest request);

        Task<bool> UpdateAsync(int id, UpdateTaskRequest request);

        Task<bool> UpdateStatusAsync(int id, UpdateStatusRequest request);

        Task<bool> DeleteAsync(int id);
    }
}