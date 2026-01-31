using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectRequirementAPI.Data;
using ProjectRequirementAPI.Models;

namespace ProjectRequirementAPI.Controllers;

[ApiController]
[Route("api/project-requirements")]
public class ProjectRequirementsController : ControllerBase
{
    private readonly ApplicationDbContext _context;
    private readonly ILogger<ProjectRequirementsController> _logger;

    public ProjectRequirementsController(
        ApplicationDbContext context,
        ILogger<ProjectRequirementsController> logger)
    {
        _context = context;
        _logger = logger;
    }

    // ---------------- CREATE ----------------
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] ProjectRequirementFormModel form)
    {
        if (form == null)
            return BadRequest(new { message = "Request body is null" });

        form.SysCreated = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Unspecified);
        form.SysUpdated = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Unspecified);

        _context.ProjectRequirementForms.Add(form);
        await _context.SaveChangesAsync();

        return Ok(new
        {
            success = true,
            message = "Project requirement created successfully",
            data = form
        });
    }

    // ---------------- GET ALL ----------------
    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var data = await _context.ProjectRequirementForms
            .OrderByDescending(x => x.Id)
            .ToListAsync();

        return Ok(data);
    }

    // ---------------- GET BY ID ----------------
    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var data = await _context.ProjectRequirementForms.FindAsync(id);

        if (data == null)
            return NotFound($"Project requirement with id {id} not found");

        return Ok(data);
    }

    // ---------------- UPDATE ----------------
    [HttpPut("{id:int}")]
    public async Task<IActionResult> Update(int id, [FromBody] ProjectRequirementFormModel form)
    {
        if (id != form.Id)
            return BadRequest("ID mismatch");

        var existing = await _context.ProjectRequirementForms.FindAsync(id);
        if (existing == null)
            return NotFound();

        // Update fields
        existing.basic_details = form.basic_details;
        existing.project_details = form.project_details;
        existing.design_preferences = form.design_preferences;
        existing.product_maintenance = form.product_maintenance;
        existing.DoYouNeedTrainingForStaff = form.DoYouNeedTrainingForStaff;
        existing.AdditionalDetails = form.AdditionalDetails;
        existing.SysUpdated = DateTime.UtcNow;

        await _context.SaveChangesAsync();

        return Ok(existing);
    }

    // ---------------- DELETE ----------------
    [HttpDelete("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var data = await _context.ProjectRequirementForms.FindAsync(id);

        if (data == null)
            return NotFound();

        _context.ProjectRequirementForms.Remove(data);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
