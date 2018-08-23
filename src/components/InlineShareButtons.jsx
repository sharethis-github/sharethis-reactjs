
// dependencies
import React from "react";
import loader from "../js/products/inline-share-buttons";

class InlineShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.refButton = React.createRef();
  }

  componentDidMount() {
    this.renderButtons();

  }

  renderButtons() {
    const {id, alignment, font_size, labels, language, padding, url, radius, size, show_total, networks} = this.props;
    const st_id = `st-inline-share-buttons-${id}`;
    this.refButton.current.id = st_id;

    console.log(this.props);

    const config = {
      alignment: alignment,
      fade_in: true,
      font_size: font_size,
      labels: labels,
      language: language,
      id: st_id,
      networks: networks,
      padding: padding,
      radius: radius,
      show_total: show_total,
      size: size,
      url: url,
    };
    const buttons = loader(config);
  }

  render () {
    return (
      <div className='inline-share-buttons' ref={this.refButton} />
    );
  }
};

// export
export default InlineShareButtons;
