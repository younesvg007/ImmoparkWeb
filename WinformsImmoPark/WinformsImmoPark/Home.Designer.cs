namespace WinformsImmoPark
{
    partial class Home
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnAddClient = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.btnDeleteContract = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btnAddClient
            // 
            this.btnAddClient.BackColor = System.Drawing.Color.Silver;
            this.btnAddClient.Font = new System.Drawing.Font("Tahoma", 11.1F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnAddClient.Location = new System.Drawing.Point(755, 806);
            this.btnAddClient.Name = "btnAddClient";
            this.btnAddClient.Size = new System.Drawing.Size(583, 95);
            this.btnAddClient.TabIndex = 0;
            this.btnAddClient.Text = "Add new Client";
            this.btnAddClient.UseVisualStyleBackColor = false;
            this.btnAddClient.Click += new System.EventHandler(this.btnAddClient_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Tahoma", 44.1F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.label1.ForeColor = System.Drawing.Color.GhostWhite;
            this.label1.Location = new System.Drawing.Point(590, 232);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(898, 177);
            this.label1.TabIndex = 1;
            this.label1.Text = "Immo Park";
            // 
            // btnDeleteContract
            // 
            this.btnDeleteContract.BackColor = System.Drawing.Color.Silver;
            this.btnDeleteContract.Font = new System.Drawing.Font("Tahoma", 11.1F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.btnDeleteContract.Location = new System.Drawing.Point(755, 932);
            this.btnDeleteContract.Name = "btnDeleteContract";
            this.btnDeleteContract.Size = new System.Drawing.Size(583, 92);
            this.btnDeleteContract.TabIndex = 0;
            this.btnDeleteContract.Text = "DeleteContract";
            this.btnDeleteContract.UseVisualStyleBackColor = false;
            this.btnDeleteContract.Click += new System.EventHandler(this.btnDeleteContract_Click);
            // 
            // Home
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(17F, 41F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.MidnightBlue;
            this.BackgroundImageLayout = System.Windows.Forms.ImageLayout.Center;
            this.ClientSize = new System.Drawing.Size(2088, 1158);
            this.Controls.Add(this.btnDeleteContract);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.btnAddClient);
            this.Name = "Home";
            this.Text = "Home";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnAddClient;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button btnDeleteContract;
    }
}

