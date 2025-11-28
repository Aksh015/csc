import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Start hidden
  const [hasMovedOnce, setHasMovedOnce] = useState(false); // Track if mouse has moved

  useEffect(() => {
    const updateCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!hasMovedOnce) {
        setHasMovedOnce(true);
        setIsVisible(true);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.classList.contains('cursor-hover') ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-hover')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.classList.contains('cursor-hover') ||
          target.closest('button') ||
          target.closest('a') ||
          target.closest('.cursor-hover')) {
        setIsHovering(false);
      }
    };

    // Handle cursor leaving the page
    const handleMouseLeaveDocument = () => {
      setIsVisible(false);
    };

    // Handle cursor entering the page
    const handleMouseEnterDocument = () => {
      if (hasMovedOnce) {
        setIsVisible(true);
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseLeaveDocument);
    document.addEventListener('mouseenter', handleMouseEnterDocument);
    
    // Also listen for when cursor leaves the window
    window.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || e.relatedTarget.nodeName === 'HTML') {
        setIsVisible(false);
      }
    });
    
    window.addEventListener('mouseover', () => {
      if (hasMovedOnce) {
        setIsVisible(true);
      }
    });

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeaveDocument);
      document.removeEventListener('mouseenter', handleMouseEnterDocument);
      window.removeEventListener('mouseout', handleMouseLeaveDocument);
      window.removeEventListener('mouseover', handleMouseEnterDocument);
    };
  }, [hasMovedOnce]);

  return (
    <>
      {/* Main Cursor Only */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'active' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
        }}
      />
    </>
  );
};

export default CustomCursor;