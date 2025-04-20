import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import preserveDirectories from 'rollup-preserve-directives';
import terser from '@rollup/plugin-terser';
const pkg = JSON.parse(fs.readFileSync('./package.json'))

import fs from 'fs';
import path from 'path';

// Function to get all .js files from src/
function getAllInputFiles(dir = 'src') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return getAllInputFiles(fullPath);
    if (entry.isFile() && entry.name.endsWith('.mjs')) return fullPath;
    return [];
  });
  return files;
}

const inputFiles = getAllInputFiles();

// Prepare Plugins
const plugins = [
  resolve({ preferBuiltins: true }),
  commonjs(),
  preserveDirectories(),
];

export default [
  // CJS
  {
    external: [...Object.keys(pkg.dependencies || {})],
    input: inputFiles,
    output: {
      dir: 'dist',
      format: 'cjs',
      sourcemap: false,
      preserveModules: true,
      preserveModulesRoot: 'src',
      entryFileNames: '[name].cjs'
    },
    plugins,
  },

  // IIFE (browser)
  {
    input: 'src/index.mjs',
    output: {
      file: 'dist/TinyDice.min.js',
      format: 'iife',
      name: 'TinyDice',
      sourcemap: false,
      globals: {
        'lodash': '_',
      }
    },
    plugins: [
      resolve({
        browser: true,
        preferBuiltins: false
      }),
      commonjs(),
      terser({
        format: {
          comments: false,
        },
      }),
    ]
  }
];
