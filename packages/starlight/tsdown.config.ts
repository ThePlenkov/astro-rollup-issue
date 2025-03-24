// tsdown.config.ts
import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: ['./src'],
    bundleDts: true,
    sourcemap: true,
    dts: true
    // ...
})