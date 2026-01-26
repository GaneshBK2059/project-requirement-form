import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import "../styles/BasicDetails.css";

type Props = {
  formData: projectRequirementForm;
  setFormData: React.Dispatch<React.SetStateAction<projectRequirementForm>>;
};

const BasicDetailsSection = ({ formData, setFormData }: Props) => {
  const updateField = (
    field: keyof projectRequirementForm["basic_details"],
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      basic_details: {
        ...prev.basic_details,
        [field]: value,
      },
    }));
  };

  return (
    <div className="basic-details-container">
      <fieldset className="basic-details-fieldset">
        <legend className="basic-details-legend">Basic Details</legend>

        <div className="form-group">
          <label htmlFor="org-name">Organization Name *</label>
          <input
            id="org-name"
            placeholder="Enter organization name"
            value={formData.basic_details.organization_name}
            onChange={(e) => updateField("organization_name", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address *</label>
          <input
            id="address"
            placeholder="Enter address"
            value={formData.basic_details.address}
            onChange={(e) => updateField("address", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={formData.basic_details.email}
            onChange={(e) => updateField("email", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Contact Person Name *</label>
          <input
            id="contact_person_name"
            placeholder="Enter contact person name"
            value={formData.basic_details.contact_person_name}
            onChange={(e) => updateField("contact_person_name", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            id="phone"
            placeholder="Enter phone number"
            value={formData.basic_details.phone_number}
            onChange={(e) => updateField("phone_number", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation">Designation *</label>
          <input
            id="designation"
            placeholder="Enter designation"
            value={formData.basic_details.designation}
            onChange={(e) => updateField("designation", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number *</label>
          <input
            id="mobile"
            placeholder="Enter mobile number"
            value={formData.basic_details.mobile_no}
            onChange={(e) => updateField("mobile_no", e.target.value)}
            className="form-input"
          />
        </div>
      </fieldset>
    </div>
  );
};

export default BasicDetailsSection;
