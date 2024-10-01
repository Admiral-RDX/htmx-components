import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
    input: 'src/index.ts',
    output: {
        file: 'build/bundle.mjs',
        format: 'esm',
        sourcemap: true,
    },
    plugins: [
        nodeResolve(),
        terser(),
        postcss({
            extract: 'build/styles.css',
            minimize: true,
        }),
    ],
};
