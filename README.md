# Project Requirement Form - Full Stack Application

Complete documentation for the Project Requirement Form application with React frontend and .NET backend.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Development Workflow](#development-workflow)

## 🎯 Project Overview

A comprehensive Project Requirement Form application that captures detailed information about project requirements through a multi-step form interface. The application consists of:

- **Frontend**: React 19 with TypeScript and Vite
- **Backend**: ASP.NET Core 8 Web API with CORS support
- **Database**: Ready for Entity Framework Core integration

## 🛠️ Technology Stack

### Frontend
- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite 7.3.1** - Build tool and dev server
- **CSS3** - Styling with responsive design
- **Node.js 18+** - Runtime

### Backend
- **.NET 8** - Framework
- **ASP.NET Core** - Web API framework
- **C# 12** - Language
- **Entity Framework Core** - ORM (ready for integration)
- **Swagger/OpenAPI** - API documentation

## 📁 Project Structure

```
ProjectRequirementForm/
├── client/
│   └── my-react-app/
│       ├── src/
│       │   ├── Components/
│       │   │   ├── BasicDetails.tsx
│       │   │   ├── ProjectDetails.tsx
│       │   │   ├── DesignPreferences.tsx
│       │   │   ├── AdditionalInfo.tsx
│       │   │   └── ProjectRequirementForm.tsx (Main Container)
│       │   ├── Types/
│       │   │   └── ProjectRequirementForm.ts
│       │   ├── services/
│       │   │   └── ProjectRequirementService.ts
│       │   ├── styles/
│       │   │   ├── BasicDetails.css
│       │   │   ├── ProjectDetails.css
│       │   │   ├── DesignPreferences.css
│       │   │   ├── AdditionalInfo.css
│       │   │   └── ProjectRequirementForm.css
│       │   ├── App.tsx
│       │   └── main.tsx
│       ├── package.json
│       ├── vite.config.ts
│       └── tsconfig.json
│
└── server/
    └── ProjectRequirementAPI/
        ├── Controllers/
        │   └── ProjectRequirementsController.cs
        ├── Models/
        │   └── ProjectRequirementFormModel.cs
        ├── Services/
        │   └── ProjectRequirementService.cs
        ├── Program.cs
        ├── appsettings.json
        └── ProjectRequirementAPI.csproj
```

## 🚀 Frontend Setup

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

```bash
cd client/my-react-app
npm install
```

### Available Scripts

```bash
# Start development server (runs on http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and check code quality
npm run lint
```

## 🚀 Backend Setup

### Prerequisites
- .NET SDK 8.0 or higher
- Visual Studio Code or Visual Studio 2022

### Installation

```bash
cd server/ProjectRequirementAPI
dotnet restore
```

### Available Commands

```bash
# Build the project
dotnet build

# Run development server (runs on http://localhost:5004)
dotnet run

# Run with hot reload
dotnet watch run

# Run in production
dotnet run --configuration Release
```

## ▶️ Running the Application

### Option 1: Run Both Servers (Recommended for Development)

**Terminal 1 - Frontend:**
```bash
cd client/my-react-app
npm run dev
```
Frontend will be available at: http://localhost:5173

**Terminal 2 - Backend:**
```bash
cd server/ProjectRequirementAPI
dotnet run
```
Backend will be available at: http://localhost:5004
Swagger UI: http://localhost:5004/swagger/index.html

### Option 2: Run Only Frontend (Without Backend)
```bash
cd client/my-react-app
npm run dev
```
The form will work locally but won't save data.

## 📚 API Documentation

### Base URL
```
http://localhost:5004/api
```

### Endpoints

#### 1. Get All Project Requirements
```
GET /projectrequirements
```

#### 2. Get Project Requirement by ID
```
GET /projectrequirements/{id}
```

#### 3. Create New Project Requirement
```
POST /projectrequirements
Content-Type: application/json

Request Body: ProjectRequirementForm object
Response: 201 Created with location header
```

#### 4. Update Project Requirement
```
PUT /projectrequirements/{id}
Content-Type: application/json

Request Body: ProjectRequirementForm object
Response: 200 OK
```

#### 5. Delete Project Requirement
```
DELETE /projectrequirements/{id}
Response: 204 No Content
```

#### 6. Validate Form Data
```
POST /projectrequirements/validate
Content-Type: application/json

Request Body: ProjectRequirementForm object
Response: 200 OK with validation results
```

### Example Request

```javascript
const form = {
  basicDetails: {
    organizationName: "Acme Corp",
    address: "123 Main St",
    phoneNumber: "+1-555-0123",
    email: "contact@example.com",
    designation: "Project Manager",
    contactPersonName: "John Doe",
    mobileNo: "+1-555-0456"
  },
  projectDetails: {
    projectType: "website",
    haveUrl: "https://example.com",
    wantDomain: true,
    haveHostingService: false,
    socialMedia: ["https://facebook.com/example"],
    expectedDeadline: "2026-06-30T10:00:00",
    webSearchKeywords: ["digital marketing"],
    projectDescription: "A modern website",
    whatShouldProjectInclude: ["Responsive Design"],
    selectedProjectFeatures: ["Registration"],
    resources: [{ resourceKey: "photo_video", provider: "you" }]
  },
  designPreferences: {
    haveOfficialColor: true,
    haveOfficialFont: true,
    haveOfficialTheme: false,
    havePrintedMaterials: true
  },
  productMaintenance: {
    whoWillMaintain: "us",
    frequencyOfUpdates: "Monthly"
  },
  doYouNeedTrainingForStaff: true,
  additionalDetails: "Additional notes"
};

await ProjectRequirementService.create(form);
```

## ✨ Features

### Frontend Features
- ✅ Multi-step form (4 steps)
- ✅ Real-time form validation
- ✅ Dynamic feature selection with checkboxes
- ✅ Resource provider toggle ("You" / "Us")
- ✅ Date and time picker for deadline
- ✅ Textarea for custom inputs
- ✅ Progress bar showing current step
- ✅ Debug panel showing form data
- ✅ Minimal grayscale design
- ✅ Responsive layout
- ✅ Type-safe with TypeScript
- ✅ Hot module replacement (HMR)

### Backend Features
- ✅ RESTful API with CRUD operations
- ✅ CORS enabled for React frontend
- ✅ Swagger/OpenAPI documentation
- ✅ Comprehensive logging
- ✅ Form validation
- ✅ Error handling
- ✅ Async/await for scalability
- ✅ Service layer pattern
- ✅ Ready for database integration

## 🔧 Development Workflow

### Adding a New Field to the Form

1. **Update TypeScript type** in `src/Types/ProjectRequirementForm.ts`
2. **Update C# model** in `Models/ProjectRequirementFormModel.cs`
3. **Update React component** to handle the new field
4. **Update backend controller** validation if needed
5. **Update API service** if needed

### Connecting to Database

1. Install EF Core packages:
```bash
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
```

2. Create DbContext class
3. Add connection string to `appsettings.json`
4. Create migrations:
```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Adding Authentication

1. Configure JWT tokens in `Program.cs`
2. Add `[Authorize]` attributes to controllers
3. Update frontend to include auth tokens in requests

## 🔒 CORS Configuration

The backend accepts requests from:
- http://localhost:5173 (React dev server)
- http://localhost:3000 (Alternative port)

To add more origins, modify `Program.cs`:

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

## 📝 Component Overview

### ProjectRequirementForm.tsx (Main Container)
- Manages overall form state
- Handles step navigation
- Displays progress bar
- Contains form initialization logic
- Provides debug section

### BasicDetails.tsx (Step 1)
- Organization information
- Contact person details
- Email and phone inputs
- 7 text input fields

### ProjectDetails.tsx (Step 2)
- Project type selection
- Domain and hosting checkboxes
- Social media links
- Expected deadline with date & time picker
- Web search keywords
- Project description
- Feature selection (16 predefined options + custom)
- Specific feature selection (16 predefined options + custom)
- Resource assignment with provider toggle

### DesignPreferences.tsx (Step 3)
- Brand asset availability checkboxes
- 4 boolean preferences

### AdditionalInfo.tsx (Step 4)
- Product maintenance setup
- Training requirements
- Additional notes

## 🐛 Troubleshooting

### Frontend Issues

**Port 5173 already in use:**
```bash
npm run dev -- --port 5174
```

**Module not found errors:**
```bash
npm install
npm run dev
```

### Backend Issues

**Port 5004 already in use:**
```bash
dotnet run --urls "http://localhost:5005"
```

**CORS errors:**
Verify backend is running and CORS policy includes frontend URL.

**Build fails:**
```bash
dotnet clean
dotnet build
```

## 📞 Support

For issues or questions, check:
1. Frontend README: `client/my-react-app/README.md`
2. Backend README: `server/README.md`
3. Swagger API docs: http://localhost:5004/swagger/index.html

## 📄 License

Project for CC Group Internship Program.

## 👥 Team

- Frontend Development: React/TypeScript
- Backend Development: ASP.NET Core
- Database: Ready for integration

## ✅ Checklist for Production

- [ ] Add database persistence (EF Core)
- [ ] Implement authentication/authorization
- [ ] Add comprehensive error handling
- [ ] Add request validation attributes
- [ ] Write unit tests
- [ ] Add API versioning
- [ ] Setup CI/CD pipeline
- [ ] Configure production environment
- [ ] Security review (CORS, input validation)
- [ ] Performance testing
- [ ] Documentation for deployment
