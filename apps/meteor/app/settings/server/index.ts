/* eslint-disable react-hooks/rules-of-hooks */
import { Settings } from '@rocket.chat/models';

import { use } from './Middleware';
import { SettingsEvents, SettingsRegistry } from './SettingsRegistry';
import { settings } from './cached';
import { initializeSettings } from './startup';
import './applyMiddlewares';

const settingsRegistry = new SettingsRegistry({ store: settings, model: Settings });

export {
	initializeSettings,
	settings,
	settingsRegistry,
	SettingsEvents,
	use,
};

settingsRegistry.add = use(settingsRegistry.add, async (context, next) => {
	return next(...context) as any;
});

settingsRegistry.addGroup = use(settingsRegistry.addGroup, async (context, next) => {
	return next(...context) as any;
});

await initializeSettings({ model: Settings, settings });
