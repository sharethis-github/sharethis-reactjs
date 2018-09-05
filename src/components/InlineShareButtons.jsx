
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
    let {config} = this.props;
    config.st_id = `st-inline-share-buttons-${config.id}`;
    this.refButton.current.id = config.st_id;
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
