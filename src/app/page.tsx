import { useState } from 'react';
import HeroWidget from '@/widgets/HeroWidget/HeroWidget';
import { WidgetEditor } from '@/widgets/WidgetEditor';
import { widgetConfig } from '@/widgets/HeroWidget/HeroWidget';

export default function HomePage() {
  const [heroProps, setHeroProps] = useState({
    eyebrow: "children's museum of atlanta",
    heading: "Where Families Come to Play",
    subtitle: "Welcome to a safe, joyful place where children and caregivers have fun, explore, connect and grow through play.",
    bgImage: "/hero-bg.webp", // Make sure this image exists or use the imported one
    showHoursWidget: true,
    showWaves: true,
    ctas: [
      { label: "Buy Tickets Now", href: "#/book-your-visit", variant: "orange" as const },
      { label: "Memberships", href: "#/memberships/information", variant: "teal-outline" as const },
    ]
  });
  
  const [showEditor, setShowEditor] = useState(false);
  
  // Only show editor in development or for admin users
  const isAdmin = process.env.NODE_ENV === 'development'; // Or implement your auth check
  
  return (
    <main>
      {/* Hero Widget */}
      <HeroWidget {...heroProps} />
      
      {/* Widget Editor - only visible to admins in dev mode */}
      {isAdmin && (
        <>
          <button
            onClick={() => setShowEditor(!showEditor)}
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: 1001,
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
          >
            {showEditor ? 'Close Editor' : 'Edit Hero Section'}
          </button>
          
          {showEditor && (
            <WidgetEditor
              initialProps={heroProps}
              config={widgetConfig}
              onSave={(newProps) => {
                setHeroProps(newProps);
                setShowEditor(false);
                // You could also save to localStorage or backend here
                localStorage.setItem('heroContent', JSON.stringify(newProps));
                console.log('Hero content updated:', newProps);
              }}
              onClose={() => setShowEditor(false)}
            />
          )}
        </>
      )}
    </main>
  );
}