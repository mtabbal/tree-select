webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(222);


/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

	/* eslint no-console: 0 */
	
	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	__webpack_require__(3);
	
	var _react = __webpack_require__(7);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(164);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _rcTreeSelect = __webpack_require__(4);
	
	var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);
	
	var Test = _react2['default'].createClass({
	  displayName: 'Test',
	
	  getInitialState: function getInitialState() {
	    return {
	      value: '1'
	    };
	  },
	  onChange: function onChange(e) {
	    var value = undefined;
	    if (e.target) {
	      value = e.target.value;
	    } else {
	      value = e;
	    }
	    this.setState({ value: value });
	  },
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { style: { margin: 20 } },
	      _react2['default'].createElement(
	        'h2',
	        null,
	        'Single Select'
	      ),
	      _react2['default'].createElement(
	        _rcTreeSelect2['default'],
	        { style: { width: 300 },
	          value: this.state.value,
	          dropdownMenuStyle: { maxHeight: 200, overflow: 'auto' },
	          treeProps: { defaultExpandAll: true },
	          onChange: this.onChange },
	        _react2['default'].createElement(
	          _rcTreeSelect.TreeNode,
	          { value: 'parent 1', title: 'parent 1', key: '0-1' },
	          _react2['default'].createElement(
	            _rcTreeSelect.TreeNode,
	            { value: 'parent 1-0', title: 'parent 1-0', key: '0-1-1' },
	            _react2['default'].createElement(_rcTreeSelect.TreeNode, { value: 'leaf', title: 'leaf', key: 'random' }),
	            _react2['default'].createElement(_rcTreeSelect.TreeNode, { value: 'leaf', title: 'leaf' })
	          ),
	          _react2['default'].createElement(
	            _rcTreeSelect.TreeNode,
	            { value: 'parent 1-1', title: 'parent 1-1' },
	            _react2['default'].createElement(_rcTreeSelect.TreeNode, { value: 'sss', title: _react2['default'].createElement(
	                'span',
	                { style: { color: 'red' } },
	                'sss'
	              ) })
	          )
	        )
	      )
	    );
	  }
	});
	
	_reactDom2['default'].render(_react2['default'].createElement(Test, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=single.js.map