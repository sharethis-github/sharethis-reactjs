
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
    const st_id = `st-inline-share-buttons-${config.id}`;
    config.id = st_id;
    this.refButton.current.id = st_id;
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
