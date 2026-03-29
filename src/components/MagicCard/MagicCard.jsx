import { useCallback, useRef, useEffect } from 'react';
import './MagicCard.css';

/**
 * MagicCard — wraps any card element with a mouse-tracking
 * border glow effect inspired by react-bits MagicBento.
 */
export default function MagicCard({
  children,
  className = '',
  borderColor = 'rgba(124, 58, 237, 0.8)',
  glowColor = 'rgba(124, 58, 237, 0.2)',
  glowRadius = 200,
  style,
  ...rest
}) {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-intensity', '1');
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-intensity', '0');
  }, []);

  return (
    <div
      ref={cardRef}
      className={`magic-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        '--magic-border-color': borderColor,
        '--magic-glow-color': glowColor,
        '--magic-glow-radius': `${glowRadius}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

/**
 * MagicCardContainer — an optional parent wrapper that enables a
 * "global spotlight" effect across multiple MagicCards at once.
 * When the user moves their mouse inside this container, all child
 * MagicCards update their glow position relative to each card.
 */
export function MagicCardContainer({
  children,
  className = '',
  spotlightColor = 'rgba(124, 58, 237, 0.06)',
  spotlightRadius = 350,
  style,
  ...rest
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e) => {
      const cards = container.querySelectorAll('.magic-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--glow-x', `${x}px`);
        card.style.setProperty('--glow-y', `${y}px`);
        card.style.setProperty('--glow-intensity', '1');
      });
    };

    const handleMouseLeave = () => {
      const cards = container.querySelectorAll('.magic-card');
      cards.forEach((card) => {
        card.style.setProperty('--glow-intensity', '0');
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`magic-card-container ${className}`}
      style={{
        '--spotlight-color': spotlightColor,
        '--spotlight-radius': `${spotlightRadius}px`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
