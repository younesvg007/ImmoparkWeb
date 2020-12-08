using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Net.Http;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using WinformsImmoPark.Models;

namespace WinformsImmoPark
{
    public partial class ClientForm1 : Form
    {
        private readonly HttpClient httpClient = new HttpClient();
        //private readonly HttpClient httpClient = new();

        public ClientForm1()
        {
            InitializeComponent();

            CreateValueForComboBox();

            InitFields();
        }

        private void InitFields()
        {
            textBoxLastName.Text = "Bond";
            textBoxFirstName.Text = "James";
            textBoxAddress.Text = "Big Ben";
            textBoxPostCode.Text = "15000";
            textBoxTown.Text = "London";
            textBoxCountry.Text = "UK";
            textBoxBirthPlace.Text = "Liverpool";
            textBoxEmail.Text = "james.bond@mail.com";
            textBoxPhoneNumber.Text = "0475176490";
        }

        private void CreateValueForComboBox()
        {
            comboBoxCivility.Items.Add("Mr.");
            comboBoxCivility.Items.Add("Mrs.");
            comboBoxCivility.Items.Add("Ms.");
            comboBoxCivility.Items.Add("Miss.");

            comboBoxSexe.Items.Add("Male");
            comboBoxSexe.Items.Add("Female");
        }

        //si le user tente de taper des caracteres hormis des chiffres l'ecriture dans le textbox est desactiver
        private void textBoxPhoneNumber_KeyPress(object sender, KeyPressEventArgs e)
        {
            e.Handled = !char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar);

            if (!char.IsDigit(e.KeyChar) && !char.IsControl(e.KeyChar))
            {
                errorProvider1.SetError(textBoxPhoneNumber, "Only Number !!!");
            }
            else
            {
                errorProvider1.Clear();
            }
        }

        private void buttonAdd_Click(object sender, EventArgs e)
        {
            Validation();
        }

        private void Validation()
        {
            if (string.IsNullOrEmpty(comboBoxCivility.Text) ||
                string.IsNullOrEmpty(comboBoxSexe.Text) ||
                string.IsNullOrEmpty(textBoxLastName.Text) ||
                string.IsNullOrEmpty(textBoxFirstName.Text) ||
                string.IsNullOrEmpty(textBoxAddress.Text) ||
                string.IsNullOrEmpty(textBoxPostCode.Text) ||
                string.IsNullOrEmpty(textBoxTown.Text) ||
                string.IsNullOrEmpty(textBoxCountry.Text) ||
                string.IsNullOrEmpty(textBoxBirthPlace.Text) ||
                string.IsNullOrEmpty(textBoxEmail.Text) ||
                string.IsNullOrEmpty(textBoxPhoneNumber.Text) )
            {

                MessageBox.Show("All Fields are required");
            }
            else if (!IsValidEmailAddress(textBoxEmail.Text))
            {
                lblErrorEmail.ForeColor = Color.DarkRed;
                lblErrorEmail.Text = "Email Invalid !";

            }
            else if (textBoxPhoneNumber.Text.Length != 10)
            {
                lblErrorGsm.ForeColor = Color.DarkRed;
                lblErrorGsm.Text = "Gsm Invalid !";

                lblErrorEmail.ForeColor = Color.Black;
                lblErrorEmail.Text = "Email Valid !";

            }
            else 
            {

                Client client = new Client();

                client.Civility = comboBoxCivility.Text;
                client.Sexe = comboBoxSexe.Text;
                client.LastName = textBoxLastName.Text;
                client.FirstName = textBoxFirstName.Text;
                client.Address = textBoxAddress.Text;
                client.PostCode = textBoxPostCode.Text;
                client.Town = textBoxTown.Text;
                client.Country = textBoxCountry.Text;
                client.BirthDay = dateTimePicker1.Text;
                client.Age = Convert.ToInt32(numericUpDown1.Value);
                client.BirthPlace = textBoxBirthPlace.Text;
                client.Email = textBoxEmail.Text;
                client.Gsm = textBoxPhoneNumber.Text;
                client.isRenter = false;

                CreateClient(client);

                this.Hide();
                Home homeForm = new Home();
                homeForm.Closed += (s, args) => this.Close();
                homeForm.Show();

            }
        }

        private bool IsValidEmailAddress(string email)
        {
            try
            {
                MailAddress ma = new MailAddress(email);

                return true;
            }
            catch
            {
                return false;
            }
        }

        private async void CreateClient(Client client)
        {
            string json = Newtonsoft.Json.JsonConvert.SerializeObject(client);
            HttpContent data = new System.Net.Http.StringContent(json, Encoding.UTF8, "application/json");

            string url = "http://localhost:5000/immopark/api/client/";
            HttpResponseMessage response = await httpClient.PostAsync(url, data);

            string result = response.Content.ReadAsStringAsync().Result;

            if (response.IsSuccessStatusCode)
            {
                MessageBox.Show("The client " + client.FirstName + " " + client.LastName + " has been added successfully !");
            }

        }
    }
}
