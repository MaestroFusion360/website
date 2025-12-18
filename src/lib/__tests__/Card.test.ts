// src/lib/__tests__/Card.test.ts
import { render, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach } from 'vitest';
import type { Snippet } from 'svelte';
import { createRawSnippet } from 'svelte';
import Card from '../Card.svelte';

const textSnippet = (text: string) =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` })) as unknown as Snippet;

describe('Card', () => {
  afterEach(() => cleanup());

  it('renders default variant and children', () => {
    const { container } = render(Card, { props: { children: textSnippet('Body') } });
    const card = container.firstElementChild as HTMLElement;

    expect(card).toBeTruthy();
    expect(card.className).toContain('card');
    expect(container.textContent).toContain('Body');
  });

  it('merges external classes', () => {
    const { container } = render(Card, {
      props: { class: 'my-custom-class another-class', children: textSnippet('X') }
    });
    const card = container.firstElementChild as HTMLElement;

    expect(card.className).toContain('my-custom-class');
    expect(card.className).toContain('another-class');
    expect(card.className).toContain('card');
  });

  it('renders container variant', () => {
    const { container } = render(Card, {
      props: { variant: 'container', children: textSnippet('X') }
    });
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain('container');
  });

  it('renders project variant', () => {
    const { container } = render(Card, {
      props: { variant: 'project', children: textSnippet('X') }
    });
    const card = container.firstElementChild as HTMLElement;
    expect(card.className).toContain('project-card');
  });

  it('applies active class only for project variant', () => {
    const { container: c1 } = render(Card, {
      props: { variant: 'default', active: true, children: textSnippet('X') }
    });
    expect((c1.firstElementChild as HTMLElement).className).not.toContain('active');

    const { container: c2 } = render(Card, {
      props: { variant: 'project', active: true, children: textSnippet('X') }
    });
    expect((c2.firstElementChild as HTMLElement).className).toContain('active');
  });
});
