const util = require("util");
const exec = util.promisify(require("child_process").exec);
const { cpus } = require("os");
const { cyan, red } = require("chalk");

class System {
  static shutdown() {
    setTimeout(() => {
      exec("shutdown now");
    }, 3000);

    console.log(cyan("See you soon Master!"));
  }

  static info() {
    const cpuCores = cpus();
    const coreCount = cpuCores.length;
    const cpuModel = cpuCores[0].model;

    console.log(cyan(`I have a ${cpuModel} with ${coreCount} cores.`));
  }

  static async openGithub() {
    try {
      const url = "https://github.com";
      const command = `google-chrome ${url}`;
      await exec(command);
    } catch (error) {
      console.log(red(error));
    }
  }
}

module.exports = System;
