using Microsoft.AspNetCore.Mvc;
using ProjectRequirementAPI.Models;

namespace ProjectRequirementAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectRequirementsController : ControllerBase
{
    private readonly ILogger<ProjectRequirementsController> _logger;

    public ProjectRequirementsController(ILogger<ProjectRequirementsController> logger)
    {
        _logger = logger;
    }

    /// <summary>
    /// Get all project requirements (placeholder - connect to database later)
    /// </summary>
    [HttpGet]
    public ActionResult<IEnumerable<ProjectRequirementFormModel>> GetAll()
    {
        _logger.LogInformation("Getting all project requirements");
        return Ok(new List<ProjectRequirementFormModel>());
    }

    /// <summary>
    /// Get a specific project requirement by ID
    /// </summary>
    [HttpGet("{id}")]
    public ActionResult<ProjectRequirementFormModel> GetById(int id)
    {
        _logger.LogInformation("Getting project requirement with ID: {Id}", id);
        return Ok(new ProjectRequirementFormModel());
    }

    /// <summary>
    /// Create a new project requirement form
    /// </summary>
    [HttpPost]
    public ActionResult<ProjectRequirementFormModel> Create([FromBody] ProjectRequirementFormModel form)
    {
        if (form == null)
        {
            return BadRequest("Form cannot be null");
        }

        _logger.LogInformation(
            "Creating new project requirement for organization: {Organization}",
            form.basic_details?.organization_name);

        // TODO: Save to database
        // For now, return the same form with a success message

        return CreatedAtAction(nameof(GetById), new { id = 1 }, form);
    }

    /// <summary>
    /// Update an existing project requirement form
    /// </summary>
    [HttpPut("{id}")]
    public ActionResult<ProjectRequirementFormModel> Update(int id, [FromBody] ProjectRequirementFormModel form)
    {
        if (form == null)
        {
            return BadRequest("Form cannot be null");
        }

        _logger.LogInformation("Updating project requirement with ID: {Id}", id);

        // TODO: Update in database

        return Ok(form);
    }

    /// <summary>
    /// Delete a project requirement form
    /// </summary>
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _logger.LogInformation("Deleting project requirement with ID: {Id}", id);

        // TODO: Delete from database
        return NoContent();
    }
}

