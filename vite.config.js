import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from '@unocss/svelte-scoped/vite';
import * as path from 'path';

export default defineConfig({
	plugins: [
		UnoCSS({
			onlyGlobal: true,
			injectReset: '@unocss/reset/tailwind.css',
		  }),
		sveltekit()
	],
    resolve: {
        alias: {
            $styles: path.resolve('./src/styles'),
            $components: path.resolve('./src/lib/components'),
            $screen: path.resolve('./src/lib/components/screen'),
            $section: path.resolve('./src/lib/components/section'),
            $shared: path.resolve('./src/lib/components/shared'),
            $config: path.resolve('./src/lib/config'),
            $content: path.resolve('./src/lib/content'),
            $helpers: path.resolve('./src/lib/helpers'),
            $layouts: path.resolve('./src/lib/layouts'),
            $stores: path.resolve('./src/lib/stores'),
            $utils: path.resolve('./src/lib/utils')
        }
    },
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
