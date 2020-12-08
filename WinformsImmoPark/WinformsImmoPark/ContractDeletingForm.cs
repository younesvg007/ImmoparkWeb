using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Net.Http;
using System.Text;
using System.Windows.Forms;
using WinformsImmoPark.Models;

namespace WinformsImmoPark
{
    public partial class ContractDeletingForm : Form
    {
        private readonly HttpClient httpClient = new HttpClient();

        public ContractDeletingForm()
        {
            InitializeComponent();

            GetAllContract();
        }

        private void btnDeleteContract_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrEmpty(comboBox1.Text))
            {
                MessageBox.Show("ID is not selected");
            }
            else
            {
                DeleteContract();

                this.Hide();
                Home homeForm = new Home();
                homeForm.Closed += (s, args) => this.Close();
                homeForm.Show();
            }

        }

        private async void DeleteContract()
        {
            string url = "http://localhost:5000/immopark/api/contract/" + comboBox1.Text;
            HttpResponseMessage response = await httpClient.DeleteAsync(url);

            if (response.IsSuccessStatusCode)
                MessageBox.Show("The contract N° " + comboBox1.Text + " has been deleted successfully !");
            else
                MessageBox.Show("Error");
        }

        private async void GetAllContract()
        {
            string url = "http://localhost:5000/immopark/api/contract/";
            HttpResponseMessage response = await httpClient.GetAsync(url);

            string data = response.Content.ReadAsStringAsync().Result;

            var contractList = JsonConvert.DeserializeObject<List<Contract>>(data);

            foreach (Contract c in contractList)
            {
                comboBox1.Items.Add(c.ID.ToString());
            }

        }
    }
}
