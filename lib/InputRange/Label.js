/**
 * @module InputRange/Label
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

function getStyle(label) {
  var _label$state = label.state;
  var offsetLeft = _label$state.offsetLeft;
  var offsetRight = _label$state.offsetRight;

  if (offsetLeft !== 0) {
    return {
      left: offsetLeft + 'px'
    };
  }

  if (offsetRight !== 0) {
    return {
      right: offsetRight + 'px'
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

var Label = (function (_React$Component) {
  _inherits(Label, _React$Component);

  function Label(props) {
    _classCallCheck(this, Label);

    _get(Object.getPrototypeOf(Label.prototype), 'constructor', this).call(this, props);

    this.state = {
      offsetLeft: 0,
      offsetRight: 0
    };
  }

  /**
   * Accepted propTypes of Label
   * @static {Object}
   * @property {Function} children
   * @property {Function} className
   * @property {Function} containerClassName
   * @property {Function} formatLabel
   */

  _createClass(Label, [{
    key: 'render',

    /**
     * Render method of the component
     * @return {string} Component JSX
     */
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var containerClassName = _props.containerClassName;

      var labelValue = this.props.formatLabel ? this.props.formatLabel(this.props.children) : this.props.children;
      var style = getStyle(this);

      return _react2['default'].createElement(
        'span',
        { className: className, style: style },
        _react2['default'].createElement(
          'span',
          { className: containerClassName, ref: 'containerRef' },
          labelValue
        )
      );
    }
  }, {
    key: 'rect',
    get: function get() {
      var containerRef = this.refs.containerRef;

      if (containerRef) {
        return containerRef.getBoundingClientRect();
      }

      return _util.EMPTY_BOUNDING_BOX;
    }
  }]);

  return Label;
})(_react2['default'].Component);

exports['default'] = Label;
Label.propTypes = {
  children: _react2['default'].PropTypes.node,
  className: _react2['default'].PropTypes.string,
  containerClassName: _react2['default'].PropTypes.string,
  formatLabel: _react2['default'].PropTypes.func,
  offsetLeft: _react2['default'].PropTypes.number
};
module.exports = exports['default'];