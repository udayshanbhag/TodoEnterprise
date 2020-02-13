﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace todoapi.Migrations
{
    public partial class setup_spelling_correction : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreeatedDate",
                table: "Todos");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedDate",
                table: "Todos",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedDate",
                table: "Todos");

            migrationBuilder.AddColumn<DateTime>(
                name: "CreeatedDate",
                table: "Todos",
                type: "timestamp without time zone",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
