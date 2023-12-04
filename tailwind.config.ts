import { shadcnPreset } from './src/lib/shadcn/preset';
import type { Config } from 'tailwindcss';

const config = {
    darkMode: ['class'],
    content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
    presets: [shadcnPreset],
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
