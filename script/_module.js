const ModuleName = 'lbx_lnop';
const ModuleDefaults =  {

};
const ModuleReturns = ['output', 'methods'];

class Module {
	constructor ( ele, options ) {
		this.ele = ele;
		this.$ele = $(ele);
		this.option = options;
		this.sss=100;
	}
	init () {
		
		return this;
	}
	methods () {
		
		return this;
	}
	output () {
		return this;
	}
};

export { ModuleName, ModuleDefaults, ModuleReturns, Module };