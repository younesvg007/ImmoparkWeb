using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Models
{
    public class Client
    {
        [Key]
        public int NatRegister { get; set; }

        [Required]
        public string Civility { get; set; }

        [Required]
        public string Sexe { get; set; }

        [Required]
        public string LastName { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string PostCode { get; set; }

        [Required]
        public string Town { get; set; }

        [Required]
        public string Country { get; set; }

        [Required]
        public string BirthDay { get; set; }

        [Required]
        public int Age { get; set; }

        [Required]
        public string BirthPlace { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public string Gsm { get; set; }

        [Required]
        public bool isRenter { get; set; }
    }
}
