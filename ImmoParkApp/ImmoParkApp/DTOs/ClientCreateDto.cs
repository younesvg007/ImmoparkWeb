using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.DTOs
{
    public class ClientCreateDto
    {

        public string Civility { get; set; }
        
        public string Sexe { get; set; }

        
        public string LastName { get; set; }

       
        public string FirstName { get; set; }

        public string Address { get; set; }

        public string PostCode { get; set; }

        public string Town { get; set; }

        public string Country { get; set; }

        public string BirthDay { get; set; }

        public int Age { get; set; }

        public string BirthPlace { get; set; }

        public string Email { get; set; }

        public string Gsm { get; set; }

        public bool isRenter { get; set; }
    }
}
