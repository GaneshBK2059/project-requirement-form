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
    project_type: string;

    existing_url: string;        // ✅ URL input field
    have_url: boolean;           // ✅ derived (auto)

    want_domain: boolean;
    have_hosting_service: boolean;

    social_media: string[];
    expected_deadline: string;
    web_search_keywords: string[];
    project_description: string;
    what_should_project_include: string[];
    selected_project_features: string[];

    resources: {
      resource_key: ResourceKey;
      provider: ResourceProviderUI;
    }[];
};

  design_preferences: {
    have_official_color: boolean,
    have_official_font: boolean,
    have_official_theme: boolean,
    have_printed_materials: boolean, // cards or brochures
  },
  product_maintenance: {
  who_will_maintain: ResourceProviderUI;
  frequency_of_updates: frequencyOfUpdatesUI;
};

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
  | "metatags/description"
  | "other_print_collateral"
  | "translation_costs";
  
export type ResourceProviderUI = "you" | "us" | "thirdparty";


export type frequencyOfUpdatesUI =
  | "daily"
  | "weekly"
  | "monthly"
  | "quarterly"
  | "bi-annually"
  | "annually";

export const ProviderApiMap = {
  you: 0,
  us: 1,
  thirdparty: 2,
} as const;

export const FrequencyApiMap = {
  daily: 0,
  weekly: 1,
  monthly: 2,
  quarterly: 3,
  "bi-annually": 4,
  annually: 5,
} as const;