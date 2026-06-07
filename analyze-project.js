const fs = require('fs');
const path = require('path');

// Collect project structure and key files
const projectInfo = {
  structure: [],
  keyFiles: {},
  packageJson: null,
  viteConfig: null,
  heroWidget: null,
  dependencies: null
};

// Read package.json
try {
  projectInfo.packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  projectInfo.dependencies = {
    react: projectInfo.packageJson.dependencies?.react,
    'framer-motion': projectInfo.packageJson.dependencies?.motion || projectInfo.packageJson.dependencies?.['framer-motion'],
    vite: projectInfo.packageJson.devDependencies?.vite
  };
} catch(e) {}

// Read vite.config.ts
try {
  projectInfo.viteConfig = fs.readFileSync('./vite.config.ts', 'utf8');
} catch(e) {}

// Read HeroWidget if exists
try {
  const heroPath = './src/widgets/HeroWidget/HeroWidget.tsx';
  if (fs.existsSync(heroPath)) {
    projectInfo.heroWidget = fs.readFileSync(heroPath, 'utf8').substring(0, 5000);
  }
} catch(e) {}

// Get project structure
function getStructure(dir, depth = 0, maxDepth = 3) {
  if (depth > maxDepth) return;
  try {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
      if (item === 'node_modules' || item === '.git' || item === 'dist') return;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        projectInfo.structure.push('  '.repeat(depth) + '📁 ' + item);
        getStructure(fullPath, depth + 1, maxDepth);
      } else {
        projectInfo.structure.push('  '.repeat(depth) + '📄 ' + item);
      }
    });
  } catch(e) {}
}

getStructure('./src', 0, 2);

console.log(JSON.stringify(projectInfo, null, 2));
