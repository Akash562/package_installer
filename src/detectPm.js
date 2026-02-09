import { execaSync } from "execa";

export function detectPackageManagers() {
    let hasNpm = false;
    let hasYarn = false;

    try {
        execaSync("npm", ["-v"]);
        hasNpm = true;
    } catch { }

    try {
        execaSync("yarn", ["-v"]);
        hasYarn = true;
    } catch { }

    return { hasNpm, hasYarn };
}
