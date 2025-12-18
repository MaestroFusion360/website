// src/lib/__tests__/ThemeToggle.test.ts
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import ThemeToggle from '../ThemeToggle.svelte';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
    document.head.innerHTML = '<meta name="theme-color" content="#ffffff" />';
  });

  afterEach(() => cleanup());

  it('hydrates from localStorage and updates document class', () => {
    localStorage.setItem('theme', 'dark');
    render(ThemeToggle);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  it('toggles theme and updates meta theme-color', async () => {
    const { getByRole } = render(ThemeToggle);

    const btn = getByRole('button');
    expect(btn.getAttribute('aria-label')).toBe('Switch to dark theme');
    expect(localStorage.getItem('theme')).toBe('light');

    await fireEvent.click(btn);

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(btn.getAttribute('aria-label')).toBe('Switch to light theme');

    const meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    expect(meta?.getAttribute('content')).toBe('#0b1220');
  });
});
