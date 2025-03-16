/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // 必须的插件顺序
    'postcss-import': {},
    'tailwindcss/nesting': {}, // 启用 Tailwind 的嵌套支持
    'postcss-nesting': {},     // 标准嵌套语法支持
    'tailwindcss': {
      config: './tailwind.config.ts' // 显式指定配置文件路径
    },
    'postcss-preset-env': {
      features: {
        'nesting-rules': false // 禁用 preset-env 的嵌套（已由其他插件处理）
      },
      autoprefixer: {
        flexbox: 'no-2009' // 针对旧版 flexbox 的优化
      }
    },
    'autoprefixer': {} // 必须放在最后
  }
}

export default config