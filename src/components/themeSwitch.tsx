"use client";
import { PiSunDimFill } from 'react-icons/pi';
import { BiSolidMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

const ThemeSwitch: React.FC = () => {
    let savedTheme = 'dark';
    if (typeof window !== 'undefined') {
        savedTheme = localStorage.getItem('theme') ?? 'dark';
    }
    const { theme, setTheme } = useTheme(savedTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        if (savedTheme) {
            setTheme(savedTheme);
            console.log('Theme', theme);
        } else {
            setMounted(true);
        }
    }, [setTheme]);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', theme);
        }
    }, [theme, mounted]);

    return (
        <button
            className="flex items-center justify-center w-8 h-8 rounded-full p-1 cursor-pointer
                       bg-gray-300 hover:bg-yellow-300"
            onClick={toggleTheme}
        >
            {theme === 'light' ? (
                <PiSunDimFill size={16} className='text-black' />
            ) : (
                <BiSolidMoon size={16} className='text-black' />
            )}
        </button>
    );
};

export default ThemeSwitch;
