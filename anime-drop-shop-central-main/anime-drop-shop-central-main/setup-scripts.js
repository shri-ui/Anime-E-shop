
const fs = require('fs');
const path = require('path');

// Path to package.json
const packageJsonPath = path.join(__dirname, 'package.json');

try {
  // Read the existing package.json file
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  const packageJson = JSON.parse(packageJsonContent);

  // Add or update the scripts section
  packageJson.scripts = {
    ...packageJson.scripts,
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "preview": "vite preview"
  };

  // Write the updated package.json back to the file
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  
  console.log('✅ Successfully added npm scripts to package.json');
  console.log('You can now run:');
  console.log('- npm run dev       (for development)');
  console.log('- npm run build     (for production build)');
  console.log('- npm run build:dev (for development build)');
  console.log('- npm run preview   (to preview the build)');
} catch (error) {
  console.error('❌ Error updating package.json:', error.message);
  console.log('\nIf you cannot run the script, please manually add these scripts to your package.json:');
  console.log(`
"scripts": {
  "dev": "vite",
  "build": "vite build", 
  "build:dev": "vite build --mode development",
  "preview": "vite preview"
}`);
}
