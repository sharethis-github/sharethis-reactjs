// dependencies
import React from 'react';

const normalizeNetworks = (networks) => {
  const options = [];
  const normalizedNetworks = [];

  networks.forEach((network) => {
    if (typeof network === 'string') {
      normalizedNetworks.push(network);
      options.push(undefined);
      return;
    }

    const [name, option] = network;
    normalizedNetworks.push(name);
    options.push(option);
    return;
  });

  return [normalizedNetworks, options];
};

const getStyleString = (style) =>
  Object.entries(style)
    .map(
      ([k, v]) =>
        `${k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)}:${v}`
    )
    .join(';');

const applyAttributes = (element, attributes) => {
  Object.keys(attributes).forEach((key) => {
    if (key === 'style') {
      element[key] = getStyleString(attributes[key]);
      return
    }

    if (key === 'className') {
      element['class'] = attributes[key]
    }

    element[key] = attributes[key];
  });
}

const applyOptions = (elements, options) => {
  elements.forEach((element, index) => {
    if (options[index]) {
      const option = options[index];

      if (option.icon) {
        const image = document.querySelector(
          `[data-network="${element.dataset.network}"] > img`
        );
        const text = document.querySelector(
          `[data-network="${element.dataset.network}"] > span`
        );

        if (option.icon) {
          applyAttributes(image, option.icon)
        }

        if (option.text) {
          applyAttributes(text, option.text)
        }

        if (option.container) {
          applyAttributes(element, option.container)
        }
      }
    }
  });
};

// load project wrapper
const load = function(component, product) {
  // load config
  let config = component.props.config || { enabled: true };
  config = JSON.parse(JSON.stringify(config));
  const [networks, networkOptions] = normalizeNetworks(
    config.networks ? config.networks : []
  );

  if (config.networks) {
    config.networks = networks;
  }

  // load buttons
  const _onShareThisLoaded = window.onShareThisLoaded;
  let onload = () => {
    if (!onload.complete) {
      if (!config.id) {
        const id = 'sharethis-' + Date.now();
        config.id = id;
      }
      if (component.buttons.current) {
        const buttons = component.buttons.current;
        buttons.id = config.id;
        window.__sharethis__.load(product, config);

        const networks = [
          ...document.querySelectorAll(`#${config.id} > [data-network]`),
        ].filter((el) => el.dataset.network);
        applyOptions(networks, networkOptions);
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
    const script = document.createElement('script');
    script.setAttribute('id', 'sharethis-js');
    const params = {
      property: config.property || '',
      product: product,
      source: 'reactjs',
    };
    const query = Object.keys(params)
      .map((key) => key + '=' + params[key])
      .join('&');
    script.src = 'https://platform-api.sharethis.com/js/sharethis.js?' + query;
    script.async = true;
    document.body.appendChild(script);
  }
};

// inline follow buttons
class InlineFollowButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {
    load(this, 'inline-follow-buttons');
  }

  render() {
    return <div ref={this.buttons} />;
  }
}

class InlineShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {
    load(this, 'inline-share-buttons');
  }

  render() {
    return <div ref={this.buttons} />;
  }
}

class InlineReactionButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {
    load(this, 'inline-reaction-buttons');
  }

  render() {
    return <div ref={this.buttons} />;
  }
}

class StickyShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = React.createRef();
  }

  componentDidMount() {
    load(this, 'sticky-share-buttons');
  }

  render() {
    return <div ref={this.buttons} />;
  }
}

// export
export {
  InlineFollowButtons,
  InlineReactionButtons,
  InlineShareButtons,
  StickyShareButtons,
};
