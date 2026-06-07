import HeroWidget from './HeroWidget/HeroWidget';
import { widgetConfig as heroConfig } from './HeroWidget/HeroWidget';
import { WidgetEditor } from './WidgetEditor';

// Register all available widgets
export const widgets = {
  HeroWidget: {
    component: HeroWidget,
    config: heroConfig,
    editor: WidgetEditor
  }
};

// Helper function to get widget by name
export const getWidget = (name: keyof typeof widgets) => {
  return widgets[name];
};

// Get all widget configurations for the editor
export const getAllWidgetConfigs = () => {
  return Object.values(widgets).map(widget => widget.config);
};

// Export types
export type WidgetName = keyof typeof widgets;
export type WidgetConfig = typeof heroConfig;