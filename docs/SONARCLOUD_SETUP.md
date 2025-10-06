# SonarQube Cloud Setup Guide

This document describes how to set up SonarQube Cloud for code quality analysis.

## Prerequisites

1. A GitHub account with admin access to the repository
2. A SonarCloud account (sign up at https://sonarcloud.io)

## Setup Steps

### 1. Create SonarCloud Account

1. Go to https://sonarcloud.io
2. Click "Log in" and select "With GitHub"
3. Authorize SonarCloud to access your GitHub account

### 2. Import Your Repository

1. In SonarCloud, click the "+" button in the top right
2. Select "Analyze new project"
3. Choose your organization (or create a new one)
4. Select the repository `resume-as-code`
5. Click "Set Up"

### 3. Configure Project Settings

1. After importing, you'll be taken to the project settings
2. Note your **Project Key** (should be `heckerdj_resume-as-code`)
3. Note your **Organization Key** (should be `heckerdj`)

These values are already configured in `sonar-project.properties`, but verify they match.

### 4. Set Up GitHub Secret

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click "New repository secret"
4. Name: `SONAR_TOKEN`
5. Value: Generate this token from SonarCloud:
   - In SonarCloud, go to **My Account** → **Security**
   - Generate a new token
   - Give it a descriptive name like "GitHub Actions"
   - Copy the token and paste it as the secret value in GitHub
6. Click "Add secret"

### 5. Verify Configuration

The workflow will automatically run on:
- Every push to the `main` branch
- Every pull request

You can manually trigger it or wait for the next push/PR to verify it's working.

### 6. View Results

1. Go to https://sonarcloud.io
2. Select your project
3. View code quality metrics, bugs, vulnerabilities, and code smells

## Configuration Files

- `.github/workflows/sonarcloud.yml` - GitHub Actions workflow
- `sonar-project.properties` - SonarCloud project configuration

## Coverage Reports

The workflow automatically runs tests with coverage and uploads the results to SonarCloud:

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory and uploaded to SonarCloud automatically.

## Troubleshooting

### "Project key not found" error
- Verify the project key in `sonar-project.properties` matches the one in SonarCloud
- Check that the `SONAR_TOKEN` secret is set correctly in GitHub

### Coverage not showing
- Ensure tests are passing
- Check that `coverage/lcov.info` is generated after running tests
- Verify the path in `sonar-project.properties` matches the actual coverage report location

### Authentication errors
- Regenerate the SonarCloud token
- Update the `SONAR_TOKEN` secret in GitHub repository settings

## Additional Resources

- [SonarCloud Documentation](https://docs.sonarcloud.io/)
- [GitHub Actions Integration](https://docs.sonarcloud.io/advanced-setup/ci-based-analysis/github-actions/)
- [JavaScript/TypeScript Analysis](https://docs.sonarcloud.io/advanced-setup/languages/javascript/)
