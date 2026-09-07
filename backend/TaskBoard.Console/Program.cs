using System;
using System.Collections.Generic;

namespace TaskBoard.ConsoleApp;

class Program
{
    static List<string> tasks = new List<string>();

    static void Main()
    {
        bool applicationRunning = true;

        while (applicationRunning)
        {
            ShowMenu();

            string? selection = Console.ReadLine();

            switch (selection)
            {
                case "1":
                    DisplayTasks();
                    break;

                case "2":
                    AddTask();
                    break;

                case "0":
                    applicationRunning = false;
                    Console.WriteLine("\nUygulama kapatılıyor...");
                    break;

                default:
                    Console.WriteLine("\nGeçersiz seçim. Lütfen menüdeki seçeneklerden birini kullanın.");
                    break;
            }
        }
    }

    static void ShowMenu()
    {
        Console.WriteLine("\n==============================");
        Console.WriteLine("       TASKBOARD CONSOLE");
        Console.WriteLine("==============================");
        Console.WriteLine("1 - Görevleri Listele");
        Console.WriteLine("2 - Yeni Görev Ekle");
        Console.WriteLine("0 - Çıkış");
        Console.Write("Seçiminiz: ");
    }

    static void DisplayTasks()
    {
        Console.WriteLine("\n--- Görev Listesi ---");

        if (tasks.Count == 0)
        {
            Console.WriteLine("Henüz kayıtlı bir görev bulunmuyor.");
            return;
        }

        for (int index = 0; index < tasks.Count; index++)
        {
            Console.WriteLine($"{index + 1}. {tasks[index]}");
        }
    }

    static void AddTask()
    {
        Console.Write("\nGörev başlığını girin: ");
        string? title = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(title))
        {
            Console.WriteLine("Görev başlığı boş bırakılamaz.");
            return;
        }

        Console.Write("Öncelik (Düşük / Orta / Yüksek): ");
        string? priority = Console.ReadLine();

        if (string.IsNullOrWhiteSpace(priority))
        {
            priority = "Orta";
        }

        string newTask = $"{title.Trim()} - Öncelik: {priority.Trim()}";
        tasks.Add(newTask);

        Console.WriteLine("Görev başarıyla eklendi.");
    }
}