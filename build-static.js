#!/usr/bin/env node
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Build the static site using the static config
console.log('Building static site for GitHub Pages...');

try {
  // Run the build command
  execSync('npx vite build --config vite.config.static.ts', { stdio: 'inherit' });
  
  // Copy attached assets to dist folder
  const assetsSource = './attached_assets';
  const assetsDest = './dist/assets';
  
  if (fs.existsSync(assetsSource)) {
    if (!fs.existsSync(assetsDest)) {
      fs.mkdirSync(assetsDest, { recursive: true });
    }
    
    const files = fs.readdirSync(assetsSource);
    files.forEach(file => {
      fs.copyFileSync(path.join(assetsSource, file), path.join(assetsDest, file));
    });
    console.log('Copied attached assets to dist folder');
  }
  
  console.log('Static build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}