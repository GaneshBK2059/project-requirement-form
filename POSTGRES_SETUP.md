# PostgreSQL Setup Guide

## Prerequisites

You need to install PostgreSQL on your system.

### Windows Installation

1. **Download PostgreSQL**
   - Visit: https://www.postgresql.org/download/windows/
   - Download the latest version (14 or higher recommended)

2. **Install PostgreSQL**
   - Run the installer
   - During installation, you'll be prompted to set:
     - **Username**: `postgres` (default)
     - **Password**: `postgres` (or set your own, but update appsettings.Development.json)
     - **Port**: `5432` (default)

3. **Verify Installation**
   - Open Command Prompt/PowerShell and run:
   ```bash
   psql -U postgres -h localhost
   ```
   - If successful, you'll see the PostgreSQL prompt

## Configuration

### Connection String (Already Configured)

Your connection string is set in `appsettings.Development.json`:
```json
"DefaultConnection": "Host=localhost;Port=5432;Database=ProjectRequirementDb;Username=postgres;Password=postgres"
```

**If you used a different password during PostgreSQL installation, update it here.**

## Database Setup Steps

### 1. Restore NuGet Packages

```bash
cd server/ProjectRequirementAPI
dotnet restore
```

### 2. Create Database Migration

```bash
dotnet ef migrations add InitialCreate
```

### 3. Apply Migration to Database

```bash
dotnet ef database update
```

## Verify Database Setup

### Using psql (PostgreSQL Command Line)

1. Connect to PostgreSQL:
   ```bash
   psql -U postgres -h localhost
   ```

2. List databases:
   ```sql
   \l
   ```
   You should see `ProjectRequirementDb`

3. Connect to your database:
   ```sql
   \c ProjectRequirementDb
   ```

4. List tables:
   ```sql
   \dt
   ```
   You should see `project_requirement_forms` table

5. Exit:
   ```sql
   \q
   ```

### Using PgAdmin (Optional GUI)

1. PgAdmin is installed with PostgreSQL
2. Access it at: http://localhost:5050 (if installed)
3. Add a server connection using the same credentials

## Running the Application

### Build Backend
```bash
dotnet build server/ProjectRequirementAPI/ProjectRequirementAPI.csproj
```

### Run Backend
```bash
dotnet run --project server/ProjectRequirementAPI
```

The API will be available at: `http://localhost:5000`

## Next Steps

1. ✅ Database is now configured
2. You can now start saving data to PostgreSQL
3. Update your Controllers to use the DbContext for database operations

## Troubleshooting

### Error: "Unable to connect to PostgreSQL"
- Make sure PostgreSQL service is running
- Check the connection string in `appsettings.Development.json`
- Verify username and password are correct

### Error: "Database already exists"
- The database may have been created already
- This is normal; just run `dotnet ef database update`

### Error: "Migrations not found"
- Run: `dotnet ef migrations list` to see existing migrations
- If none exist, run: `dotnet ef migrations add InitialCreate`

## Files Modified/Created

- ✅ `ProjectRequirementAPI.csproj` - Added EF Core and PostgreSQL packages
- ✅ `appsettings.Development.json` - Added connection string
- ✅ `Program.cs` - Added DbContext configuration
- ✅ `Data/ApplicationDbContext.cs` - Created database context
