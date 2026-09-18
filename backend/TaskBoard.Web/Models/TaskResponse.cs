namespace TaskBoard.Web.Models
{
    public class TaskResponse
    {
        public int Id { get; set; }

        public string Title { get; set; } = "";

        public string Priority { get; set; } = "";

        public string Status { get; set; } = "";

        public DateTime CreatedAt { get; set; }
    }
}