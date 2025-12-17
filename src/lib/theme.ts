export type Theme = 'light' | 'dark';

function isTheme(value: string | null): value is Theme {
	return value === 'light' || value === 'dark';
}

export function readStoredTheme(): Theme | null {
	if (typeof window === 'undefined') return null;
	const stored = localStorage.getItem('theme');
	return isTheme(stored) ? stored : null;
}

export function setStoredTheme(theme: Theme): void {
	if (typeof window === 'undefined') return;
	localStorage.setItem('theme', theme);
}

export function getPreferredTheme(): Theme {
	if (typeof window === 'undefined') return 'light';
	return readStoredTheme() ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

export function applyTheme(theme: Theme): void {
	if (typeof window === 'undefined') return;

	document.documentElement.setAttribute('data-theme', theme);

	const themeMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
	themeMeta?.setAttribute('content', theme === 'dark' ? '#0b1220' : '#ffffff');
}

