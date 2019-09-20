const part1SC = require('../part1');
const part2SC = require('../part2');

module.exports = {
    title: 'Linux 教程，学习笔记',
    description: 'linux 系统教程学习笔记',
    base: '/linux-tutorial/', // gh-page 中是增加了项目名
    dest: 'build/.vuepress/dist',  // build 时构建的文件放在那里？
    host: 'localhost', // dev 的域名
    port: 8080, // dev 的端口
    ga: 'UA-125573163-1', // 添加 ga 统计，需要使用你自己的 ga 标识
    // locales: {
    //     // 键名是该语言所属的子路径
    //     // 作为特例，默认语言可以使用 '/' 作为其路径。
    //     // '/': {
    //     //     lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    //     // }
    // },
    markdown: {
      lineNumbers: true
    },
    // theme: 'vue',
    themeConfig: {
        docsDir: 'docs',
        sidebar: 'auto',
        sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
        lastUpdated: '上次更新: ', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/zq99299/linux-tutorial',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',
        // 以下为可选的编辑链接选项
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        // 主题级别的配置
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        },
        nav: [
            {text: 'Home', link: '/'},
            {
              text: '多级目录示例',
              items: [
                  {text: 'part1', link: '/part1/'},
                  {text: 'part2', link: '/part2/'}
              ]
            },
        ],
        sidebar: {  // 侧边栏配置，需要展示的侧边栏需要在这里配置
           '/part1/': part1SC(),
           '/part2/': part2SC()
        }
    },
    plugins: [
        ['@vuepress/back-to-top', true],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "pwa:有新内容更新啦~",
                buttonText: "立即获取新内容"
            }
        }],
        ['@vuepress/medium-zoom', {
          selector: '.theme-default-content img'
        }],
        ['@vuepress/search', {
          searchMaxSuggestions: 10
        }]
    ]
}
