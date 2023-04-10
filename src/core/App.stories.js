import AppComponent from 'core/App';
import { MemoryRouter } from 'react-router-dom';

export default {
  component: AppComponent,
  title: 'App/Root',
  decorators: [
    Story => {
      return (
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      );
    },
  ],
  parameters: {
    backgrounds: {
      default: 'light',
    },
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

const Template = () => <AppComponent />;

export const App = Template.bind({});
