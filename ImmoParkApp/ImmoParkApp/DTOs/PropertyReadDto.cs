using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.DTOs
{
    public class PropertyReadDto
    {
        
        public int ID { get; set; }

        public string Address { get; set; }

        public string Floor { get; set; }

        public string Type { get; set; }

        public string NbRoom { get; set; }

        public int AreaTotal { get; set; }

        public int AreaRoom { get; set; }

        public int AreaKitchen { get; set; }

        public int AreaLiving { get; set; }

        public int RentPrice { get; set; }

        public int TaxesPrice { get; set; }
    }
}
