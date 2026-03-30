// Approve build scripts for packages that need them on Railway
// This fixes the "Ignored build scripts: @tailwindcss/oxide, esbuild" warning
module.exports = {
  hooks: {
    readPackage(pkg) {
      return pkg;
    },
  },
};
