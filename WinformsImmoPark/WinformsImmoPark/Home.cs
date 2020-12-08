using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace WinformsImmoPark
{
    public partial class Home : Form
    {
        public Home()
        {
            InitializeComponent();
        }

        private void btnAddClient_Click(object sender, EventArgs e)
        {
            this.Hide();
            ClientForm1 clientForm = new ClientForm1();
            clientForm.Closed += (s, args) => this.Close();
            clientForm.Show();
        }

        private void btnDeleteContract_Click(object sender, EventArgs e)
        {
            this.Hide();
            ContractDeletingForm contractDeletingForm = new ContractDeletingForm();
            contractDeletingForm.Closed += (s, args) => this.Close();
            contractDeletingForm.Show();
        }

    }
}
