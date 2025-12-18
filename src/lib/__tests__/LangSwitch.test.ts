// src/lib/__tests__/LangSwitch.test.ts
import { render, fireEvent, cleanup } from '@testing-library/svelte';
import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import LangSwitch from '../LangSwitch.svelte';

describe('LangSwitch', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.lang = '';
  });

  afterEach(() => cleanup());

  it('hydrates from localStorage (default key) and sets document.lang', () => {
    localStorage.setItem('lang', 'ru');
    render(LangSwitch);

    expect(document.documentElement.lang).toBe('ru');
  });

  it('writes to localStorage when persist=true', () => {
    render(LangSwitch, { props: { persist: true, storageKey: 'lang_test' } });

    expect(localStorage.getItem('lang_test')).toBe('en');
    expect(document.documentElement.lang).toBe('en');
  });

  it('does not write to localStorage when persist=false', async () => {
    const { getByRole } = render(LangSwitch, {
      props: { persist: false, storageKey: 'lang_test' }
    });

    await fireEvent.click(getByRole('button', { name: 'English' }));
    expect(localStorage.getItem('lang_test')).toBeNull();
  });

  it('toggles aria-pressed and updates document.lang', async () => {
    const { container, getByRole } = render(LangSwitch, { props: { persist: false } });
    const group = getByRole('group', { name: 'Language' });

    const buttons = Array.from(container.querySelectorAll<HTMLButtonElement>('button'));
    expect(group).toBeTruthy();
    expect(buttons).toHaveLength(2);

    const [enBtn, ruBtn] = buttons;
    expect(enBtn.getAttribute('aria-pressed')).toBe('true');
    expect(ruBtn.getAttribute('aria-pressed')).toBe('false');

    await fireEvent.click(ruBtn);
    expect(document.documentElement.lang).toBe('ru');
    expect(enBtn.getAttribute('aria-pressed')).toBe('false');
    expect(ruBtn.getAttribute('aria-pressed')).toBe('true');
  });
});
