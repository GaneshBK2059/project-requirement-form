namespace ProjectRequirementAPI.Models;

public class BasicDetails
{
    public string? organization_name { get; set; }
    public string? address { get; set; }
    public string? phone_number { get; set; }
    public string? email { get; set; }
    public string? designation { get; set; }
    public string? contact_person_name { get; set; }
    public string? mobile_no { get; set; }
}

public class ProjectDetails
{
    public string? project_type { get; set; }

    public bool have_url { get; set; }
    public string? existing_url { get; set; }

    public bool want_domain { get; set; }
    public bool have_hosting_service { get; set; }

    public DateTime? expected_deadline { get; set; }

    public List<string> social_media { get; set; } = new();
    public List<string> web_search_keywords { get; set; } = new();
    public List<string> what_should_project_include { get; set; } = new();
    public List<string> selected_project_features { get; set; } = new();

    public string? project_description { get; set; }

    public List<Resource> resources { get; set; } = new();
}

public class Resource
{
    public string? resource_key { get; set; }
    public ProviderType provider { get; set; }
}

public class DesignPreferences
{
    public bool have_official_color { get; set; }
    public bool have_official_font { get; set; }
    public bool have_official_theme { get; set; }
    public bool have_printed_materials { get; set; }
}

public class ProductMaintenance
{
    public ProviderType who_will_maintain { get; set; }
    public MaintenanceFrequency frequency_of_updates { get; set; }
}

public enum ProviderType
{
    You,
    Us,
    ThirdParty
}

public enum MaintenanceFrequency
{
    Daily,
    Weekly,
    Monthly,
    Quarterly,
    BiAnnually,
    Annually
}
