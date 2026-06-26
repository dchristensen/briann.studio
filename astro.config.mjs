import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2, kvCache } from "@emdash-cms/cloudflare";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto" }),
			storage: r2({ binding: "MEDIA" }),
			objectCache: kvCache({ binding: "CACHE", keyPrefix: "em" }),
		}),
	],
	devToolbar: { enabled: false },
});
