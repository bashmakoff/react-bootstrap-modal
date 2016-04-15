import React from 'react';
import cn from 'classnames';
import Dismiss from './Dismiss';

class ModalHeader extends React.Component {

  static _isModalHeader = true

  static getDefaultPrefix(){
    return 'modal'
  }

  static defaultProps = {
    closeButton: false,
  }

  static contextTypes = {
    onModalHide: React.PropTypes.func
  }


  render() {
    var prefix = this.props.modalPrefix || ModalHeader.getDefaultPrefix();

    return (
      <div
        {...this.props}
        className={cn(this.props.className,  prefix + '-header')}
      >
        { this.props.closeButton &&
          <Dismiss
            className='close'
            aria-label={this.props['aria-label'] || 'Close Modal'}
            style={{ marginTop: -2 }}
            onClick={this.props.onClose}
          >
            <span aria-hidden="true">
              &times;
            </span>
          </Dismiss>
        }
        { this.props.children }
      </div>
    )
  }
}

module.exports = ModalHeader
