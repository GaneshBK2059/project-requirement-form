using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace ProjectRequirementAPI.Migrations
{
    /// <inheritdoc />
    public partial class InitialSingleTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ProjectRequirementForms",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    BasicDetailsJson = table.Column<string>(type: "text", nullable: true),
                    ProjectDetailsJson = table.Column<string>(type: "text", nullable: true),
                    DesignPreferencesJson = table.Column<string>(type: "text", nullable: true),
                    ProductMaintenanceJson = table.Column<string>(type: "text", nullable: true),
                    DoYouNeedTrainingForStaff = table.Column<bool>(type: "boolean", nullable: false),
                    AdditionalDetails = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProjectRequirementForms", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProjectRequirementForms");
        }
    }
}
