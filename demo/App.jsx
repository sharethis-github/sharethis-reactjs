import React from "react";
import {InlineShareButtons, StickyShareButtons} from 'sharethis-reactjs';

class App extends React.Component {

  render () {
    return (
      <div>
        <InlineShareButtons config={{
          alignment: 'center',
          enabled: true,
          fade_in: true,
          font_size: 16,
          labels: 'cta',
          language: 'en',
          networks: ['whatsapp', 'linkedin', 'messenger', 'facebook', 'twitter'],
          padding: 12,
          radius: 4,
          show_total: true,
          size: 40,
          url: 'https://www.sharethis.com'
        }} />
        <StickyShareButtons config={{
          alignment: 'left',
          enabled: true,
          hide_desktop: false,
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
          url: 'https://www.sharethis.com'
        }} />
      </div>
    );
  }
};

// export
export default App;
