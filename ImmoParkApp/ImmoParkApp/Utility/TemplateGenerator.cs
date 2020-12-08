using ImmoParkApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ImmoParkApp.Utility
{
    public class TemplateGenerator
    {
        public static string GetHTMLString(Contract contract)
        {
            var stringBuilder = new StringBuilder();
            stringBuilder.Append(@"
                        <html>
                            <head>
                            </head>
                            <body><br/><br/>
                                <div class='header'>");


            stringBuilder.AppendFormat(@"<h1>Lease Contract N°{0}</h1>", contract.ID);

            stringBuilder.Append(@"
                                </div><br/><br/><br/><br/>
                                <table border = '1' align='center'>
                                    <tr>
                                        <th>Start Date</th>
                                        <th>End Date</th>
                                    </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0}</td>
                                    <td>{1}</td>
                                </tr>", contract.StartDate, contract.EndDate);

            stringBuilder.Append(@"
                                 <tr>
                                   <th>Duration</th>
                                   <th>IndexBase</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0} Months</td>
                                    <td>{1}</td>
                                </tr>", contract.Duration, contract.IndexBase);

            stringBuilder.Append(@"
                                 <tr>
                                   <th>Amount Garantee</th>
                                   <th>Signature Date</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0} €</td>
                                    <td>{1}</td>
                                </tr>", contract.AmountGarantee, contract.SignatureDate);

            stringBuilder.Append(@"
                                 <tr>
                                   <th>Is CautionPaid</th>
                                   <th>Is FirstMonthPaid</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0}</td>
                                    <td>{1}</td>
                                </tr></table><br/><br/>", contract.CautionPaid, contract.isFirstMonthPaid);

            stringBuilder.Append(@"<table border = '1' align='center'>
                                 <tr>
                                   <th>IndexEntry Water</th>
                                   <th>IndexEntry Gaz</th>
                                   <th>IndexEntry Electricity</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0} M³</td>
                                    <td>{1} M³</td>
                                    <td>{2} kWh</td>
                                </tr>", contract.IndexEntryWater, contract.IndexEntryGaz, contract.IndexEntryElectricity);

            

            stringBuilder.Append(@"
                                 <tr>
                                   <th>PaymentCaution Date</th>
                                   <th>Entry Date</th>
                                   <th>Out Date</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0}</td>
                                    <td>{1}</td>
                                    <td>{2}</td>
                                </tr>", contract.PaymentCautionDate, contract.EntryDate, contract.OutDate);

            stringBuilder.Append(@"
                                 <tr>
                                   <th>IndexOut Water</th>
                                   <th>IndexOut Gaz</th>
                                   <th>IndexOut Electricity</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0} M³</td>
                                    <td>{1} M³</td>
                                    <td>{2} kWh</td>
                                </tr></table><br/><br/><br/>", contract.IndexOutWater, contract.IndexOutGaz, contract.IndexOutElectricity);

            stringBuilder.Append(@"<table border = '1' align='center'>
                                 <tr>
                                   <th>Id Property</th>
                                   <th>National Register Client</th>
                                  </tr>");

            stringBuilder.AppendFormat(@"<tr>
                                    <td>{0}</td>
                                    <td>{1}</td>
                                </tr>", contract.idClient, contract.idProperty);

            stringBuilder.Append(@"
                                </table>
                            </body>
                        </html>");

            return stringBuilder.ToString();
        }
    }
}
