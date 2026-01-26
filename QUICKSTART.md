# Quick Start Guide

Get the Project Requirement Form application running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Start the Backend (Terminal 1)

```bash
cd server/ProjectRequirementAPI
dotnet run
```

✅ Backend ready at: http://localhost:5004

### Step 2: Start the Frontend (Terminal 2)

```bash
cd client/my-react-app
npm install  # Only needed first time
npm run dev
```

✅ Frontend ready at: http://localhost:5173

### Step 3: Open in Browser

Click [here](http://localhost:5173) or visit: **http://localhost:5173**

That's it! 🎉 The form is now running locally.

---

## 📖 Form Walkthrough

The form has 4 steps:

### Step 1: Basic Details
- Organization name
- Address
- Phone & Email
- Designation & Contact person

### Step 2: Project Details
- Project type (Website/ERP/Application)
- Domain & hosting preferences
- Social media links
- Expected deadline (with date & time)
- Project description
- Features needed (16 options + custom)
- Specific features (16 options + custom)
- Resources assignment

### Step 3: Design Preferences
- Official colors/fonts/themes
- Printed materials

### Step 4: Additional Info
- Maintenance planning
- Training requirements
- Additional notes

---

## 🔌 Testing the API

### Using Swagger UI
Visit: http://localhost:5004/swagger/index.html

### Using curl

**Create a new requirement:**
```bash
curl -X POST http://localhost:5004/api/projectrequirements \
  -H "Content-Type: application/json" \
  -d '{
    "basicDetails": {
      "organizationName": "Test Company",
      "email": "test@example.com"
    }
  }'
```

**Get all requirements:**
```bash
curl http://localhost:5004/api/projectrequirements
```

**Validate a form:**
```bash
curl -X POST http://localhost:5004/api/projectrequirements/validate \
  -H "Content-Type: application/json" \
  -d '{
    "basicDetails": {
      "organizationName": "Test Company"
    }
  }'
```

---

## 🛑 Common Issues

| Issue | Solution |
|-------|----------|
| Port 5173 in use | `npm run dev -- --port 5174` |
| Port 5004 in use | `dotnet run --urls "http://localhost:5005"` |
| CORS error | Ensure backend is running |
| Module not found | Run `npm install` in client folder |
| Build error | Run `dotnet clean && dotnet build` |
| npm command not found | Install Node.js from nodejs.org |
| dotnet command not found | Install .NET SDK from dotnet.microsoft.com |

---

## 📱 Test the Form

1. Navigate to http://localhost:5173
2. Fill in Step 1 (Basic Details)
3. Click "Next"
4. Fill in Step 2 (Project Details)
   - Select features
   - Set deadline
   - Pick resources
5. Click "Next"
6. Select design preferences in Step 3
7. Click "Next"
8. Fill maintenance & training in Step 4
9. Click "Submit"
10. Check browser console for form data

The form data will be logged to the browser console and is ready to be sent to the backend API.

---

## 🚀 Next Steps

### Connect Form to Backend
Update `ProjectRequirementForm.tsx` to call:
```typescript
import ProjectRequirementService from '../services/ProjectRequirementService';

const handleSubmit = async () => {
  try {
    const id = await ProjectRequirementService.create(formData);
    alert(`Form submitted successfully! ID: ${id}`);
  } catch (error) {
    alert(`Error: ${error}`);
  }
};
```

### Add Database
1. Create `DbContext` in backend
2. Configure connection string
3. Run migrations
4. Update service to use database

### Add Authentication
1. Setup JWT tokens
2. Add Login endpoint
3. Protect endpoints with `[Authorize]`

---

## 📚 Documentation

- [Full README](README.md)
- [Backend API Docs](server/README.md)
- [Swagger API Explorer](http://localhost:5004/swagger/index.html)

---

## 💡 Tips

- **Live Reload**: Both frontend and backend support hot reload
- **Debug Panel**: Scroll down on the form to see live form data
- **Swagger UI**: Great for testing API endpoints
- **Browser DevTools**: Use Network tab to see API calls

---

## ✨ Features Ready to Use

✅ Multi-step form
✅ Real-time validation
✅ Dynamic features selection
✅ API endpoints ready
✅ TypeScript type safety
✅ CORS configured
✅ Swagger documentation
✅ Service layer for easy integration

---

**Questions?** Check the README.md file for detailed documentation.

Enjoy! 🎉
