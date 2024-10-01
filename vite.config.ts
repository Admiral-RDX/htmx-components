import { defineConfig } from 'vite';

export default defineConfig({
    root: '.', // Set the root if needed
    server: {
        open: true, // Open browser on startup
    },
    build: {
        outDir: 'build', // Output directory for production build if using Vite's build feature
    },
});
