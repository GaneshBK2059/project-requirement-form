using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectRequirementAPI.Migrations
{
    /// <inheritdoc />
    public partial class UpdateProjectRequirementColumn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "SysCreated",
                table: "ProjectRequirementForms",
                type: "timestamp with time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "SysUpdated",
                table: "ProjectRequirementForms",
                type: "timestamp with time zone",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SysCreated",
                table: "ProjectRequirementForms");

            migrationBuilder.DropColumn(
                name: "SysUpdated",
                table: "ProjectRequirementForms");
        }
    }
}
