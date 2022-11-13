// @flow
import { type Node } from 'react'
import Link from 'next/link'

import CarbonAd from 'src/components/CarbonAd'
import Button from 'src/components/Button'
import SEO from 'src/components/SEO'

const About = (): Node => (
  <>
    <SEO pageTitle="About" pageUrl="/about" />
    <main>
      <CarbonAd />
      <section>
        <h1>关于</h1>

        <p>
          <strong>Gitmoji 是一份用于GitHub提交信息的表情符号指南</strong>。
          旨在成为一个标准化的参考表格 —— 在 GitHub 的提交信息中使用{' '}
          <a href="https://emoji.muan.co">emojis</a> 的指南。
        </p>

        <p>
          在提交信息中使用<strong>使用 emojis</strong>
          ，提供了一种简单的方法，只需看一下所使用的表情符号，就能识别提交的目的或意图。由于有很多不同的表情符号，我发现有必要创建一个指南，以帮助更容易使用表情符号。
        </p>

        <p>
          这个项目是开源的，这意味着每个人都可以参与，建议、讨论和添加新的表情符号。请看一下{' '}
          <Link href="#contributing-gitmoji">contributing section</Link>和{' '}
          <a href="https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md">
            guidelines for contributing
          </a>
          。
        </p>

        <div>
          <Button
            icon="twitter"
            link={
              'https://twitter.com/intent/tweet?text=gitmoji' +
              '%20%E2%80%93%20An%20%23emoji%20guide%20for%20your%20commit' +
              '%20messages%20by%20%40crloscuesta%20%F0%9F%98%8D%F0%9F%98%9C' +
              '&url=https://gitmoji.dev'
            }
            target="_blank"
            text="Tweet"
          />
        </div>
      </section>

      <section>
        <h1>
          使用 gitmoji 通过{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
        </h1>

        <p>
          从你的命令行使用 gitmoji 的一个简单解决方案是安装{' '}
          <a href="https://github.com/carloscuesta/gitmoji-cli">gitmoji-cli</a>
          。这是一个用于在提交信息中使用表情符号的 gitmoji 交互式客户端。
        </p>

        <pre>
          <code>$ npm i -g gitmoji-cli</code>
        </pre>
      </section>

      <section>
        <h1>范例</h1>

        <p>
          如果你需要一些想法来将 gitmoji
          整合到你的项目中，这里有一个实用的使用方法：
        </p>

        <ul>
          <li>
            <b>intention</b>: 一个 emoji.
          </li>
          <li>
            <b>scope</b>: 一个可选的字符串，它为变化的范围增加了背景信息。
          </li>
          <li>
            <b>message</b>: 对这一变化的简要解释。
          </li>
        </ul>

        <pre>
          <code>&lt;intention&gt; [scope?][:?] &lt;message&gt;</code>
        </pre>
      </section>

      <section>
        <h1 id="contributing-gitmoji">贡献给 gitmoji</h1>

        <p>
          Contributing to gitmoji is a piece of 🍰! This project is a static
          website built with <i>Next.js</i>. All the gitmojis displayed are
          rendered from a JSON file. Before submitting any pull request, please
          follow these steps:
        </p>

        <ol>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/issues/new">
              Create an issue
            </a>{' '}
            filling the template.
          </li>
          <li>
            After discussing the idea, feature or suggestion,{' '}
            <a href="https://github.com/carloscuesta/gitmoji/blob/master/.github/CONTRIBUTING.md">
              read the contribution docs.
            </a>
          </li>
          <li>
            <a href="https://github.com/carloscuesta/gitmoji/fork">
              Create a fork{' '}
            </a>
            of gitmoji.
          </li>
          <li>
            Create a new branch with the feature name. (Eg: add-emoji-deploy,
            fix-website-header)
          </li>
          <li>
            Make your changes and send a{' '}
            <a href="https://help.github.com/articles/creating-a-pull-request/">
              pull request{' '}
            </a>
            .
          </li>
        </ol>
      </section>
    </main>
  </>
)

export default About
