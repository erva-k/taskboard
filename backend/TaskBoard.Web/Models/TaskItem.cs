namespace TaskBoard.Web.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        public string Title { get; set; } = "";

        public string Priority { get; set; } = "";
    }
}