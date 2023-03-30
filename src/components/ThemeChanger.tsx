import { useCallback, useEffect, useState } from 'react';
import { IconBaseProps } from 'react-icons';
import { MdOutlineDesktopWindows, MdSunny, MdDarkMode } from 'react-icons/md';

type StateValues = 'light' | 'dark' | 'system';

const themeStates: Array<{
  icon: React.ComponentType<IconBaseProps>;
  value: StateValues;
}> = [
  {
    icon: MdSunny,
    value: 'light',
  },
  {
    icon: MdDarkMode,
    value: 'dark',
  },
  {
    icon: MdOutlineDesktopWindows,
    value: 'system',
  },
];

const ThemeChanger = () => {
  const [theme, setTheme] = useState<StateValues>('system');

  useEffect(() => {
    const newTheme = (localStorage.getItem('theme') || theme) as StateValues;

    setTheme(newTheme);
    handlesWindowChange(newTheme);
  }, []);

  const handlesWindowChange = (changeTheme: StateValues) => {
    const element = document.documentElement;

    switch (changeTheme) {
      case 'dark': {
        element.classList.add('dark');
        break;
      }
      case 'light': {
        element.classList.remove('dark');
        break;
      }
      default: {
        element.classList.remove('dark');
      }
    }
  };

  const toggleTheme = useCallback(() => {
    setTheme((oldTheme) => {
      const newTheme = oldTheme !== 'dark' ? 'dark' : 'light';
      handlesWindowChange(newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, [theme]);

  const currentThemeIcon = themeStates.find(
    (themeState) => themeState.value === theme
  );

  return (
    <button
      onClick={() => toggleTheme()}
      className="bg-dark dark:bg-light p-1 m-2 rounded-md"
    >
      {currentThemeIcon ? (
        <currentThemeIcon.icon className="text-light dark:text-dark" />
      ) : null}
    </button>
  );
};

export default ThemeChanger;
