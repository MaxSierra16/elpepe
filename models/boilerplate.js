const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { red, cyan, green } = require("chalk");
const readlineSync = require("readline-sync");

class Boilerplate {
  static async vainilla(name) {
    const project = name || "client";
    const commands = [
      `mkdir ${project}`,
      `touch ${project}/index.html`,
      `mkdir ${project}/src`,
      `touch ${project}/src/style.css`,
      `touch ${project}/src/main.js`,
      `cd ${project} && npm init -y`,
      `cd ${project} && npm i parcel-bundler --save-dev`,
    ];

    try {
      console.log(cyan("creating project 🚀"));

      for (const cmd of commands) {
        await exec(cmd);
      }

      console.log(green("Done ✨"));
      process.exit(0);
    } catch (error) {
      console.log(red(error));
      process.exit(1);
    }
  }

  static async cloneRepo(name) {
    const projectName = name || "project";
    const repo = "https://github.com/MaxIntellisys/vanilla-js-boilerplate.git";
    try {
      console.log(cyan("started cloning 🚀"));
      await exec(`git clone ${repo} ${projectName}`);
      console.log(cyan("Installing dependencies..."));
      await exec(`cd ${projectName} && npm install`);
      console.log(green("Finished cloning ✨"));
    } catch (error) {
      console.log(red(error));
    }
  }

  static async featureBranch() {
    const branch = "master";
    try {
      console.log(cyan("creatiing feature branch 🚀"));
      await exec(`git checkout ${branch}`);
      await exec(`git pull origin ${branch}`);

      const ticketNum = readlineSync.question("What is the ticket number? ", {
        limit: (input) => input.trim().length > 0,
        limitMessage: "Please enter a ticket number",
      });

      await exec(`git checkout -b MTR-${ticketNum}`);
    } catch (error) {
      console.log(red(error));
    }
  }
}

module.exports = Boilerplate;
