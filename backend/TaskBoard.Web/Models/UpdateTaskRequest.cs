namespace TaskBoard.Web.Models
{
    public class UpdateTaskRequest
    {
        public string Title { get; set; } = "";

        public string Priority { get; set; } = "";
    }
}