import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import { typography, colors, branding } from './themes/amd';
import './manager.css';

export const AMDTheme = create({
    ...branding,
    ...typography,
    ...colors,
  });

  addons.setConfig({
    theme: AMDTheme,
  });