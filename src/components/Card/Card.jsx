import React from "react";

class Card extends React.Component {
  render = () => {
    return (
      <div>
        {this.props.front}
      </div>
    );
  };
}

export default Card;
