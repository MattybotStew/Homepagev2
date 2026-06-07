import { useState } from 'react';

interface WidgetEditorProps {
  initialProps: any;
  config: any;
  onSave: (props: any) => void;
  onClose: () => void;
}

export function WidgetEditor({ initialProps, config, onSave, onClose }: WidgetEditorProps) {
  const [props, setProps] = useState(initialProps);

  const handleArrayEdit = (index: number, field: string, value: string) => {
    const newCtases = [...(props.ctas || [])];
    newCtases[index] = { ...newCtases[index], [field]: value };
    setProps({ ...props, ctas: newCtases });
  };

  const addCta = () => {
    const newCtases = [...(props.ctas || []), { label: "New Button", href: "#", variant: "orange" }];
    setProps({ ...props, ctas: newCtases });
  };

  return (
    <div style={{
      position: 'fixed', top: 0, right: 0, bottom: 0, width: '400px',
      background: 'white', boxShadow: '-2px 0 8px rgba(0,0,0,0.1)',
      padding: '20px', zIndex: 1000, overflowY: 'auto'
    }}>
      <h2>Edit {config.label}</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label>Eyebrow</label>
        <input
          type="text"
          value={props.eyebrow || ''}
          onChange={(e) => setProps({ ...props, eyebrow: e.target.value })}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Heading</label>
        <input
          type="text"
          value={props.heading || ''}
          onChange={(e) => setProps({ ...props, heading: e.target.value })}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Subtitle</label>
        <textarea
          value={props.subtitle || ''}
          onChange={(e) => setProps({ ...props, subtitle: e.target.value })}
          style={{ width: '100%', padding: '8px', minHeight: '80px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Background Image URL</label>
        <input
          type="text"
          value={props.bgImage || ''}
          onChange={(e) => setProps({ ...props, bgImage: e.target.value })}
          style={{ width: '100%', padding: '8px' }}
        />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>CTAs (Call to Action Buttons)</label>
        {props.ctas?.map((cta: any, index: number) => (
          <div key={index} style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <input
              placeholder="Label"
              value={cta.label}
              onChange={(e) => handleArrayEdit(index, 'label', e.target.value)}
              style={{ width: '100%', marginBottom: '5px', padding: '5px' }}
            />
            <input
              placeholder="URL"
              value={cta.href}
              onChange={(e) => handleArrayEdit(index, 'href', e.target.value)}
              style={{ width: '100%', marginBottom: '5px', padding: '5px' }}
            />
            <select
              value={cta.variant}
              onChange={(e) => handleArrayEdit(index, 'variant', e.target.value)}
              style={{ width: '100%', padding: '5px' }}
            >
              <option value="orange">Orange</option>
              <option value="teal-outline">Teal Outline</option>
            </select>
          </div>
        ))}
        <button onClick={addCta} style={{ padding: '5px 10px', marginTop: '5px' }}>
          + Add Button
        </button>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={props.showHoursWidget}
            onChange={(e) => setProps({ ...props, showHoursWidget: e.target.checked })}
          />
          Show Hours Widget
        </label>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={props.showWaves}
            onChange={(e) => setProps({ ...props, showWaves: e.target.checked })}
          />
          Show Waves Animation
        </label>
      </div>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <button onClick={() => onSave(props)} style={{ padding: '10px 20px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Save Changes
        </button>
        <button onClick={onClose} style={{ padding: '10px 20px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Close
        </button>
      </div>
    </div>
  );
}   