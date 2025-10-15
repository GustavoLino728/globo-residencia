import { useEffect, useLayoutEffect } from 'react';

// Hook para usar useLayoutEffect no cliente e useEffect no servidor
export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;
