namespace TaskBoard.Web.Models
{
    public class CreateTaskRequest
    {
        public string Title { get; set; } = "";
        public string Priority { get; set; } = "";
    }
}