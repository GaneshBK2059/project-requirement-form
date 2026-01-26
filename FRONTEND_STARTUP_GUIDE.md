# 🚀 Frontend Server Troubleshooting & Startup Guide

## ✅ Current Status
- **Frontend**: http://localhost:5173 ✅ **RUNNING**
- **Backend**: http://localhost:5004 ✅ **RUNNING**

---

## 🔧 How to Start Both Servers

### Terminal 1 - Backend (.NET)
```bash
cd server/ProjectRequirementAPI
dotnet run
```
✅ Should show: "Now listening on: http://localhost:5004"

### Terminal 2 - Frontend (React)
```bash
cd client/my-react-app
npm run dev
```
✅ Should show: "Local: http://localhost:5173/"

---

## 🌐 Accessing the Application

### Option 1: Direct URL
Visit in your browser: **http://localhost:5173**

### Option 2: Click the Link
If using VS Code Simple Browser, it will open automatically.

### Option 3: Network Access (on same machine/network)
See the "Network:" URL shown in the terminal:
```
➜ Network: http://192.168.x.x:5173
```

---

## ❌ If Frontend Won't Open

### Problem 1: Server Not Running
**Error**: "Cannot GET /" or "Connection refused"

**Solution**:
```bash
# Check if npm dev is running
# Terminal should show:
# ➜ Local: http://localhost:5173/

# If not, restart:
cd client/my-react-app
npm run dev
```

### Problem 2: Port Already in Use
**Error**: "Port 5173 is already in use"

**Solution**:
```bash
# Option A: Use a different port
npm run dev -- --port 5174

# Option B: Kill the process using port 5173
Get-Process -Id (Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue).OwningProcess -ErrorAction SilentlyContinue | Stop-Process -Force
```

### Problem 3: Browser Cache Issue
**Error**: Old version of page showing

**Solution**:
1. Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
2. Or clear browser cache
3. Or open in private/incognito mode

### Problem 4: Package Dependencies Missing
**Error**: Module not found errors

**Solution**:
```bash
cd client/my-react-app
rm -r node_modules
npm install
npm run dev
```

### Problem 5: Vite Server Crashes
**Error**: Server stops or shows errors

**Solution**:
```bash
# Check for TypeScript/build errors
npm run build

# If there are errors, fix them and restart
npm run dev
```

---

## 🧪 Test the Connection

### 1. Check Frontend is Responsive
```bash
# Terminal should show:
# ➜ Local: http://localhost:5173/
# ➜ Network: use --host to expose
```

### 2. Check Backend is Responsive
Visit: http://localhost:5004/swagger/index.html

Should show Swagger UI with API endpoints.

### 3. Test Form Submission
1. Fill out the form at http://localhost:5173
2. Click "Submit Form" on Step 4
3. You should see a success or error message

### 4. Check Network Traffic
1. Open browser DevTools: `F12`
2. Go to "Network" tab
3. Submit the form
4. Look for "projectrequirements" request
5. Check Response shows form data

---

## 📋 Startup Checklist

- [ ] Backend running: `dotnet run` in `server/ProjectRequirementAPI`
- [ ] Frontend running: `npm run dev` in `client/my-react-app`
- [ ] Backend accessible: http://localhost:5004/swagger
- [ ] Frontend accessible: http://localhost:5173
- [ ] Can fill and submit form
- [ ] Success message appears

---

## 💻 Terminal Commands Reference

### Frontend Only
```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint and check code
npm run lint

# Install dependencies
npm install
```

### Backend Only
```bash
# Run development server
dotnet run

# Run with hot reload
dotnet watch run

# Build only
dotnet build

# Build for release
dotnet build --configuration Release
```

### Both Servers (Two Terminals)
```
Terminal 1:
cd server/ProjectRequirementAPI && dotnet run

Terminal 2:
cd client/my-react-app && npm run dev
```

---

## 🔍 Debugging Checklist

| Issue | Check | Fix |
|-------|-------|-----|
| Frontend won't load | Is `npm run dev` running? | Restart it |
| API calls fail | Is backend running at :5004? | Start backend |
| CORS error | Check backend CORS config | Restart both servers |
| Form won't submit | Check browser console (F12) | See error message |
| Port conflict | Is another app using port? | Use different port |
| Dependencies missing | Check `node_modules/` exists | Run `npm install` |
| TypeScript errors | Check `npm run build` output | Fix errors shown |

---

## 🎯 Quick Start (Copy & Paste)

### Windows PowerShell (Two Terminals)

**Terminal 1:**
```powershell
cd "C:\Users\97798\OneDrive\Desktop\CC_Group_Intern\ProjectRequirementForm\server\ProjectRequirementAPI"
dotnet run
```

**Terminal 2:**
```powershell
cd "C:\Users\97798\OneDrive\Desktop\CC_Group_Intern\ProjectRequirementForm\client\my-react-app"
npm run dev
```

Then open: http://localhost:5173

---

## 📚 Documentation Files

- `README.md` - Complete project documentation
- `QUICK_REFERENCE.md` - Quick start guide
- `QUICKSTART.md` - 5-minute setup
- `BACKEND_SETUP_COMPLETE.md` - Backend details
- `FRONTEND_BACKEND_CONNECTED.md` - Connection guide
- `FRONTEND_STARTUP_GUIDE.md` - This file

---

## ✨ Tips & Tricks

### Auto-restart on Changes
- Frontend: Vite has built-in hot reload (automatic)
- Backend: Use `dotnet watch run` for auto-reload

### View Real-time Logs
- Frontend: Check browser console (F12)
- Backend: Watch terminal output for logs

### Test with Sample Data
Use Swagger UI to test API:
1. Go to http://localhost:5004/swagger
2. Expand POST endpoint
3. Click "Try it out"
4. Paste test JSON
5. Click "Execute"

### Performance Check
- Frontend: Browser DevTools → Performance tab
- Backend: Check request times in logs

---

## 🆘 Still Not Working?

### Step 1: Kill All Node Processes
```powershell
Stop-Process -Name node -Force
```

### Step 2: Clear npm Cache
```bash
npm cache clean --force
```

### Step 3: Reinstall Dependencies
```bash
cd client/my-react-app
rm -r node_modules
rm package-lock.json
npm install
```

### Step 4: Restart Everything
```bash
# Terminal 1
cd server/ProjectRequirementAPI && dotnet run

# Terminal 2
cd client/my-react-app && npm run dev
```

### Step 5: Check Ports
```powershell
# Check what's using ports
Get-NetTCPConnection -State Listen | Where-Object {$_.LocalPort -eq 5173 -or $_.LocalPort -eq 5004}
```

---

## 📞 Support

If you're still having issues:

1. **Check the logs** - Both browser console and terminal output
2. **Verify servers are running** - Look for listening messages
3. **Test endpoints separately** - Use Swagger to test API
4. **Clear cache** - Hard refresh or incognito mode
5. **Restart services** - Kill and restart both servers

---

**Frontend & Backend are ready to go!** 🚀

Visit http://localhost:5173 to use the application.
