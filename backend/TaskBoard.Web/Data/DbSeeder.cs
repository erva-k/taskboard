using TaskBoard.Web.Models;

namespace TaskBoard.Data
{
    public static class DbSeeder
    {
        public static void Seed(TaskBoardDbContext context)
        {
            if (context.TaskItems.Any(t => t.Title == "Entity Framework öğren"))
            {
                return;
            }

            var tasks = new List<TaskItem>
            {
                new TaskItem
                {
                    Title = "Entity Framework öğren",
                    Priority = "Yüksek",
                    Status = "open"
                },

                new TaskItem
                {
                    Title = "Veritabanı bağlantısını kontrol et",
                    Priority = "Normal",
                    Status = "open"
                },

                new TaskItem
                {
                    Title = "Gün 14 çalışmasını tamamla",
                    Priority = "Düşük",
                    Status = "open"
                }
            };

            context.TaskItems.AddRange(tasks);
            context.SaveChanges();
        }
    }
}