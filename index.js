#! /usr/bin/env node
/* *
Author: SIDHARTHA MAZUMDER
Description: A Simple Script To Create a HTML Boilerplate & Vanilla JS Folder Structures With Tailwindcss & Fontawesome
 * */
(async function () {
  const path = require("path");
  const fs = require("fs").promises;
  // Fancy Colors
   const green = "\x1b[32m"
   const red = "\x1b[35m"
   const reset = "\x1b[0m"
  // Get User Given Folder Name 
  let foldername = process.argv[2];
  // HTML Boiler Template
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="js/fontawesome.js"></script>
  <script src="js/tailwindcss.js"></script>
  <script src="./js/main.js" defer></script>
</head>
<body>
  <!-- Content Goes Here -->
</body>
</html>
`;
  // Script File Directory
  const script_dir = __filename.replace("index.js", "");

  // Assign a Name Empty
  if (foldername == undefined)
    foldername = `${Math.random().toString(36).slice(2, 50)}_vtf`;

  try {
    // Save Folder Name Before Adding a Path
    const name = foldername.trim();
    // Trim Emtry Spaces & Add Current Directory
    foldername = process.cwd() + "/" + foldername.trim();
    // Create Base Project Folder
    await fs.mkdir(foldername);
    // Create index.html File
    await fs.writeFile(foldername + "/index.html", html);
    // Create JS Folder in Base Folder
    await fs.mkdir(foldername + "/js");
    // Create Asset Folder in Base Folder
    await fs.mkdir(foldername + "/assets");
    // Copy Fontawesome and Tailwindcss File
    await fs.copyFile(
      script_dir + "resources/tailwindcss.js",
      foldername + "/js/tailwindcss.js"
    );
    await fs.copyFile(
      script_dir + "resources/fontawesome.js",
      foldername + "/js/fontawesome.js"
    );
    // Create main.js File
    await fs.writeFile(foldername + "/js/main.js", "");
    // Show Success Log
    console.log(green,`Created ${name} Successfully!!`,reset);
  } catch (e) {
    console.log(red,`Unable To Generate!!`,reset, { error: e });
  }
})();
