// src/lib/__tests__/Button.test.ts
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import { describe, it, expect, vi, afterEach } from 'vitest';
import type { Snippet } from 'svelte';
import { createRawSnippet } from 'svelte';
import Button from '../Button.svelte';

const textSnippet = (text: string) =>
  createRawSnippet(() => ({ render: () => `<span>${text}</span>` })) as unknown as Snippet;

describe('Button', () => {
  afterEach(() => cleanup());

  it('renders a button element', () => {
    const { getByRole } = render(Button, { props: { children: textSnippet('X') } });
    expect(getByRole('button')).toBeTruthy();
  });

  it('renders children', () => {
    const { getByText } = render(Button, { props: { children: textSnippet('Hello') } });
    expect(getByText('Hello')).toBeTruthy();
  });

  it('calls onclick on click', async () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, {
      props: { onclick: handle, children: textSnippet('Click') }
    });

    await fireEvent.click(getByRole('button'));
    expect(handle).toHaveBeenCalledTimes(1);
  });

  it('applies disabled attribute', () => {
    const handle = vi.fn();
    const { getByRole } = render(Button, {
      props: { disabled: true, onclick: handle, children: textSnippet('Click') }
    });

    expect(getByRole('button').getAttribute('disabled')).not.toBeNull();
  });

  it('merges external class', () => {
    const { getByRole } = render(Button, {
      props: { class: 'my-class', children: textSnippet('X') }
    });
    expect(getByRole('button').className).toContain('my-class');
  });

  it('passes through native HTML attributes', () => {
    const { getByRole } = render(Button, {
      props: {
        type: 'submit',
        'data-test': 'abc',
        'aria-label': 'Send',
        children: textSnippet('X')
      }
    });

    const btn = getByRole('button');
    expect(btn.getAttribute('type')).toBe('submit');
    expect(btn.getAttribute('data-test')).toBe('abc');
    expect(btn.getAttribute('aria-label')).toBe('Send');
  });
});
