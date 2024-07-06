import type { Preview } from "@storybook/svelte";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const customViewports = {
  smallMobile: {
    name: 'Small Mobile',
    styles: {
      width: '320px',
      height: '568px',
    },
  },
  largeMobile: {
    name: 'Large Mobile',
    styles: {
      width: '414px',
      height: '896px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  smallLaptop: {
    name: 'Small Laptop',
    styles: {
      width: '1366px',
      height: '768px',
    },
  },
  largeLaptop: {
    name: 'Large Laptop',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...customViewports,
      },
      defaultViewport: 'responsive',
    },  
  },
};

export default preview;
