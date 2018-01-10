import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ToggleButton from 'components/toggle-button';
import FontAwesome from 'react-fontawesome';


import styles from './whoami.less';

class Whoami extends Component {
  static displayName = 'WhoamiComponent';

  static propTypes = {
    actions: PropTypes.object.isRequired,
    status: PropTypes.oneOf(['enabled', 'disabled'])
  };

  static defaultProps = {
    status: 'enabled'
  };

  onClick = () => {
    this.props.actions.toggleStatus();
  }

  /**
   * Render Whoami component.
   *
   * @returns {React.Component} The rendered component.
   */
  render() {
    return (
      <div className={classnames(styles.root)}>
        <h2 className={classnames(styles.title)}>Whoami Plugin</h2>
        <p>A plugin to indicate the current user.</p>
        <p>The current status is: <code>{this.props.status}</code></p>
        <ToggleButton onClick={this.onClick} />
      </div>
    );
  }
}

export default Whoami;
export { Whoami };
