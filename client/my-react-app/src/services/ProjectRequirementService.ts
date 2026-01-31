const API_BASE_URL = "http://localhost:5004/api";
import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import { mapToApiPayload } from "../utils/apiMapper";



class ProjectRequirementService {
  /**
   * Get all project requirements
   */
  static async getAll(): Promise<projectRequirementForm[]> {
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
  static async getById(id: number): Promise<projectRequirementForm> {
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
  static async create(form: projectRequirementForm): Promise<number> {
    const apiPayload = mapToApiPayload(form);
  const response = await fetch(
    `${API_BASE_URL}/project-requirements`, // ✅ FIXED
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiPayload),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || `HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.data?.id ?? data.id;
  }

  /**
   * Update an existing project requirement
   */
  static async update(
    id: number,
    form: projectRequirementForm
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
