import { useTheme } from '../hooks/useTheme';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-toggle__knob">
        {isDark ? <MoonIcon size={12} /> : <SunIcon size={12} />}
      </span>
    </button>
  );
}
