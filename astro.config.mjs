import node from "@astrojs/node";
import react from "@astrojs/react";
import { defineConfig, memoryCache } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";

export default defineConfig({
	output: "server",
	adapter: node({
		mode: "standalone",
	}),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: sqlite({ url: "file:./data/sqlite/data.db" }),
			storage: local({
				directory: "./data/uploads",
				baseUrl: "/_emdash/api/media/file",
			}),
		}),
	],
	cache: {
		provider: memoryCache(),
	},
	devToolbar: { enabled: false },
	server: {
		host: true,
		watch: {
			usePolling: true,
			interval: 500,
		}
	},
});
