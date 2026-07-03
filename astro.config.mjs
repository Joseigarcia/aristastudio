// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aristastudio.com.mx',
  output: 'static',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
