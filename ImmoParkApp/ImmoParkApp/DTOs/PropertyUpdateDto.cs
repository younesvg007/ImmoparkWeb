using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.DTOs
{
    public class PropertyUpdateDto
    {
        [Required]
        public string Address { get; set; }

        public string Floor { get; set; }

        [Required]
        public string Type { get; set; }

        [Required]
        public string NbRoom { get; set; }

        [Required]
        public int AreaTotal { get; set; }

        [Required]
        public int AreaRoom { get; set; }

        [Required]
        public int AreaKitchen { get; set; }

        [Required]
        public int AreaLiving { get; set; }

        [Required]
        public int RentPrice { get; set; }

        [Required]
        public int TaxesPrice { get; set; }
    }
}
