import React from "react";
import InlineShareButtons from '../src/components/InlineShareButtons';
import StickyShareButtons from '../src/components/StickyShareButtons';

class App extends React.Component {

  render () {
    const url = 'www.sharethis.com';

    const inlineConfig = {
      alignment: 'center',
      font_size: 16,
      labels: 'cta',
      language: 'en',
      id: 1,
      networks: ['whatsapp', 'linkedin', 'youtube', 'facebook', 'twitter'],
      padding: 12,
      radius: 4,
      show_total: true,
      size: 40,
      url: url
    };

    const stickyConfig = {
      alignment: 'left',
      hide_desktop: false,
      id: 2,
      labels: 'cta',
      langauge: 'en',
      min_count: 10,
      networks: ['whatsapp', 'linkedin', 'youtube', 'facebook', 'twitter'],
      padding: 12,
      radius: 4,
      show_mobile: true,
      show_toggle: true,
      size: 48,
      top: 160,
      url: url,
      use_native_counts: true
    };

    return (
      <div>
        <InlineShareButtons
          config={inlineConfig}
        />
        <StickyShareButtons
          config={stickyConfig}
        />
      </div>
    );
  }
};

// export
export default App;
