using System.ComponentModel.DataAnnotations;

namespace TaskBoard.Web.Models
{
    public class TaskItem
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = "";

        public string Priority { get; set; } = "";

        public string Status { get; set; } = "Open";

        public DateTime CreatedAt { get; set; } = DateTime.Now;
    }
}