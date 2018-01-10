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
    user: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired
  };
  static defaultProps = {
    user: '', role: ''
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
    if (!this.props.user) {
      return (
        <div>
          <FontAwesome name="user-times"/>
          No User
        </div>
      );
    }
    return (
      <div className={classnames(styles.root)}>
        <FontAwesome name="user"/>
        <i> {this.props.user}: {this.props.role}</i>
      </div>
    );
  }
}

export default Whoami;
export { Whoami };
