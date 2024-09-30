import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'), // Entry point for your library
            name: 'MyWebComponentLibrary',
            fileName: (format) => `my-web-component-lib.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            output: {
                globals: {},
            },
        },
        cssCodeSplit: true, // Enables CSS splitting per component
        assetsInlineLimit: 0, // Prevent inlining of assets (fonts, etc.)
    },
    assetsInclude: ['**/*.woff2'], // Handle fonts as assets
});
