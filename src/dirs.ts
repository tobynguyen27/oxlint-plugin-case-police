import { fileURLToPath } from 'mlly';

export const distDir: string = fileURLToPath(new URL('../dist', import.meta.url));
