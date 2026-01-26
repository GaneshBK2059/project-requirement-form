import { useState } from "react";
import type { projectRequirementForm } from "../Types/ProjectRequirementForm";
import ProjectRequirementService from "../services/ProjectRequirementService";
import { validateByStep } from "../utils/validation";
import BasicDetailsSection from "./BasicDetails";
import ProjectDetails from "./ProjectDetails";
import DesignPreferences from "./DesignPreferences";
import AdditionalInfo from "./AdditionalInfo";
import "../styles/ProjectRequirementForm.css";

const ProjectRequirementForm = () => {
  const initialFormData: projectRequirementForm = {
    basic_details: {
      organization_name: '',
      address: '',
      phone_number: '',
      email: '',
      designation: '',
      mobile_no: '',
      contact_person_name: '',
    },
    project_details: {
      project_type: '',
      have_url: '',
      want_domain: false,
      have_hoisting_service: false,
      social_media: [],
      expected_deadline: '',
      web_search_keywords: [],
      project_description: '',
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
      who_will_maintain: 'you',
      frequency_of_updates: 'monthly',
    },
    do_you_need_training_for_staff: false,
    additional_details: '',
  };

  const [formData, setFormData] = useState<projectRequirementForm>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);
  const [submittedId, setSubmittedId] = useState<number | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);
    setErrors([]);
    setSuccess(false);

    try {
      // ✅ STEP 1: Frontend validation (instant, no API call)
      console.log("📋 Starting frontend validation for step", currentStep);
      const frontendValidation = validateByStep(formData, currentStep);
      
      if (!frontendValidation.isValid) {
        console.log("❌ Frontend validation failed:", frontendValidation.errors);
        setErrors(frontendValidation.errors);
        setError(`❌ Validation Failed - ${frontendValidation.errors.length} error(s) found`);
        setIsLoading(false);
        
        // Scroll to error section
        setTimeout(() => {
          const errorSection = document.querySelector('.validation-errors');
          if (errorSection) {
            errorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
        return;
      }

      // ✅ STEP 2: Frontend passed - directly call create API
      console.log("✅ Frontend validation passed! Submitting form to backend...");
      const id = await ProjectRequirementService.create(formData);
      setSubmittedId(id);
      setSuccess(true);
      setErrors([]);
      
      // Show success message
      alert(`✅ Form submitted successfully! ID: ${id}`);
      
      // Reset form after successful submission
      setTimeout(() => {
        handleReset();
        setSuccess(false);
        setSubmittedId(null);
      }, 2000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred while submitting the form';
      console.error("❌ Submission error:", errorMessage);
      setError(`❌ Submission Error: ${errorMessage}`);
      setErrors([errorMessage]);
      alert(`❌ Error: ${errorMessage}`);
      console.error('Submission error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setCurrentStep(1);
    setError(null);
    setErrors([]);
    setSuccess(false);
    setSubmittedId(null);
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-container">
        <header className="form-header">
          <h1>Project Requirement Form</h1>
          <p>Step {currentStep} of 4 - Complete all sections to submit</p>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </header>

        {/* Error Message with Details */}
        {error && errors.length > 0 && (
          <div className="validation-errors alert alert-error">
            <div className="error-header">
              <strong>❌ Validation Failed</strong>
              <span className="error-count">({errors.length} error{errors.length !== 1 ? 's' : ''})</span>
              <button 
                className="alert-close" 
                onClick={() => {
                  setError(null);
                  setErrors([]);
                }}
                aria-label="Close error message"
              >
                ×
              </button>
            </div>
            <div className="error-list">
              <ul>
                {errors.map((err, index) => (
                  <li key={index} className="error-item">
                    <span className="error-icon">⚠️</span>
                    <span className="error-text">{err}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="error-footer">
              Please fix the errors above and try again
            </div>
          </div>
        )}

        {/* General Error Message (non-validation) */}
        {error && errors.length === 0 && (
          <div className="alert alert-error">
            <strong>❌ Error:</strong> {error}
            <button 
              className="alert-close" 
              onClick={() => setError(null)}
              aria-label="Close error message"
            >
              ×
            </button>
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="alert alert-success">
            <strong>✅ Success!</strong> Form submitted successfully! (ID: {submittedId})
          </div>
        )}

        <main className="form-content">
          {currentStep === 1 && (
            <BasicDetailsSection formData={formData} setFormData={setFormData} />
          )}

          {currentStep === 2 && (
            <ProjectDetails formData={formData} setFormData={setFormData} />
          )}

          {currentStep === 3 && (
            <DesignPreferences formData={formData} setFormData={setFormData} />
          )}

          {currentStep === 4 && (
            <AdditionalInfo formData={formData} setFormData={setFormData} />
          )}
        </main>

        <div className="form-navigation">
          <button 
            className="btn btn-secondary" 
            onClick={handlePrevStep}
            disabled={currentStep === 1}
          >
            ← Previous
          </button>

          <div className="step-indicators">
            {[1, 2, 3, 4].map((step) => (
              <button
                key={step}
                className={`step-indicator ${currentStep === step ? 'active' : ''}`}
                onClick={() => setCurrentStep(step)}
              >
                {step}
              </button>
            ))}
          </div>

          <button 
            className="btn btn-secondary" 
            onClick={handleNextStep}
            disabled={currentStep === 4}
          >
            Next →
          </button>
        </div>

        <div className="form-actions">
          {currentStep === 4 && (
            <button 
              className={`btn btn-submit ${isLoading ? 'loading' : ''}`}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? '⏳ Submitting...' : '✅ Submit Form'}
            </button>
          )}
          <button 
            className="btn btn-reset" 
            onClick={handleReset}
            disabled={isLoading}
          >
            Reset All
          </button>
        </div>

        <section className="debug-section">
          <h3>📋 Form Data Preview</h3>
          <pre className="debug-output">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </section>
      </div>
    </div>
  );
};

export default ProjectRequirementForm;

