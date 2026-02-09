import chalk from "chalk";
import { getUserChoices } from "../src/prompts.js";
import { installPackages } from "../src/installer.js";

// Skip non-interactive / CI
if (!process.stdout.isTTY || process.env.CI) {
    process.exit(0);
}

console.log(chalk.cyan.bold("\n🚀 RN Package Installer\n"));

(async () => {
    try {
        const { selectedPackages, packageManager } =
            await getUserChoices();
        if (!selectedPackages.length) {
            console.log("No packages selected.");
            return;
        }
        await installPackages(selectedPackages, packageManager);
        console.log(chalk.green("\n !!!!! Packages Installation complete!\n"));
    } catch (err) {
        console.error(chalk.red("Error:"), err.message);
    }
})();