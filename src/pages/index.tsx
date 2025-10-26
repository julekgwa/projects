import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function PackageCard({ title, description, features, link }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link className={styles.button} to={link}>
        Get Started with {title} →
      </Link>
    </div>
  );
}

export default function Home() {
  const packages = [
    {
      title: 'React Native Places Autocomplete',
      description: 'A provider-agnostic React Native autocomplete component for searching addresses and places. Supports multiple geocoding providers including OpenStreetMap, Google Places, Mapbox, and more.',
      features: [
        '🌍 Multiple providers support',
        '🔍 Built-in recent searches',
        '⚡️ Performance optimized',
        '🎨 Fully customizable',
      ],
      link: '/places-autocomplete',
    },
    {
      title: 'React Native App Onboard',
      description: 'A customizable, easy-to-use, and efficient library for creating compelling onboarding experiences in React Native applications.',
      features: [
        '🎨 Multiple onboarding styles',
        '💫 Smooth animations',
        '📱 Cross-platform support',
        '🎯 TypeScript ready',
      ],
      link: '/app-onboard',
    },
    {
      title: 'React Native Payment Card Icons',
      description: 'High-quality, customizable payment card brand icons as React Native SVG components, supporting multiple styles and variants.',
      features: [
        '💳 17+ payment providers',
        '🎨 Multiple icon styles',
        '📦 Zero dependencies',
        '♿️ Accessibility support',
      ],
      link: '/payment-card-icons',
    },
    {
      title: 'React Native Input Tag',
      description: 'A versatile and user-friendly component for entering and managing tags within React Native applications.',
      features: [
        '📝 Easy tag management',
        '🔍 Autocomplete support',
        '🎨 Custom rendering',
        '🎯 Form integration',
      ],
      link: '/input-tag',
    },
  ];

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>React Native Libraries</h1>
          <p>
            Welcome to our comprehensive documentation for React Native libraries.
            Each package is designed to solve specific challenges in React Native development.
          </p>
        </div>

        <div className={styles.packages}>
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} {...pkg} />
          ))}
        </div>

        <div className={styles.help}>
          <h2>Getting Help</h2>
          <ul>
            <li>Report issues on GitHub</li>
            <li>Join our community discussions</li>
            <li>Check out the examples in our documentation</li>
            <li>Try our interactive demos on Expo Snack</li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}
