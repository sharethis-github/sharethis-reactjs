import React from "react";
import {InlineShareButtons, StickyShareButtons} from 'sharethis-reactjs';

class App extends React.Component {

  render () {
    const url = 'https://www.sharethis.com';

    const inlineConfig = {
      alignment: 'center',
      font_size: 16,
      labels: 'cta',
      language: 'en',
      id: 1,
      networks: ['whatsapp', 'linkedin', 'messenger', 'facebook', 'twitter'],
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
      labels: 'counts',
      langauge: 'en',
      min_count: 10,
      networks: ['linkedin', 'facebook', 'twitter', 'pinterest', 'email'],
      padding: 12,
      radius: 4,
      show_total: true,
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
