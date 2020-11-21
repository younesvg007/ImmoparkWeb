using Microsoft.EntityFrameworkCore.Migrations;

namespace ImmoParkApp.Migrations
{
    public partial class ImmoWebMigrations : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    NatRegister = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Civility = table.Column<string>(nullable: false),
                    Sexe = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: false),
                    Address = table.Column<string>(nullable: false),
                    PostCode = table.Column<string>(nullable: false),
                    Town = table.Column<string>(nullable: false),
                    Country = table.Column<string>(nullable: false),
                    BirthDay = table.Column<string>(nullable: false),
                    Age = table.Column<int>(nullable: false),
                    BirthPlace = table.Column<string>(nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Gsm = table.Column<string>(nullable: false),
                    isRenter = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.NatRegister);
                });

            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(nullable: false),
                    Floor = table.Column<string>(nullable: true),
                    Type = table.Column<string>(nullable: false),
                    NbRoom = table.Column<string>(nullable: false),
                    AreaTotal = table.Column<int>(nullable: false),
                    AreaRoom = table.Column<int>(nullable: false),
                    AreaKitchen = table.Column<int>(nullable: false),
                    AreaLiving = table.Column<int>(nullable: false),
                    RentPrice = table.Column<int>(nullable: false),
                    TaxesPrice = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Contracts",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StartDate = table.Column<string>(nullable: false),
                    EndDate = table.Column<string>(nullable: false),
                    Duration = table.Column<int>(nullable: false),
                    IndexBase = table.Column<string>(nullable: false),
                    AmountGarantee = table.Column<int>(nullable: false),
                    SignatureDate = table.Column<string>(nullable: false),
                    IndexEntryWater = table.Column<int>(nullable: false),
                    IndexEntryGaz = table.Column<int>(nullable: false),
                    IndexEntryElectricity = table.Column<int>(nullable: false),
                    CautionPaid = table.Column<bool>(nullable: false),
                    PaymentCautionDate = table.Column<string>(nullable: false),
                    isFirstMonthPaid = table.Column<bool>(nullable: false),
                    EntryDate = table.Column<string>(nullable: false),
                    OutDate = table.Column<string>(nullable: false),
                    IndexOutWater = table.Column<int>(nullable: false),
                    IndexOutGaz = table.Column<int>(nullable: false),
                    IndexOutElectricity = table.Column<int>(nullable: false),
                    idProperty = table.Column<int>(nullable: false),
                    propertyID = table.Column<int>(nullable: true),
                    idClient = table.Column<int>(nullable: false),
                    clientNatRegister = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contracts", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Contracts_Clients_clientNatRegister",
                        column: x => x.clientNatRegister,
                        principalTable: "Clients",
                        principalColumn: "NatRegister",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Contracts_Properties_propertyID",
                        column: x => x.propertyID,
                        principalTable: "Properties",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_clientNatRegister",
                table: "Contracts",
                column: "clientNatRegister");

            migrationBuilder.CreateIndex(
                name: "IX_Contracts_propertyID",
                table: "Contracts",
                column: "propertyID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Contracts");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Properties");
        }
    }
}
