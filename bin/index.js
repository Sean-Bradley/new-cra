#! /usr/bin/env node
const path = require("path");
const fs = require("fs");
const os = require("os");
const execSync = require("child_process").execSync;

function usage() {
  console.log("\u001b[0mUsage:\n\n\u001b[32mnpx new-cra my-app\u001b[0m\n");
}

const args = process.argv.slice(2);
let usingTypeScript = false;

if (args.length > 0) {
  const root = path.resolve(args[0]);
  const appName = path.basename(root);

  console.log(`\nCreating a new React app in \x1b[32m${root}\x1b[0m`);

  if (args[1] === "-ts") {
    usingTypeScript = true;
  }

  if (!fs.existsSync(appName)) {
    fs.mkdirSync(appName);
  }

  let packageJson = "";

  if (usingTypeScript) {
    packageJson = {
      name: appName,
      version: "1.0.0",
      main: "src/index.jsx",
      devDependencies: {
        "@types/node": "^20.3.1",
        "@types/react": "^18.2.12",
        "@types/react-dom": "^18.2.5",
        react: "18.2.0",
        "react-dom": "18.2.0",
        "r3f-pack": "^2.2.3",
        typescript: "^5.1.3",
      },
      scripts: {
        start: "r3f-pack start",
        build: "r3f-pack build",
      },
    };
  } else {
    packageJson = {
      name: appName,
      version: "1.0.0",
      main: "src/index.jsx",
      devDependencies: {
        react: "18.2.0",
        "react-dom": "18.2.0",
        "r3f-pack": "^2.2.3",
      },
      scripts: {
        start: "r3f-pack start",
        build: "r3f-pack build",
      },
    };
  }

  fs.writeFileSync(
    path.join(root, "package.json"),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );

  console.log("\nInstalling packages. This might take a couple of minutes.");
  if (usingTypeScript) {
    console.log(
      "Installing \x1b[36mreact\u001b[0m, \x1b[36mreact-dom\u001b[0m, \x1b[36mr3f-pack\u001b[0m, \x1b[36mTypeScript\u001b[0m and \x1b[36mminimal template.\u001b[0m"
    );
  } else {
    console.log(
      "Installing \x1b[36mreact\u001b[0m, \x1b[36mreact-dom\u001b[0m, \x1b[36mr3f-pack\u001b[0m and \x1b[36mminimal template.\u001b[0m"
    );
  }

  console.log()
  
  execSync(`cd ${root} && npm install`, { stdio: "inherit" });

  console.log("\nCopying basic template files.");

  if (usingTypeScript) {
    fs.cpSync(path.join(__dirname, "../template-ts"), root, {
      recursive: true,
    });
    fs.readFile(root + "/public/index.html", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\{title\}/g, appName);

      fs.writeFile(root + "/public/index.html", result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
    fs.readFile(root + "/src/App.tsx", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\{title\}/g, appName);

      fs.writeFile(root + "/src/App.tsx", result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  } else {
    fs.cpSync(path.join(__dirname, "../template"), root, { recursive: true });
    fs.readFile(root + "/public/index.html", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\{title\}/g, appName);

      fs.writeFile(root + "/public/index.html", result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
    fs.readFile(root + "/src/App.jsx", "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/\{title\}/g, appName);

      fs.writeFile(root + "/src/App.jsx", result, "utf8", function (err) {
        if (err) return console.log(err);
      });
    });
  }

  console.log(
    `\nSuccess! Created \x1b[36m${appName}\u001b[0m in folder \x1b[36m${root}\u001b[0m`
  );
  console.log("\nInside that directory, you can run several commands:");
  console.log(
    "\n  \x1b[36mnpm start\n    \u001b[0mStarts the development server."
  );
  console.log(
    "\n  \x1b[36mnpm run build\n    \u001b[0mBundles the app into static files for production."
  );
  console.log("\nWe suggest that you begin by typing:\n");
  console.log(`  \x1b[36mcd \u001b[0m${appName}`);
  console.log("  \x1b[36mnpm start\x1b[0m");
  console.log("\nHappy hacking!\x1b[0m");
} else {
  usage();
}
