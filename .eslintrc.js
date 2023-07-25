// vue3 rules: https://eslint.vuejs.org/rules/script-indent.html
// standard rules: https://standardjs.com/rules.html

// @ts-check
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig(
    {
        root: true,
        env: {
            browser: true,
            node: true,
            es2021: true,
            'vue/setup-compiler-macros': true
        },
        parser: 'vue-eslint-parser',
        parserOptions: {
            ecmaVersion: 'latest',
            parser: '@typescript-eslint/parser',
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true
            }
        },
        // vue 等价于 eslint-plugin-vue
        plugins: ['vue', '@typescript-eslint'],
        extends: ['standard', 'plugin:vue/vue3-recommended', '@nuxtjs/eslint-config-typescript'],
        // off: 关闭；warn：警告；error：报错
        rules: {
            '@typescript-eslint/no-unused-vars': 'error',
            // js,ts,tsx 文件的缩进规定
            indent: ['error', 4],
            // html 标签缩进
            'vue/html-indent': [
                'error',
                4,
                {
                    baseIndent: 1
                }
            ],
            // script 标签缩进
            'vue/script-indent': [
                'error',
                4,
                {
                    baseIndent: 1
                }
            ],
            'vue/multi-word-component-names': 'off',
            // 禁止在与v-for相同的元素上使用v-if 请用计算属性代替
            'vue/no-use-v-if-with-v-for': [
                'error',
                {
                    allowUsingIterationVar: true
                }
            ],
            // 禁止出现未使用过的组件
            'vue/no-unused-components': 'warn',
            // 检查每个v-for指令是否有效 【自定义组件使用v-for,则必须加 :key标注】
            'vue/valid-v-for': 'error',
            // 强制在计算属性中存在return语句
            'vue/return-in-computed-property': 'error',
            // 标签属性太多的问题
            'vue/max-attributes-per-line': 'off',
            // 标签换行的不明操作
            'vue/html-closing-bracket-newline': 'off',
            'vue/no-v-html': 'off',
            // 不使用回调限制
            'n/no-callback-literal': 'off',
            'vue/singleline-html-element-content-newline': 'off',
            'vue/html-self-closing': 'off',
            'func-call-spacing': 'off',
            'arrow-parens': 'off'
        },
        overrides: [
            {
                files: ['*.vue'],
                rules: {
                    indent: 'off',
                    'import/first': 'off'
                }
            }
        ]
    })
