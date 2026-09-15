using System.ComponentModel.DataAnnotations;

namespace TaskBoard.Models.ViewModels
{
    public class CreateTaskViewModel
    {
        [Required(ErrorMessage = "Başlık zorunludur.")]
        [StringLength(80, ErrorMessage = "Başlık en fazla 80 karakter olabilir.")]
        public string Title { get; set; } = string.Empty;

        [Required(ErrorMessage = "Öncelik seçiniz.")]
        public string Priority { get; set; } = "normal";

        [StringLength(500, ErrorMessage = "Açıklama en fazla 500 karakter olabilir.")]
        public string? Description { get; set; } 
    }
}