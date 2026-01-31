import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import "../styles/ProjectDetails.css";
import type { ResourceKey } from "../Types/ProjectRequirementForm";

const FEATURE_OPTIONS = [
  { id: 1, label: "Social Network Integration" },
  { id: 2, label: "An HTML5/CSS3 Website" },
  { id: 3, label: "Responsive Design (Mobile, Tablet, Desktop)" },
  { id: 4, label: "Wordpress based CMS" },
  { id: 5, label: "Online Magazine" },
  { id: 6, label: "Newsletter System" },
  { id: 7, label: "SEO Optimization" },
  { id: 8, label: "A Basic HTML site" },
  { id: 9, label: "Bootstrap" },
  { id: 10, label: "Social Network" },
  { id: 11, label: "Laravel" },
  { id: 12, label: "ERP System" },
  { id: 13, label: "Separate dedicated landing pages" },
  { id: 14, label: "A redesign of a current website" },
  { id: 15, label: "Intranet System" },
  { id: 16, label: "PHP" },
];

const SPECIFIC_FEATURES_OPTIONS = [
  { id: 1, label: "Registration" },
  { id: 2, label: "Video Streaming" },
  { id: 3, label: "MySQL Database" },
  { id: 4, label: "Search Panel" },
  { id: 5, label: "Multicolumn Layout" },
  { id: 6, label: "Newsletter/Sign Up Forms" },
  { id: 7, label: "Upload/Download" },
  { id: 8, label: "Login Panel" },
  { id: 9, label: "Information/ request Forms" },
  { id: 10, label: "An online store/ shopping cart" },
  { id: 11, label: "Online payment gateway" },
  { id: 12, label: "Blog module" },
  { id: 13, label: "Image gallery" },
  { id: 14, label: "Purchase Management" },
  { id: 15, label: "Sales Management" },
  { id: 16, label: "Employee Management" },
];

const RESOURCE_OPTIONS: { id: ResourceKey; label: string }[] = [
  { id: "photo_video", label: "Photos & Videos" },
  { id: "Quotes_content", label: "Quotes/Content" },
  { id: "Description", label: "Product Description" },
  { id: "professional_logo", label: "Professional Logo" },
  { id: "graphic_designs", label: "Graphic Designs" },
  { id: "metatags/description", label: "Meta Tags/Description" },
  { id: "other_print_collateral", label: "Other Print Collateral" },
  { id: "translation_costs", label: "Translation Costs" },
];


type Props = {
  formData: projectRequirementForm;
  setFormData: React.Dispatch<React.SetStateAction<projectRequirementForm>>;
};

const ProjectDetails = ({ formData, setFormData }: Props) => {
    const updateField = <
    K extends keyof projectRequirementForm["project_details"]
  >(
    field: K,
    value: projectRequirementForm["project_details"][K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      project_details: {
        ...prev.project_details,
        [field]: value,
      },
    }));
  };

  const handleSocialMediaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const links = e.target.value.split("\n").filter((link) => link.trim());
    updateField("social_media", links);
  };

  const handleKeywordsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const keywords = e.target.value
      .split(",")
      .map((kw) => kw.trim())
      .filter((kw) => kw);
    updateField("web_search_keywords", keywords);
  };

  return (
    <div className="project-details-container">
      <fieldset className="project-details-fieldset">
        <legend className="project-details-legend">Project Details</legend>

        <div className="form-group">
          <label htmlFor="project-type">Project Type *</label>
          <select
            id="project-type"
            value={formData.project_details.project_type}
            onChange={(e) => updateField("project_type", e.target.value)}
            className="form-input"
          >
            <option value="">Select project type</option>
            <option value="website">Website</option>
            <option value="erp">ERP</option>
            <option value="application">Application</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="have-url">Do you have a URL in your mind? *</label>
          <input
          id="existing-url"
          placeholder="Enter URL (if any)"
          value={formData.project_details.existing_url}
          onChange={(e) => {
            const url = e.target.value;

            setFormData((prev) => ({
              ...prev,
              project_details: {
                ...prev.project_details,
                existing_url: url,
                have_url: url.trim().length > 0, // ✅ auto boolean
              },
            }));
          }}
          className="form-input"
        />
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={formData.project_details.want_domain}
              onChange={(e) => updateField("want_domain", e.target.checked)}
            />
            Want a domain?
          </label>
        </div>

        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={formData.project_details.have_hosting_service}
              onChange={(e) =>
                updateField("have_hosting_service", e.target.checked)
              }
            />
            Do you have a hosting service?
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="social-media">
            Social Media Links (one per line)
          </label>
          <textarea
            id="social-media"
            placeholder="https://facebook.com/yourpage&#10;https://instagram.com/yourpage"
            value={formData.project_details.social_media.join("\n")}
            onChange={handleSocialMediaChange}
            className="form-input textarea"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="deadline">Expected Deadline (Date & Time) *</label>
          <input
            id="deadline"
            type="date"
            value={formData.project_details.expected_deadline}
            onChange={(e) => updateField("expected_deadline", e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="keywords">
            Web Search Keywords (comma separated)
          </label>
          <textarea
            id="keywords"
            placeholder="digital marketing, web design, branding"
            value={formData.project_details.web_search_keywords.join(", ")}
            onChange={handleKeywordsChange}
            className="form-input textarea"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Project Description *</label>
          <textarea
            id="description"
            placeholder="What makes your product unique? Include product name and services."
            value={formData.project_details.project_description}
            onChange={(e) => updateField("project_description", e.target.value)}
            className="form-input textarea"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="what-include">
            What should the project include? *
          </label>
          <p className="feature-note" style={{ marginBottom: "8px" }}>
            Select all features you want in your project
          </p>
          <div className="features-list">
            {FEATURE_OPTIONS.map((feature) => (
              <label key={feature.id} className="feature-checkbox">
                <input
                  type="checkbox"
                  checked={formData.project_details.what_should_project_include.includes(
                    feature.label,
                  )}
                  onChange={(e) => {
                    const current =
                      formData.project_details.what_should_project_include;
                    const updated = e.target.checked
                      ? [...current, feature.label]
                      : current.filter((f) => f !== feature.label);
                    updateField("what_should_project_include", updated);
                  }}
                />
                <span className="feature-label">{feature.label}</span>
              </label>
            ))}
          </div>

          <div className="manual-features">
            <label htmlFor="custom-features" className="custom-features-label">
              Or add Additional Requirement:
            </label>
            <textarea
              id="custom-features"
              placeholder="Enter additional features (one per line)..."
              onChange={(e) => {
                const customFeatures = e.target.value
                  .split("\n")
                  .map((f) => f.trim())
                  .filter(
                    (f) =>
                      f &&
                      !formData.project_details.what_should_project_include.includes(
                        f,
                      ),
                  );

                if (e.target.value.trim()) {
                  const updated = [
                    ...formData.project_details.what_should_project_include.filter(
                      (f) => FEATURE_OPTIONS.some((opt) => opt.label === f),
                    ),
                    ...customFeatures,
                  ];
                  updateField("what_should_project_include", updated);
                }
              }}
              className="form-input textarea"
              rows={3}
            />
          </div>
        </div>

        <div className="form-group">
          <label>
            The following specific features should be included in your new
            project
          </label>
          <p className="feature-note" style={{ marginBottom: "8px" }}>
            Select specific features you need
          </p>
          <div className="features-list">
            {SPECIFIC_FEATURES_OPTIONS.map((feature) => (
              <label key={feature.id} className="feature-checkbox">
                <input
                  type="checkbox"
                  checked={formData.project_details.selected_project_features.includes(
                    feature.label,
                  )}
                  onChange={(e) => {
                    const current =
                      formData.project_details.selected_project_features;
                    const updated = e.target.checked
                      ? [...current, feature.label]
                      : current.filter((f) => f !== feature.label);
                    updateField("selected_project_features", updated);
                  }}
                />
                <span className="feature-label">{feature.label}</span>
              </label>
            ))}
          </div>

          <div className="manual-features">
            <label htmlFor="custom-specific-features" className="custom-features-label">
              Or add Additional Features:
            </label>
            <textarea
              id="custom-specific-features"
              placeholder="Enter additional specific features (one per line)..."
              onChange={(e) => {
                const customFeatures = e.target.value
                  .split("\n")
                  .map((f) => f.trim())
                  .filter(
                    (f) =>
                      f &&
                      !formData.project_details.selected_project_features.includes(
                        f,
                      ),
                  );

                if (e.target.value.trim()) {
                  const updated = [
                    ...formData.project_details.selected_project_features.filter(
                      (f) =>
                        SPECIFIC_FEATURES_OPTIONS.some((opt) => opt.label === f),
                    ),
                    ...customFeatures,
                  ];
                  updateField("selected_project_features", updated);
                }
              }}
              className="form-input textarea"
              rows={3}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="resources-label">
            Who will provide the following resources?
          </label>
          <div className="resources-grid">
            {RESOURCE_OPTIONS.map((resource) => {
              const existingResource = formData.project_details.resources.find(
                (r) => r.resource_key === resource.id,
              );

              return (
                <div key={resource.id} className="resource-item">
                  <div className="resource-header">
                    <input
                      type="checkbox"
                      id={`resource-${resource.id}`}
                      checked={!!existingResource}
                      onChange={(e) => {
                      if (e.target.checked) {
                        updateField("resources", [
                          ...formData.project_details.resources,
                          {
                            resource_key: resource.id,
                            provider: "you",
                          },
                        ]);
                      } else {
                        updateField(
                          "resources",
                          formData.project_details.resources.filter(
                            (r) => r.resource_key !== resource.id
                          )
                        );
                      }
                    }}
                    />
                    <label
                      htmlFor={`resource-${resource.id}`}
                      className="resource-name"
                    >
                      {resource.label}
                    </label>
                  </div>

                  {existingResource && (
                    <div className="provider-buttons">
                      <button
                        type="button"
                        className={`provider-btn ${
                          existingResource.provider === "you" ? "active" : ""
                        }`}
                        onClick={() => {
                          updateField(
                            "resources",
                            formData.project_details.resources.map((r) =>
                              r.resource_key === resource.id
                                ? { ...r, provider: "you" }
                                : r,
                            ),
                          );
                        }}
                      >
                        You
                      </button>
                      <button
                        type="button"
                        className={`provider-btn ${
                          existingResource.provider === "us" ? "active" : ""
                        }`}
                        onClick={() => {
                          updateField(
                            "resources",
                            formData.project_details.resources.map((r) =>
                              r.resource_key === resource.id
                                ? { ...r, provider: "us" }
                                : r,
                            ),
                          );
                        }}
                      >
                        Us
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default ProjectDetails;
