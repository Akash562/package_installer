import { execa } from "execa";

export async function installPackages(packages, pm) {
    if (!packages.length) {
        console.log("No packages selected.");
        return;
    }
    const args = pm === "yarn" ? ["add", ...packages] : ["install", ...packages];
    console.log(`\nInstalling using ${pm}...\n`);
    await execa(pm, args, { stdio: "inherit" });
}