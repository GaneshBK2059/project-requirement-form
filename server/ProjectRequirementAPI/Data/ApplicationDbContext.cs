using Microsoft.EntityFrameworkCore;
using ProjectRequirementAPI.Models;

namespace ProjectRequirementAPI.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<ProjectRequirementFormModel> ProjectRequirementForms { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ProjectRequirementFormModel>(entity =>
        {
            entity.Property(e => e.SysCreated)
                .HasColumnType("timestamp without time zone");

            entity.Property(e => e.SysUpdated)
                .HasColumnType("timestamp without time zone");
        });
    }

}
