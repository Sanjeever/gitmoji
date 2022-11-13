// @flow
import { type Element } from 'react'
import Link from 'next/link'

import Icon from 'src/components/Icon'
import styles from './styles.module.css'

const Footer = (): Element<'footer'> => (
  <footer className={styles.footer}>
    <div className="wrap">
      <div className="row middle-xs">
        <div className={`col-sm-6 ${styles.madeWithLove}`}>
          <h3>
            由 <a href="https://carloscuesta.me">Carlos Cuesta</a> 用{' '}
            <Icon name="heart" /> 打造
          </h3>
        </div>
        <div className={`col-sm-6 ${styles.footerNav}`}>
          <nav>
            <Link href="/about">关于</Link>
            <Link href="/contributors">贡献者们</Link>
            <a href="https://github.com/carloscuesta/gitmoji">GitHub</a>
          </nav>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
