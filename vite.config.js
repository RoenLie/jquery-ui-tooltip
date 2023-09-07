import { resolve } from 'node:path';
import { defineConfig } from "vite";

export default defineConfig({
	root: './src',
	build: {
		outDir: '../',

		rollupOptions: {
			input: {
				'jquery-ui': './src/jquery-ui.js',
				css1: './src/jquery-ui.css',
				css2: './src/jquery-ui.structure.css'
			},

			output: {
				entryFileNames: '[name].min.js',
				chunkFileNames: '[name].min.js',
				assetFileNames: '[name].min.[ext]'
			},
		},
	}
});