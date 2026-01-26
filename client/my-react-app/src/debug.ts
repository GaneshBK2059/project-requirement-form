// Debug script to test API connectivity
const API_BASE_URL = "http://localhost:5004/api/projectrequirements";

export async function testValidateEndpoint() {
  const testData = {
    data: {
      basic_details: {
        organization_name: "",
        address: "",
        phone_number: "",
        email: "",
        designation: "",
        contact_person_name: "",
        mobile_no: "",
      },
      project_details: {
        project_type: "",
        have_url: "",
        want_domain: false,
        have_hoisting_service: false,
        social_media: [],
        expected_deadline: "",
        web_search_keywords: [],
        project_description: "",
        what_should_project_include: [],
        selected_project_features: [],
        resources: [],
      },
      design_preferences: {
        have_official_color: false,
        have_official_font: false,
        have_official_theme: false,
        have_printed_materials: false,
      },
      product_maintainance: {
        who_will_maintain: "you",
        frequency_of_updates: "monthly",
      },
      do_you_need_training_for_staff: false,
      additional_details: "",
    },
    currentStep: 1,
  };

  console.log("Testing /validate endpoint...");
  console.log("URL:", `${API_BASE_URL}/validate`);
  console.log("Payload:", JSON.stringify(testData, null, 2));

  try {
    const response = await fetch(`${API_BASE_URL}/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    console.log("Response status:", response.status);
    console.log("Response ok:", response.ok);

    const result = await response.json();
    console.log("Response body:", result);

    return result;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

export async function testHealthCheck() {
  console.log("Testing backend health...");
  try {
    const response = await fetch("http://localhost:5004/api/projectrequirements", {
      method: "GET",
    });
    console.log("Health check response:", response.status, response.ok);
    return response.ok;
  } catch (error) {
    console.error("Backend is not responding:", error);
    return false;
  }
}
