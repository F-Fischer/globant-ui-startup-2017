import React, { Component } from 'react';
import classnames from 'classnames'

class Title extends Component {
  render() {
    const title = this.props.texts;
    const styleName = this.props.styleName;
    return (
      <div>
        <h1 className={classnames('default', styleName)}> {title} </h1>
      </div>
    );
  }
}

export default Title;
