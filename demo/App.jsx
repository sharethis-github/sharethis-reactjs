import React from "react";
import InlineShareButtons from '../src/components/InlineShareButtons';

class App extends React.Component {

  render () {
    const url = 'www.sharethis.com';

    return (
      <InlineShareButtons
        id={1}
        url={url}
        show_total={true}
        networks={['facebook', 'twitter']}
      />
    );
  }
};

// export
export default App;
