// dependencies
import React from "react";
import loader from "../js/products/sticky-share-buttons";

class StickyShareButtons extends React.Component {
  constructor(props) {
    super(props);
    this.refButton = React.createRef();
  }

  componentDidMount() {
    this.renderButtons();

  }

  renderButtons() {
    let {config} = this.props;
    config.st_id = `st-sticky-share-buttons-${config.id}`;
    this.refButton.current.id = config.st_id;
    const buttons = loader(config);
  }

  render () {
    return (
      <div className='sticky-share-buttons' ref={this.refButton} />
    );
  }
};

// export
export default StickyShareButtons;
