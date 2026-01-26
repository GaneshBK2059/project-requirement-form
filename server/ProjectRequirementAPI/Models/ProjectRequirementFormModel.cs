namespace ProjectRequirementAPI.Models;

public class ProjectRequirementFormModel
{
    public BasicDetails? basic_details { get; set; }
    public ProjectDetails? project_details { get; set; }
    public DesignPreferences? design_preferences { get; set; }
    public ProductMaintenance? product_maintainance { get; set; }
    public bool do_you_need_training_for_staff { get; set; }
    public string? additional_details { get; set; }
}

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
    public string? project_type { get; set; } // website/ERP/Application
    public string? have_url { get; set; }
    public bool want_domain { get; set; }
    public bool have_hoisting_service { get; set; }
    public List<string>? social_media { get; set; }
    public string? expected_deadline { get; set; }
    public List<string>? web_search_keywords { get; set; }
    public string? project_description { get; set; }
    public List<string>? what_should_project_include { get; set; }
    public List<string>? selected_project_features { get; set; }
    public List<Resource>? resources { get; set; }
}

public class Resource
{
    public string? resource_key { get; set; }
    public string? provider { get; set; } // "you" or "us" or "third_party"
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
    public string? who_will_maintain { get; set; } // "you" or "us" or "third_party"
    public string? frequency_of_updates { get; set; } // Daily/Weekly/Monthly/Quarterly/Bi-Annually/Annually
}
