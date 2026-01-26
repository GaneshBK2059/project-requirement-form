# Project Requirement Form - Backend API

ASP.NET Core Web API backend for the Project Requirement Form application.

## Prerequisites

- .NET SDK 8.0 or higher
- Visual Studio Code or Visual Studio 2022

## Project Structure

```
ProjectRequirementAPI/
├── Controllers/           # API endpoints
│   └── ProjectRequirementsController.cs
├── Models/               # Data models
│   └── ProjectRequirementFormModel.cs
├── Services/             # Business logic
│   └── ProjectRequirementService.cs
├── Program.cs            # Application setup
├── appsettings.json      # Configuration
└── ProjectRequirementAPI.csproj
```

## Getting Started

### 1. Build the Project

```bash
cd server/ProjectRequirementAPI
dotnet build
```

### 2. Run the Development Server

```bash
dotnet run
```

The API will be available at:
- **HTTP**: http://localhost:5000
- **HTTPS**: https://localhost:5001
- **Swagger UI**: https://localhost:5001/swagger/index.html

### 3. Run in Development Mode

```bash
dotnet watch run
```

This enables hot reload - changes will be automatically applied.

## API Endpoints

### Get All Project Requirements
```
GET /api/projectrequirements
```

### Get Project Requirement by ID
```
GET /api/projectrequirements/{id}
```

### Create New Project Requirement
```
POST /api/projectrequirements
Content-Type: application/json

{
  "basicDetails": {
    "organizationName": "Acme Corp",
    "address": "123 Main St",
    "phoneNumber": "+1-555-0123",
    "email": "contact@example.com",
    "designation": "Project Manager",
    "contactPersonName": "John Doe",
    "mobileNo": "+1-555-0456"
  },
  "projectDetails": {
    "projectType": "website",
    "haveUrl": "https://example.com",
    "wantDomain": true,
    "haveHostingService": false,
    "socialMedia": ["https://facebook.com/example"],
    "expectedDeadline": "2026-06-30T10:00:00",
    "webSearchKeywords": ["digital marketing", "web design"],
    "projectDescription": "A modern e-commerce website",
    "whatShouldProjectInclude": ["Responsive Design", "Social Network Integration"],
    "selectedProjectFeatures": ["Registration", "Login Panel"],
    "resources": [
      {
        "resourceKey": "photo_video",
        "provider": "you"
      }
    ]
  },
  "designPreferences": {
    "haveOfficialColor": true,
    "haveOfficialFont": true,
    "haveOfficialTheme": false,
    "havePrintedMaterials": true
  },
  "productMaintenance": {
    "whoWillMaintain": "us",
    "frequencyOfUpdates": "Monthly"
  },
  "doYouNeedTrainingForStaff": true,
  "additionalDetails": "Additional notes here"
}
```

### Update Project Requirement
```
PUT /api/projectrequirements/{id}
Content-Type: application/json

{
  // Same structure as Create
}
```

### Delete Project Requirement
```
DELETE /api/projectrequirements/{id}
```

### Validate Form
```
POST /api/projectrequirements/validate
Content-Type: application/json

{
  // Form structure to validate
}
```

## CORS Configuration

The API is configured to accept requests from:
- http://localhost:5173 (React dev server - Vite)
- http://localhost:3000 (Alternative React port)

To add more origins, modify the CORS policy in `Program.cs`:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        builder =>
        {
            builder
                .WithOrigins("http://your-domain.com")
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials();
        });
});
```

## Configuration

### appsettings.json
Development-specific settings:
```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  }
}
```

### appsettings.Development.json
Development environment overrides.

## Database Integration (Future)

When ready to integrate a database:

1. Install Entity Framework Core:
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

2. Create DbContext class
3. Add connection string to appsettings.json
4. Register DbContext in Program.cs
5. Run migrations

## Logging

The API uses built-in .NET logging. Log levels can be configured in `appsettings.json`.

## Notes

- ✅ Models created matching React frontend types
- ✅ API Controller with CRUD operations
- ✅ Validation logic in place
- ✅ CORS configured for React frontend
- ⏳ Database integration (EF Core) - Ready for implementation
- ⏳ Authentication/Authorization - Ready for implementation
- ⏳ Unit tests - Ready for implementation

## Next Steps

1. Integrate Entity Framework Core with a database
2. Implement authentication (JWT tokens recommended)
3. Add comprehensive unit tests
4. Add request/response validation attributes
5. Implement error handling middleware
6. Add API versioning
7. Document additional business logic

## Troubleshooting

### Port Already in Use
If port 5000/5001 is already in use, specify a different port:
```bash
dotnet run --urls "http://localhost:5005;https://localhost:5006"
```

### CORS Errors
Ensure the React frontend URL is added to the CORS policy in `Program.cs`.

### Build Errors
Clean and rebuild:
```bash
dotnet clean
dotnet build
```

## Contact & Support

For issues or questions, please contact the development team.
