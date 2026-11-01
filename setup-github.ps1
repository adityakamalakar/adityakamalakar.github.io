# setup-github.ps1
# Automates pushing your architecture portfolio to GitHub

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Ar. Aditya N. Kamalakar Portfolio Deployment" -ForegroundColor Yellow
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Ensure git and gh are in current session path
$env:Path = "$env:Path;$env:LOCALAPPDATA\Programs\Git\cmd;C:\Program Files\GitHub CLI"

# Check if authenticated with GitHub
Write-Host "Checking GitHub authentication status..." -ForegroundColor White
$authStatus = gh auth status 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "You are not logged in to GitHub yet." -ForegroundColor Yellow
    Write-Host "Starting one-click browser login..." -ForegroundColor Green
    Write-Host "Press Enter and complete the authorization in your browser." -ForegroundColor White
    gh auth login --web -h github.com -p https
}

Write-Host ""
Write-Host "Creating and pushing your GitHub repository..." -ForegroundColor Cyan

# Prompt for repository name or default to architecture-portfolio
$repoName = Read-Host "Enter repository name (Press Enter for 'architecture-portfolio')"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "architecture-portfolio"
}

# Create repository on GitHub and push local code
gh repo create $repoName --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host " SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next Step to enable GitHub Pages:" -ForegroundColor Yellow
    Write-Host "1. Go to your repository Settings on GitHub." -ForegroundColor White
    Write-Host "2. Click 'Pages' on the left menu." -ForegroundColor White
    Write-Host "3. Under 'Branch', select 'main' and '/ (root)' and click Save." -ForegroundColor White
    Write-Host "4. Your site will be live at: https://<your-username>.github.io/$repoName/" -ForegroundColor Cyan
} else {
    Write-Host "If the remote already exists, trying standard git push..." -ForegroundColor Yellow
    git push -u origin main
}
