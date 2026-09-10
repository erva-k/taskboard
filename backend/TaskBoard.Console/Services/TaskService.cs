using TaskBoard.ConsoleApp.Enums;
using TaskBoard.ConsoleApp.Models;

namespace TaskBoard.ConsoleApp.Services;

public class TaskService
{
    private readonly List<TaskItem> tasks = new();

    private int nextId = 1;

    public bool Add(string title, string priority)
    {
        bool alreadyExists = tasks.Any(task =>
            task.Title.Equals(title, StringComparison.OrdinalIgnoreCase));

        if (alreadyExists)
        {
            return false;
        }

        TaskItem newTask = new TaskItem(nextId, title, priority);

        tasks.Add(newTask);
        nextId++;

        return true;
    }

    public List<TaskItem> GetAll()
    {
        return tasks;
    }

    public List<TaskItem> GetByStatus(
        TaskBoard.ConsoleApp.Enums.TaskStatus status)
    {
        return tasks
            .Where(task => task.Status == status)
            .ToList();
    }

    public bool MarkAsDone(int id)
    {
        TaskItem? task = tasks.FirstOrDefault(item => item.Id == id);

        if (task == null)
        {
            return false;
        }

        task.Status = TaskBoard.ConsoleApp.Enums.TaskStatus.Done;
        task.CompletedAt = DateTime.Now;

        return true;
    }
}