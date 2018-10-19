
// dependencies
import React from "react";

// load project wrapper
const load = function(component, product) {

  // load config
  let config = component.props.config || {enabled: true};
  config = JSON.parse(JSON.stringify(config));

  // load buttons
  const _onShareThisLoaded = window.onShareThisLoaded;
  let onload = () => {
    if (!onload.complete) {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      if (component.buttons.current) {
        component.buttons.current.id = config.id;
        window.__sharethis__.load(product, config);
      }
      if (_onShareThisLoaded) {
        _onShareThisLoaded();
      }
      onload.complete = true;
    }
  };
  window.onShareThisLoaded = onload;

  // load sharethis.js
  if (document.getElementById('sharethis-js')) {
    if (window.__sharethis__) {
      window.onShareThisLoaded();
    }
  } else {
    const script = document.createElement("script");
    script.setAttribute('id', 'sharethis-js');
    script.src = "https://platform-api.sharethis.com/js/sharethis.js" +
      "?product=" + product + "&source=reactjs";
    script.async = true;
    document.body.appendChild(script);
  }
}

// inline follow buttons
class InlineFollowButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {
    load(this, 'inline-follow-buttons');
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
    load(this, 'inline-share-buttons');
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
    load(this, 'inline-reaction-buttons');
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
    load(this, 'sticky-share-buttons');
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

