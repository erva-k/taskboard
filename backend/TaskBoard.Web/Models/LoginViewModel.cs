using System.ComponentModel.DataAnnotations;

namespace TaskBoard.Web.Models
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Kullanıcı adı zorunludur.")]
        public string Username { get; set; } = "";

        [Required(ErrorMessage = "Şifre zorunludur.")]
        public string Password { get; set; } = "";
    }
}