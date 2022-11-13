// @flow
import { type Element } from 'react'

import Button from 'src/components/Button'
import Logo from './Logo'
import styles from './styles.module.css'

type Props = { withHeadline: boolean }

const Header = (props: Props): Element<'header'> => (
  <header className={styles.header}>
    <Logo />
    {props.withHeadline && (
      <h2 className={styles.title}>为你的提交信息提供表情符号指南</h2>
    )}
    <h4 className={styles.title}>
      forked from{' '}
      <a
        href="https://github.com/carloscuesta/gitmoji"
        target="_blank"
        rel="noreferrer"
      >
        carloscuesta/gitmoji
      </a>
    </h4>
    <div className={styles.buttons}>
      <Button
        icon="star"
        link="https://github.com/Sanjeever/gitmoji"
        text="GitHub"
      />
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
  </header>
)

export default Header
