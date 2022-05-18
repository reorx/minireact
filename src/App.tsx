import '@picocss/pico/css/pico.min.css';  // keep

import { css } from '@emotion/react';
import { Ballon } from 'tabler-icons-react';

import config, { APP_ENV } from './config';

export function App() {
  return (
    <>
      <header className='container'>
        <nav>
          <ul>
            <li><a href="#" className="secondary">…</a></li>
          </ul>
          <ul>
            <li><Ballon /><strong>Minireact</strong></li>
          </ul>
          <ul>
            <li><a href="#" className="secondary">…</a></li>
          </ul>
        </nav>
      </header>

      <main className='container'>
        <article>
          <header>
            <h1 id="anchor-top">Hello World</h1>
            <p>This is minireact</p>
          </header>
          <h2>App Info</h2>
          <section>
            <p><code>APP_ENV: {APP_ENV}</code></p>
            <pre><code>{JSON.stringify(config, null, 2)}</code></pre>
          </section>

          <footer>
            <p>
              <a href="#anchor-top">Go top</a>
            </p>
          </footer>
        </article>
      </main>
      <footer className='container'
        css={css`
          text-align: center;
          border-top: 2px solid var(--muted-border-color);
          color: var(--muted-color);
          padding: var(--typography-spacing-vertical) 0;
        `}
      >
        <p>made by reorx</p>
      </footer>
    </>
  );
}
