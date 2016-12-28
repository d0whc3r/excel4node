'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Protection = function () {
	/**
  * @class Protection
  * @desc Instance of Protection with properties
  * @param {Object} opts Options for Protection
  * @param {Boolean} opts.locked lock cell if sheet is protected
  * @param {Boolean} opts.hidden hidden formula if sheet is protected
  * @retuns {Protection}
  */
	function Protection(opts) {
		_classCallCheck(this, Protection);

		opts = opts ? opts : {};
		typeof opts.locked === 'boolean' ? this.locked = opts.locked : null;
		typeof opts.hidden === 'boolean' ? this.hidden = opts.hidden : null;
	}

	_createClass(Protection, [{
		key: 'toObject',
		value: function toObject() {
			var obj = {};
			typeof this.locked === 'boolean' ? obj.locked = this.locked : null;
			typeof this.hidden === 'boolean' ? obj.hidden = this.hidden : null;
			return obj;
		}

		/**
   * @alias Protection.addToXMLele
   * @desc When generating Workbook output, attaches style to the styles xml file
   * @func Protection.addToXMLele
   * @param {xmlbuilder.Element} ele Element object of the xmlbuilder module
   */

	}, {
		key: 'addToXMLele',
		value: function addToXMLele(protectionXML) {
			var fEle = protectionXML.ele('protection');
			fEle.att('hidden', this.hidden ? 'true' : 'false');
			fEle.att('locked', this.locked ? 'true' : 'false');
			return true;
		}
	}]);

	return Protection;
}();

module.exports = Protection;
//# sourceMappingURL=protection.js.map