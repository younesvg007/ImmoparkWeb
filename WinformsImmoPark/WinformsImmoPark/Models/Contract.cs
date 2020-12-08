using System;
using System.Collections.Generic;
using System.Text;

namespace WinformsImmoPark.Models
{
    public class Contract
    {
        public int ID { get; set; }

        public string StartDate { get; set; }

        public string EndDate { get; set; }

        public int Duration { get; set; } //Mois

        public string IndexBase { get; set; }

        public int AmountGarantee { get; set; }

        public string SignatureDate { get; set; }

        public int IndexEntryWater { get; set; }

        public int IndexEntryGaz { get; set; }

        public int IndexEntryElectricity { get; set; }

        public bool CautionPaid { get; set; }

        public string PaymentCautionDate { get; set; }

        public bool isFirstMonthPaid { get; set; }

        public string EntryDate { get; set; }

        public string OutDate { get; set; }

        public int IndexOutWater { get; set; }

        public int IndexOutGaz { get; set; }

        public int IndexOutElectricity { get; set; }

        public int idProperty { get; set; }

        public int idClient { get; set; }

    }
}
