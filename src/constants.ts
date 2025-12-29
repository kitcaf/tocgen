/**
 * 默认排除规则
 * 这是一个“通用标准”，把系统文件和资源文件通过黑名单过滤
 */
export const DEFAULT_IGNORE = [
    '**/node_modules/**',
    '**/.git/**',
    '**/dist/**',
    '**/images/**',
    '**/assets/**'
];

/**
 * 定义锚点常量
 */
export const START_TAG = '';
export const END_TAG = '';