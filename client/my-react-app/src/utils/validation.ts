import type { projectRequirementForm } from "../Types/ProjectRequirementForm";

export interface ValidationErrors {
  isValid: boolean;
  errors: string[];
}

/**
 * Frontend validation for Step 1: Basic Details
 */
export function validateStep1(data: projectRequirementForm): ValidationErrors {
  const errors: string[] = [];

  if (!data.basic_details?.organization_name?.trim()) {
    errors.push("Organization name is required");
  }

  if (!data.basic_details?.email?.trim()) {
    errors.push("Email is required");
  } else if (!isValidEmail(data.basic_details.email)) {
    errors.push("Email format is invalid");
  }

  if (!data.basic_details?.phone_number?.trim()) {
    errors.push("Phone number is required");
  } else if (!isValidPhoneNumber(data.basic_details.phone_number)) {
    errors.push("Phone number must be at least 10 digits");
  }

  if (!data.basic_details?.contact_person_name?.trim()) {
    errors.push("Contact person name is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Frontend validation for Step 2: Project Details
 */
export function validateStep2(data: projectRequirementForm): ValidationErrors {
  const errors: string[] = [];

  if (!data.project_details?.project_type?.trim()) {
    errors.push("Project type is required");
  }

  if (!data.project_details?.project_description?.trim()) {
    errors.push("Project description is required");
  }

  if (!data.project_details?.expected_deadline?.trim()) {
    errors.push("Expected deadline is required");
  } else {
    const deadline = new Date(data.project_details.expected_deadline);
    const today = new Date();
    if (deadline < today) {
      errors.push("Expected deadline must be in the future");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Frontend validation for Step 3: Design Preferences
 */
export function validateStep3(data: projectRequirementForm): ValidationErrors {
  const errors: string[] = [];

  // Step 3 is mostly optional preferences, but we can add custom rules if needed
  if (!data.design_preferences) {
    errors.push("Design preferences object is missing");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Frontend validation for Step 4: Additional Info
 */
export function validateStep4(data: projectRequirementForm): ValidationErrors {
  const errors: string[] = [];

  // Step 4 validation
  if (!data.product_maintenance) {
    errors.push("Product maintenance info is required");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validate the entire form for final submission
 */
export function validateFullForm(data: projectRequirementForm): ValidationErrors {
  const step1 = validateStep1(data);
  const step2 = validateStep2(data);
  const step3 = validateStep3(data);
  const step4 = validateStep4(data);

  const allErrors = [
    ...step1.errors,
    ...step2.errors,
    ...step3.errors,
    ...step4.errors,
  ];

  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
  };
}

/**
 * Validate based on current step
 */
export function validateByStep(
  data: projectRequirementForm,
  currentStep: number
): ValidationErrors {
  switch (currentStep) {
    case 1:
      return validateStep1(data);
    case 2:
      return validateStep2(data);
    case 3:
      return validateStep3(data);
    case 4:
      return validateStep4(data);
    default:
      return { isValid: false, errors: ["Invalid step"] };
  }
}

/**
 * Helper: Validate email format
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Helper: Validate phone number (at least 10 digits)
 */
function isValidPhoneNumber(phone: string): boolean {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10;
}
