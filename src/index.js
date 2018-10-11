
// dependencies
import React from "react";

class InlineFollowButtons extends React.Component {
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
      script.src = "https://platform-api.sharethis.com/js/sharethis.js" +
        "?product=inline-follow-buttons&source=reactjs";
      script.async = true;
      document.body.appendChild(script);
    }

    // load buttons
    const _onShareThisLoaded = window.onShareThisLoaded;
    window.onShareThisLoaded = () => {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      this.buttons.current.id = config.id;
      window.__sharethis__.load('inline-follow-buttons', config);
      if (_onShareThisLoaded) {_onShareThisLoaded();}
    };
  }

  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};

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
      script.src = "https://platform-api.sharethis.com/js/sharethis.js" +
        "?product=inline-share-buttons&source=reactjs";
      script.async = true;
      document.body.appendChild(script);
    }

    // load buttons
    const _onShareThisLoaded = window.onShareThisLoaded;
    window.onShareThisLoaded = () => {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      this.buttons.current.id = config.id;
      window.__sharethis__.load('inline-share-buttons', config);
      if (_onShareThisLoaded) {_onShareThisLoaded();}
    };
  }

  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};

class InlineReactionButtons extends React.Component {
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
      script.src = "https://platform-api.sharethis.com/js/sharethis.js" +
        "?product=inline-reaction-buttons&source=reactjs";
      script.async = true;
      document.body.appendChild(script);
    }

    // load buttons
    const _onShareThisLoaded = window.onShareThisLoaded;
    window.onShareThisLoaded = () => {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      this.buttons.current.id = config.id;
      window.__sharethis__.load('inline-reaction-buttons', config);
      if (_onShareThisLoaded) {_onShareThisLoaded();}
    };
  }

  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};

class StickyShareButtons extends React.Component {
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
      script.src = "https://platform-api.sharethis.com/js/sharethis.js" +
        "?product=sticky-share-buttons&source=reactjs";
      script.async = true;
      document.body.appendChild(script);
    }

    // load buttons
    const _onShareThisLoaded = window.onShareThisLoaded;
    window.onShareThisLoaded = () => {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      this.buttons.current.id = config.id;
      window.__sharethis__.load('sticky-share-buttons', config);
      if (_onShareThisLoaded) { _onShareThisLoaded(); }
    };
  }

  render () {
    return (
      <div ref={this.buttons} />
    );
  }
};

// export
export {
  InlineFollowButtons,
  InlineReactionButtons,
  InlineShareButtons,
  StickyShareButtons
}

