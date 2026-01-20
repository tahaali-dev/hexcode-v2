'use client';
import { useEffect } from 'react';

export default function PrimeButtonKeyboard() {
 useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
   const key = e.key.toLowerCase();
   if (key !== 't' && key !== 'c') return;

   if (
    e.target instanceof HTMLInputElement ||
    e.target instanceof HTMLTextAreaElement ||
    (e.target as HTMLElement)?.isContentEditable
   ) {
    return;
   }

   const buttons = Array.from(document.querySelectorAll('button'));

   buttons.forEach((btn) => {
    const span = btn.querySelector('span');
    if (!span) return;

    const text = span.textContent
     ?.toLowerCase()
     .replace(/['’]/g, '')
     .replace(/\s+/g, ' ')
     .trim();

    if (key === 't' && text === 'lets talk') {
     // ✅ React-safe click
     btn.dispatchEvent(
      new MouseEvent('click', {
       bubbles: true,
       cancelable: true,
      })
     );
    }

    if (key === 'c' && text === 'book a call') {
     btn.dispatchEvent(
      new MouseEvent('click', {
       bubbles: true,
       cancelable: true,
      })
     );
    }
   });
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
 }, []);

 return null;
}
