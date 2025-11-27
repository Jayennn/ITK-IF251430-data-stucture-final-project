import type { ComponentType } from 'react';
import Hello from '../components/Naruto';

export const EASTER_EGGS_COMPONENTS: Record<string, ComponentType> = {
  naruto: Hello,
};

export const EASTER_EGGS_ACTIONS: Record<string, () => void> = {
  blur: () => {
    document.body.style.filter = 'blur(5px)';
    setTimeout(() => {
      document.body.style.filter = 'blur(0px)';
    }, 2000);
  },
};
