// ------------------- imports
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad, onWindowResize } from 'utils';
// ------------------- imports###

// ------------------  import components
import { calcViewportHeight } from '../utils';
// ------------------  import components###
import langInit from '../components/langInit';
import socialInit from '../components/socialInit';
import menuHeader from '../components/menuHeader';
import menuTrigger from '../components/menuTrigger';
import gridItemInit from '../components/gridItemInit';
import gridSection from '../components/gridSection';

export default class Layout {
	constructor() {
		this.init = this.init.bind(this);
		this.init();
	}

	loadFunc() {
		console.log('layout load');
		calcViewportHeight();
		langInit();
		socialInit();
		menuHeader();
		menuTrigger();
		gridItemInit();
		gridSection();
	}

	init() {
		onWindowResize(() => {
			calcViewportHeight();
		});

		this.loadFunc();
	}
}
