// tsup.config.ts
import { defineConfig } from 'tsup'

export default defineConfig({
    // 一次性打包 commands 下的所有文件，以及 index.ts
    entry: [
        // 'src/index.ts',
        'src/commands/*.ts',
    ],

    // 2. 格式配置
    format: ['esm'],

    clean: true,

    dts: true,

    outDir: 'dist',

    splitting: true, //打开拆包 
    sourcemap: false,
})