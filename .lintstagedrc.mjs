import micromatch from "micromatch";

export default function (allStagedFiles) {
  const shFiles = micromatch(allStagedFiles, ["**/src/**/*.sh"]);
  if (shFiles.length) {
    return `printf '%s\n' "Script files aren't allowed in src directory" >&2`;
  }
  const codeFiles = micromatch(allStagedFiles, [
    "*.(c|m)js",
    "**/*.(c|m)js",
    "frontend/src/app/*.js?(x)",
    "frontend/src/app/*.css",
    "frontend/src/components/*.js?(x)",
    "backend/**/*.ts?(x)",
  ]).map((file) => `"${file}"`);

  const config = [];

  if (codeFiles.length) {
    config.push(`eslint --fix ${codeFiles.join(" ")}`);
    config.push(`prettier --write ${codeFiles.join(" ")}`);
  }
  console.log("🚀 ~ lint-staged config:", config);

  // const docFiles = micromatch(allStagedFiles, ["**/*.md"]);

  return config;
}
