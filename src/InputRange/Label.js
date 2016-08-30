/**
 * @module InputRange/Label
 */

import React from 'react';
import {EMPTY_BOUNDING_BOX} from './util';

function getStyle(label) {
  const {offsetLeft, offsetRight} = label.state;

  if (offsetLeft !== 0) {
    return {
      left: `${offsetLeft}px`,
    };
  }

  if (offsetRight !== 0) {
    return {
      right: `${offsetRight}px`,
    };
  }

  return {};
}

/**
 * Label React component
 * @class
 * @extends React.Component
 * @param {Object} props - React component props
 */
export default class Label extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      offsetLeft: 0,
      offsetRight: 0,
    };
  }

  get rect() {
    const {containerRef} = this.refs;

    if (containerRef) {
      return containerRef.getBoundingClientRect();
    }

    return EMPTY_BOUNDING_BOX;
  }

  /**
   * Render method of the component
   * @return {string} Component JSX
   */
  render() {
    const { className, containerClassName } = this.props;
    const labelValue = this.props.formatLabel ?
                       this.props.formatLabel(this.props.children) :
                       this.props.children;
    const style = getStyle(this);

    return (
      <span className={ className } style={style}>
        <span className={ containerClassName } ref="containerRef">
          { labelValue }
        </span>
      </span>
    );
  }

}

/**
 * Accepted propTypes of Label
 * @static {Object}
 * @property {Function} children
 * @property {Function} className
 * @property {Function} containerClassName
 * @property {Function} formatLabel
 */
Label.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  containerClassName: React.PropTypes.string,
  formatLabel: React.PropTypes.func,
  offsetLeft: React.PropTypes.number,
};
