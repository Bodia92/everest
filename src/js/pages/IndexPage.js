import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import socialInit from '../components/socialInit';
import gridItemInit from '../components/gridItemInit';
import gridSection from '../components/gridSection';

export default class IndexPage {
	constructor() {
		this.init = this.init.bind(this);
	}

	loadFunc() {
		console.log('index page load');
		socialInit();
		gridItemInit();
		gridSection();
	}

	init() {
		this.loadFunc();
	}
}
