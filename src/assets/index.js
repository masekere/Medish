const fs = require('fs');
const path = require('path');

// Function to recursively find all image files in a directory
function getAllImages(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  const imagePaths = [];

  files.forEach(file => {
    const filePath = path.join(dir, file.name);

    if (file.isDirectory()) {
      imagePaths.push(...getAllImages(filePath));
    } else if (file.isFile() && isImageFile(file.name)) {
      imagePaths.push(filePath);
    }
  });

  return imagePaths;
}

// Helper function to check if a file is an image
function isImageFile(filename) {
  const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg'];
  return imageExtensions.includes(path.extname(filename).toLowerCase());
}

// Main function to generate image map
function generateImageMap(baseDir) {
  const images = getAllImages(baseDir);
  const imageMap = {};

  images.forEach(image => {
    const relativePath = path.relative(baseDir, image);
    imageMap[relativePath] = ""; // Set value to an empty string
  });

  return imageMap;
}

// Specify the directory containing your images
const imagesDir = __dirname; // Change this to the desired folder if needed
const imageMap = generateImageMap(imagesDir);

// Write the imageMap to a JSON file
const outputFilePath = path.join(imagesDir, 'imageMap.json');
fs.writeFileSync(outputFilePath, JSON.stringify(imageMap, null, 2), 'utf-8');

console.log(`Image map saved to ${outputFilePath}`);
