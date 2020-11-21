using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ImmoParkApp.Models
{
    public class Contract
    {
        [Key]
        public int ID { get; set; }

        [Required]
        public string StartDate { get; set; }

        [Required]
        public string EndDate { get; set; }

        [Required]
        public int Duration { get; set; } //Mois

        [Required]
        public string IndexBase { get; set; }

        [Required]
        public int AmountGarantee { get; set; }

        [Required]
        public string SignatureDate { get; set; }

        [Required]
        public int IndexEntryWater { get; set; }

        [Required]
        public int IndexEntryGaz { get; set; }

        [Required]
        public int IndexEntryElectricity { get; set; }

        [Required]
        public bool CautionPaid { get; set; }

        [Required]
        public string PaymentCautionDate { get; set; }

        [Required]
        public bool isFirstMonthPaid { get; set; }

        [Required]
        public string EntryDate { get; set; }

        [Required]
        public string OutDate { get; set; }

        [Required]
        public int IndexOutWater { get; set; }

        [Required]
        public int IndexOutGaz { get; set; }

        [Required]
        public int IndexOutElectricity { get; set; }

        [Required]
        [ForeignKey("Property")]
        public int idProperty { get; set; }
        public Property property { get; set; }

        [Required]
        [ForeignKey("Client")]
        public int idClient { get; set; }
        public Client client { get; set; }
    }
}
