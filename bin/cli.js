#!/usr/bin/env node

import chalk from "chalk";
import { getUserChoices } from "../src/prompts.js";
import { installPackages } from "../src/installer.js";

console.log(chalk.cyan.bold("\n🚀 RN Package Installer\n"));

(async () => {
    try {
        const { selectedPackages, packageManager } =
            await getUserChoices();

        if (!selectedPackages || selectedPackages.length === 0) {
            console.log("No packages selected. Exiting.");
            return;
        }

        await installPackages(selectedPackages, packageManager);

        console.log(chalk.green("\n✔ Packages installation complete!\n"));
    } catch (err) {
        console.error("❌ Error:", err?.message || err);
        process.exit(1);
    }
})();
