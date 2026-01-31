using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace ProjectRequirementAPI.Models;

public class ProjectRequirementFormModel
{
    [Key]
    public int Id { get; set; }

    // DB columns (ONE table)
    public string? BasicDetailsJson { get; set; }
    public string? ProjectDetailsJson { get; set; }
    public string? DesignPreferencesJson { get; set; }
    public string? ProductMaintenanceJson { get; set; }

    [JsonPropertyName("do_you_need_training_for_staff")]
    public bool DoYouNeedTrainingForStaff { get; set; }
    [JsonPropertyName("additional_details")]
    public string? AdditionalDetails { get; set; }

   [JsonPropertyName("sys_created")]
    public DateTime SysCreated { get; set; }

    [JsonPropertyName("sys_updated")]
    public DateTime? SysUpdated { get; set; }


    // ----------------- NOT MAPPED -----------------

    [NotMapped]
    public BasicDetails? basic_details
    {
        get => Deserialize<BasicDetails>(BasicDetailsJson);
        set => BasicDetailsJson = Serialize(value);
    }

    [NotMapped]
    public ProjectDetails? project_details
    {
        get => Deserialize<ProjectDetails>(ProjectDetailsJson);
        set => ProjectDetailsJson = Serialize(value);
    }

    [NotMapped]
    public DesignPreferences? design_preferences
    {
        get => Deserialize<DesignPreferences>(DesignPreferencesJson);
        set => DesignPreferencesJson = Serialize(value);
    }

    [NotMapped]
    [JsonPropertyName("product_maintenance")]
    public ProductMaintenance? product_maintenance
    {
        get => Deserialize<ProductMaintenance>(ProductMaintenanceJson);
        set => ProductMaintenanceJson = Serialize(value);
    }

    // Helpers
    private static readonly JsonSerializerOptions _jsonOptions = new()
    {
        PropertyNameCaseInsensitive = true,
        Converters = { new JsonStringEnumConverter() }
    };

    private static string? Serialize<T>(T? data)
        => data == null ? null : JsonSerializer.Serialize(data, _jsonOptions);

    private static T? Deserialize<T>(string? json)
        => string.IsNullOrWhiteSpace(json) ? default : JsonSerializer.Deserialize<T>(json, _jsonOptions);
}
