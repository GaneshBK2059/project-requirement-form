const API_BASE_URL = "http://localhost:5004/api";

export interface ProjectRequirementForm {
  basic_details?: {
    organization_name?: string;
    address?: string;
    phone_number?: string;
    email?: string;
    designation?: string;
    contact_person_name?: string;
    mobile_no?: string;
  };
  project_details?: {
    project_type?: string;
    have_url?: string;
    want_domain?: boolean;
    have_hoisting_service?: boolean;
    social_media?: string[];
    expected_deadline?: string;
    web_search_keywords?: string[];
    project_description?: string;
    what_should_project_include?: string[];
    selected_project_features?: string[];
    resources?: Array<{
      resource_key?: string;
      provider?: string;
    }>;
  };
  design_preferences?: {
    have_official_color?: boolean;
    have_official_font?: boolean;
    have_official_theme?: boolean;
    have_printed_materials?: boolean;
  };
  product_maintainance?: {
    who_will_maintain?: string;
    frequency_of_updates?: string;
  };
  do_you_need_training_for_staff?: boolean;
  additional_details?: string;
}

class ProjectRequirementService {
  /**
   * Get all project requirements
   */
  static async getAll(): Promise<ProjectRequirementForm[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/projectrequirements`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching project requirements:", error);
      throw error;
    }
  }

  /**
   * Get a specific project requirement by ID
   */
  static async getById(id: number): Promise<ProjectRequirementForm> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/projectrequirements/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(`Error fetching project requirement ${id}:`, error);
      throw error;
    }
  }

  /**
   * Create a new project requirement
   */
  static async create(form: ProjectRequirementForm): Promise<number> {
    try {
      const response = await fetch(`${API_BASE_URL}/projectrequirements`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.id || 1;
    } catch (error) {
      console.error("Error creating project requirement:", error);
      throw error;
    }
  }

  /**
   * Update an existing project requirement
   */
  static async update(
    id: number,
    form: ProjectRequirementForm
  ): Promise<void> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/projectrequirements/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error updating project requirement ${id}:`, error);
      throw error;
    }
  }

  /**
   * Delete a project requirement
   */
  static async delete(id: number): Promise<void> {
    try {
      const response = await fetch(
        `${API_BASE_URL}/projectrequirements/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error deleting project requirement ${id}:`, error);
      throw error;
    }
  }
}

export default ProjectRequirementService;
