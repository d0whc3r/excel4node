class Protection {
	/**
	 * @class Protection
	 * @desc Instance of Protection with properties
	 * @param {Object} opts Options for Protection
	 * @param {Boolean} opts.locked lock cell if sheet is protected
	 * @param {Boolean} opts.hidden hidden formula if sheet is protected
	 * @retuns {Protection}
	 */
	constructor(opts) {
		opts = opts ? opts : {};
		typeof opts.locked === 'boolean' ? this.locked = opts.locked : null;
		typeof opts.hidden === 'boolean' ? this.hidden = opts.hidden : null;
	}

	toObject() {
		let obj = {};
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
	addToXMLele(protectionXML) {
		let fEle = protectionXML.ele('protection');
		fEle.att('hidden', this.hidden ? 'true' : 'false');
		fEle.att('locked', this.locked ? 'true' : 'false');
		return true;
	}

}


module.exports = Protection;
