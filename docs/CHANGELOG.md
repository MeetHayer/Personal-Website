# Changelog

## [2025-10-19] - GitHub Pages SPA Fallback Fix

### Added
- **SPA Fallback for GitHub Pages**: Fixed deep-link 404 errors by implementing Single Page Application fallback
- **Build Script Enhancement**: Updated `package.json` build script to automatically copy `dist/index.html` to `dist/404.html` after build
- **GitHub Actions Workflow**: Added automated deployment workflow with SPA fallback step
- **Documentation**: Added detailed steps for manual deployment with SPA fallback

### Technical Details
- **Problem**: GitHub Pages returns 404 for direct links to SPA routes (e.g., `/writing`, `/about`)
- **Solution**: Copy `dist/index.html` to `dist/404.html` so GitHub Pages serves the SPA for any 404 errors
- **Implementation**: 
  1. Updated build script: `"build": "tsc -b && vite build && cp dist/index.html dist/404.html"`
  2. Added GitHub Action step: `cp dist/index.html dist/404.html`
  3. Manual deployment: Run `npm run build` then `cp dist/index.html dist/404.html` before publishing

### Files Modified
- `package.json` - Updated build script
- `.github/workflows/deploy.yml` - Added GitHub Actions workflow
- `docs/CHANGELOG.md` - This changelog file

### Manual Deployment Steps
1. Run `npm run build`
2. Copy `dist/index.html` to `dist/404.html`: `cp dist/index.html dist/404.html`
3. Deploy the `dist` folder to GitHub Pages

### Automated Deployment
The GitHub Actions workflow automatically handles the SPA fallback during deployment.
