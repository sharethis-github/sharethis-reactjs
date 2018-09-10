
// dependencies
import React from "react";

class InlineShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {

    // load config
    let config = JSON.parse(JSON.stringify(this.props.config));

    // load sharethis.js
    if (!document.getElementById('sharethis-js')) {
      const script = document.createElement("script");
      script.setAttribute('id', 'sharethis-js');
      script.src = "https://platform-api.sharethis.com/js/sharethis.js";
      script.async = true;
      document.body.appendChild(script);
    }

    const _onShareThisLoaded = window.onShareThisLoaded;
    let buttons = this.buttons;
    window.onShareThisLoaded = function() {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        buttons.current.id = config.id = id;
      }
      console.log('loaded inline', config);
      window.__sharethis__.load('inline-share-buttons', config);
      if (_onShareThisLoaded) {_onShareThisLoaded();}
    };
  }

  render () {
    console.log('inline render');
    return (
      <div ref={this.buttons} />
    );
  }
};

// export
export default InlineShareButtons;
