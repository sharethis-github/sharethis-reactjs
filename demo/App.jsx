import React from "react";
import InlineShareButtons from '../src/components/InlineShareButtons';

class App extends React.Component {

  render () {
    const url = 'www.sharethis.com';

    return (
      <InlineShareButtons
        alignment='center'
        font_size={16}
        labels={'cta'}
        languagae={'en'}
        id={1}
        networks={['whatsapp', 'linkedin', 'youtube', 'facebook', 'twitter']}
        padding={12}
        radius={4}
        show_total={true}
        size={40}
        url={url}
      />
    );
  }
};

// export
export default App;
