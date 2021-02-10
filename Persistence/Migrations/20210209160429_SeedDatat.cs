using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class SeedDatat : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "id", "name" },
                values: new object[] { 1, "value 101" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "id", "name" },
                values: new object[] { 2, "value 102" });

            migrationBuilder.InsertData(
                table: "Values",
                columns: new[] { "id", "name" },
                values: new object[] { 3, "value 103" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Values",
                keyColumn: "id",
                keyValue: 3);
        }
    }
}
