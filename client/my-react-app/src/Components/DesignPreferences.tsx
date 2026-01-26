import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import "../styles/DesignPreferences.css";

type Props = {
  formData: projectRequirementForm;
  setFormData: React.Dispatch<React.SetStateAction<projectRequirementForm>>;
};

const DesignPreferences = ({ formData, setFormData }: Props) => {
  const updateField = (
    field: keyof projectRequirementForm["design_preferences"],
    value: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      design_preferences: {
        ...prev.design_preferences,
        [field]: value,
      },
    }));
  };

  return (
    <div className="design-preferences-container">
      <fieldset className="design-preferences-fieldset">
        <legend className="design-preferences-legend">Design Preferences</legend>

        <div className="preferences-intro">
          <p>Tell us about your existing brand assets and design guidelines</p>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.design_preferences.have_official_color}
              onChange={(e) =>
                updateField("have_official_color", e.target.checked)
              }
            />
            <span className="checkbox-text">
              Do you have official brand colors?
            </span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.design_preferences.have_official_font}
              onChange={(e) =>
                updateField("have_official_font", e.target.checked)
              }
            />
            <span className="checkbox-text">Do you have official fonts?</span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.design_preferences.have_official_theme}
              onChange={(e) =>
                updateField("have_official_theme", e.target.checked)
              }
            />
            <span className="checkbox-text">Do you have a design theme/style guide?</span>
          </label>
        </div>

        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={formData.design_preferences.have_printed_materials}
              onChange={(e) =>
                updateField("have_printed_materials", e.target.checked)
              }
            />
            <span className="checkbox-text">
              Do you have printed materials (business cards, brochures)?
            </span>
          </label>
        </div>
      </fieldset>
    </div>
  );
};

export default DesignPreferences;
