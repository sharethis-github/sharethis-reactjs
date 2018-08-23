
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
    const {id, url, show_total, networks} = this.props;
    const st_id = `st-inline-share-buttons-${id}`;
    this.refButton.current.id = st_id;

    const config = {
      fade_in: true,
      id: st_id,
      url: url,
      show_total: show_total,
      networks: networks
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
