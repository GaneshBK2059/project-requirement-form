import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import "../styles/AdditionalInfo.css";

type Props = {
  formData: projectRequirementForm;
  setFormData: React.Dispatch<React.SetStateAction<projectRequirementForm>>;
};

const AdditionalInfo = ({ formData, setFormData }: Props) => {
  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateMaintenanceField = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      product_maintainance: {
        ...prev.product_maintenance,
        [field]: value,
      },
    }));
  };

  return (
    <div className="additional-info-container">
      <fieldset className="additional-info-fieldset">
        <legend className="additional-info-legend">Additional Information</legend>

        <div className="section-title">
          <h3>Product Maintenance</h3>
        </div>

        <div className="form-group">
          <label htmlFor="maintain-by">Who will maintain the product? *</label>
          <select
            id="maintain-by"
            value={formData.product_maintenance.who_will_maintain}
            onChange={(e) => updateMaintenanceField("who_will_maintain", e.target.value)}
            className="form-input"
          >
            <option value="you">You</option>
            <option value="us">Us</option>
            <option value="third-party">Third Party</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="update-frequency">Frequency of Updates *</label>
          <select
            id="update-frequency"
            value={formData.product_maintenance.frequency_of_updates}
            onChange={(e) =>
              updateMaintenanceField("frequency_of_updates", e.target.value)
            }
            className="form-input"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="bi-annually">Bi-annually</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        <div className="divider"></div>

        <div className="section-title">
          <h3>Training & Support</h3>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.do_you_need_training_for_staff}
              onChange={(e) =>
                updateField("do_you_need_training_for_staff", e.target.checked)
              }
            />
            <span className="checkbox-text">
              would you need dedicated training for your staff?
            </span>
          </label>
        </div>

        <div className="divider"></div>

        <div className="section-title">
          <h3>Additional Details</h3>
        </div>

        <div className="form-group">
          <label htmlFor="additional">Is there anything else you'd like to tell us?</label>
          <textarea
            id="additional"
            placeholder="Let us know if there's anything else we should know about your project..."
            value={formData.additional_details}
            onChange={(e) => updateField("additional_details", e.target.value)}
            className="form-input textarea"
            rows={5}
          />
        </div>
      </fieldset>
    </div>
  );
};

export default AdditionalInfo;
