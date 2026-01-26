export type projectRequirementForm = {
  basic_details: {
    organization_name: string;
    address: string;
    phone_number: string;
    email: string;
    designation: string;
    contact_person_name: string;
    mobile_no: string;
  };
  project_details: {
    project_type: string; // website/ERP/Application
    have_url: string;
    want_domain: boolean;
    have_hoisting_service: boolean;
    social_media: string[]; // comma separated list of social media links
    expected_deadline: string;
    web_search_keywords: string[]; // text format
    project_description: string; // what makes your product unique [ product name and services if applicable]
    what_should_project_include: string[];
    selected_project_features: string[]; // array of selected features
    resources: {
      resource_key: ResourceKey;
      provider: resourceProvider;
    }[];
  };
  design_preferences: {
    have_official_color: boolean,
    have_official_font: boolean,
    have_official_theme: boolean,
    have_printed_materials: boolean, // cards or brochures
  },
  product_maintainance: {
    who_will_maintain: resourceProvider;
    frequency_of_updates: FrequencyOfUpdates | string; // monthly/quarterly/bi-annually/annually
  },
  do_you_need_training_for_staff: boolean,
  additional_details: string;
};


// supporting data types

export type ResourceKey =
  | "photo_video"
  | "Quotes_content"
  | "Description"
  | "professional_logo"
  | "graphic_designs"
  | "metatags/descriptin"
  | "other_print_collateral"
  | "translation_costs";
export type resourceProvider = "you" | "us" | "third_party";

export type FrequencyOfUpdates = "Daily" | "Weekly" | "Monthly" | "Quarterly" | "Bi-Annually" | "Annually" ;; 
