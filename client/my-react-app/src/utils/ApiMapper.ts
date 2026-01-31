import type {
  projectRequirementForm,
} from "../Types/ProjectRequirementForm";

/* ---------------- PROVIDER MAP ---------------- */

export const ProviderApiMap = {
  you: 0,
  us: 1,
  thirdparty: 2,
} as const;

/* ---------------- FREQUENCY MAP ---------------- */

export const FrequencyApiMap = {
  daily: 0,
  weekly: 1,
  monthly: 2,
  quarterly: 3,
  "bi-annually": 4,
  annually: 5,
} as const;

/* ---------------- MAIN MAPPER ---------------- */

export function mapToApiPayload(form: projectRequirementForm) {
  return {
    ...form,
    project_details: {
      ...form.project_details,
      resources: form.project_details.resources.map((r) => ({
        resource_key: r.resource_key,
        provider: ProviderApiMap[r.provider],
      })),
    },
    product_maintainance: {
      ...form.product_maintenance,
      who_will_maintain:
        ProviderApiMap[form.product_maintenance.who_will_maintain],
      frequency_of_updates:
        FrequencyApiMap[form.product_maintenance.frequency_of_updates],
    },
  };
}
