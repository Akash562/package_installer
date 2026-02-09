import inquirer from "inquirer";
import { PACKAGES } from "./packages.js";
import { detectPackageManagers } from "./detectPm.js";

export async function getUserChoices() {
    // multi-select packages
    const { selectedPackages } = await inquirer.prompt({
        type: "checkbox",
        name: "selectedPackages",
        message: "Select packages to install:",
        choices: PACKAGES.map(p => ({
            name: p,
            value: p
        }))
    });

    const { hasNpm, hasYarn } = detectPackageManagers();
    let packageManager = "npm";

    if (hasNpm && hasYarn) {
        const res = await inquirer.prompt({
            type: "list",
            name: "packageManager",
            message: "Both npm and yarn detected. Choose one:",
            choices: ["npm", "yarn"]
        });
        packageManager = res.packageManager;
    } else if (hasYarn) {
        packageManager = "yarn";
    }

    return { selectedPackages, packageManager };
}
