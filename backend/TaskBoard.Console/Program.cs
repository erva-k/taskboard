using TaskBoard.ConsoleApp.Enums;
using TaskStatusEnum = TaskBoard.ConsoleApp.Enums.TaskStatus;
using TaskBoard.ConsoleApp.Models;
using TaskBoard.ConsoleApp.Services;

namespace TaskBoard.ConsoleApp;

class Program
{
    static readonly TaskService taskService = new();

    static void Main()
    {
        bool running = true;

        while (running)
        {
            ShowMenu();

            string? choice = Console.ReadLine();

            switch (choice)
            {
                case "1":
                    ShowAllTasks();
                    break;

                case "2":
                    CreateTask();
                    break;

                case "3":
                    ShowOpenTasks();
                    break;

                case "4":
                    CompleteTask();
                    break;

                case "0":
                    running = false;
                    Console.WriteLine("Uygulama kapatıldı.");
                    break;

                default:
                    Console.WriteLine("Geçersiz seçim.");
                    break;
            }
        }
    }

    static void ShowMenu()
    {
        Console.WriteLine();
        Console.WriteLine("========== TASKBOARD ==========");
        Console.WriteLine("1 - Tüm görevleri göster");
        Console.WriteLine("2 - Yeni görev ekle");
        Console.WriteLine("3 - Açık görevleri göster");
        Console.WriteLine("4 - Görevi tamamla");
        Console.WriteLine("0 - Çıkış");
        Console.Write("Seçiminiz: ");
    }

    static void ShowAllTasks()
    {
        List<TaskItem> tasks = taskService.GetAll();

        if (tasks.Count == 0)
        {
            Console.WriteLine("Henüz görev bulunmuyor.");
            return;
        }

        Console.WriteLine("\n--- Tüm Görevler ---");

        foreach (TaskItem task in tasks)
        {
            Console.WriteLine(
                $"{task.Id}. {task.Title} | Öncelik: {task.Priority} | Durum: {task.Status}");
        }
    }

    static void CreateTask()
    {
        Console.Write("Görev başlığı: ");
        string? title = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(title))
        {
            Console.WriteLine("Görev başlığı boş bırakılamaz.");
            return;
        }

        Console.Write("Öncelik: ");
        string? priority = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(priority))
        {
            priority = "Normal";
        }

        bool added = taskService.Add(title.Trim(), priority.Trim());

        if (added)
        {
            Console.WriteLine("Görev başarıyla eklendi.");
        }
        else
        {
            Console.WriteLine("Bu başlıkta bir görev zaten bulunuyor.");
        }
    }

    static void ShowOpenTasks()
    {
        List<TaskItem> openTasks =
            taskService.GetByStatus(TaskStatusEnum.Open);

        if (openTasks.Count == 0)
        {
            Console.WriteLine("Açık görev bulunmuyor.");
            return;
        }

        Console.WriteLine("\n--- Açık Görevler ---");

        foreach (TaskItem task in openTasks)
        {
            Console.WriteLine(
                $"{task.Id}. {task.Title} | Öncelik: {task.Priority}");
        }
    }

    static void CompleteTask()
    {
        Console.Write("Tamamlanacak görev ID: ");
        string? input = Console.ReadLine();

        if (!int.TryParse(input, out int id))
        {
            Console.WriteLine("Lütfen geçerli bir ID girin.");
            return;
        }

        bool completed = taskService.MarkAsDone(id);

        if (completed)
        {
            Console.WriteLine("Görev tamamlandı.");
        }
        else
        {
            Console.WriteLine("Bu ID ile eşleşen bir görev bulunamadı.");
        }
    }
}