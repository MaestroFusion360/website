// src/lib/__tests__/Badge.test.ts
import { render, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach } from 'vitest';
import Badge from '../Badge.svelte';

describe('Badge', () => {
  afterEach(() => cleanup());

  it('renders an img with defaults', () => {
    const { container } = render(Badge, {
      props: { src: '/x.svg', alt: 'X', title: 'X' }
    });

    const img = container.querySelector('img') as HTMLImageElement | null;
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('/x.svg');
    expect(img?.getAttribute('alt')).toBe('X');
    expect(img?.getAttribute('width')).toBe('40');
    expect(img?.getAttribute('height')).toBe('40');
    expect(img?.getAttribute('loading')).toBe('lazy');
  });

  it('merges wrapper and image classes', () => {
    const { container } = render(Badge, {
      props: { src: '/x.svg', alt: 'X', class: 'wrapper', imgClass: 'image' }
    });

    const wrapper = container.firstElementChild as HTMLElement;
    const img = container.querySelector('img') as HTMLImageElement;

    expect(wrapper.className).toContain('inline-flex');
    expect(wrapper.className).toContain('wrapper');
    expect(img.className).toContain('transition-transform');
    expect(img.className).toContain('image');
  });

  it('passes through native img attributes', () => {
    const { container } = render(Badge, {
      props: {
        src: '/x.svg',
        alt: 'X',
        decoding: 'async',
        referrerpolicy: 'no-referrer',
        'data-test': 'abc'
      }
    });

    const img = container.querySelector('img') as HTMLImageElement;
    expect(img.getAttribute('decoding')).toBe('async');
    expect(img.getAttribute('referrerpolicy')).toBe('no-referrer');
    expect(img.getAttribute('data-test')).toBe('abc');
  });
});
