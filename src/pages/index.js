import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import picOfCarrie from '/img/porch-300px.jpeg';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    // <header className={clsx('hero hero--primary', styles.heroBanner)}>
    <header >
      {/* <div className="container"> */}
      <div>
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div> */}
        <div className="flex flex-col tablet:flex-row p-8 tablet:px-32 py-8 gap-8">
          <div className="tablet:w-1/2 flex flex-col justify-center">
            <p className="mb-2 tablet:mb-8 text-3xl tablet:text-5xl font-black">Hi, I'm Carrie.</p>
            <p className="tablet:w-2/3">I’m an organized self-starter who knows how to do research. I'll ask informed questions, and I'll finish your work on time.</p>
          </div>
          <div>
            <img className="w-96 shadow-lg shadow-slate-400" src={picOfCarrie} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
