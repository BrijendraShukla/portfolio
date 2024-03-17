import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	css: {
		modules: {
			localsConvention: "camelCase",
		},
	},
	build: {
		outDir: "build", // Specify the output directory as 'build'
	},
});
