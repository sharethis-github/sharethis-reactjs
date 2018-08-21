
// dependencies
import React from "react";
import loader from "../js/inlineShareButtons";

class InlineShareButtons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.update();

  }

  update() {
    const {id, url, show_total, networks} = this.props;
    const st_id = `st-share-buttons-${id}`;
    const element = document.createElement("div");
    element.setAttribute("id", st_id);
    document.body.appendChild(element);

    const config = {
      id: st_id,
      url: url,
      show_total: show_total,
      networks: networks
    };
    const buttons = loader(config);
  }

  render () {

    return (
      <div className='inline-share-buttons'

      />
    );
  }
};

// export
export default InlineShareButtons;
