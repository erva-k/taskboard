using TaskBoard.ConsoleApp.Enums;
using TaskStatusEnum = TaskBoard.ConsoleApp.Enums.TaskStatus;

namespace TaskBoard.ConsoleApp.Models;

public class TaskItem
{
    public int Id { get; set; }

    public string Title { get; set; }

    public string Priority { get; set; }

    public TaskStatusEnum Status { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime? CompletedAt { get; set; }

    public TaskItem(int id, string title, string priority)
    {
        Id = id;
        Title = title;
        Priority = priority;
        Status = TaskStatusEnum.Open;
        CreatedAt = DateTime.Now;
        CompletedAt = null;
    }
}