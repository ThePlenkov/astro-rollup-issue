const { withNx } = require("@nx/rollup/with-nx");

const config = withNx(
  {
    main: "./src/index.ts",
    outputPath: "./dist",
    tsConfig: "./tsconfig.lib.json",
    compiler: "swc",
    format: ["esm"],
    external: "all",
    sourceMap: true,
    deleteOutputPath: true,
    skipTypeCheck: true,
    skipTypeField: true,
  },
  {
    // plugins: [
    //   typescript({
    //     tsconfig: './tsconfig.lib.json',
    //     useTsconfigDeclarationDir: true,
    //     clean: true,
    //     exclude: ['**/*.d.ts', 'node_modules'],
    //     cacheRoot: './.rpt2_cache', // Use a custom cache directory
    //     useCache: false, // Disable caching
    //   }),
    // ],
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
    // external: (id) =>
    //   ["@astrojs/starlight"].find((p) => {
    //     if (id.includes(p)) {
    //       console.log("External: ", id);
    //       return true;
    //     }
    //   }),
  }
);


if (config.plugins) {
  // delete rpt2 plugin
  config.plugins = config.plugins.filter((plugin) => {
    return plugin.name !== 'rpt2';
  });
}

module.exports = config;


// console.log("Rollup Config: ", JSON.stringify(module.exports, null, 2));
