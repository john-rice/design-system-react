define(['module', 'raw-loader!design-system-react/components/panel/__examples__/filtering.jsx', 'raw-loader!design-system-react/components/panel/__examples__/filtering-locked.jsx', 'raw-loader!design-system-react/components/panel/__examples__/filtering-error.jsx'], function (module) {
	'use strict';

	// This object is imported into the documentation site. An example for the documentation site should be part of the pull request for the component. The object key is the kabob case of the "URL folder". In the case of `http://localhost:8080/components/app-launcher/`, `app-launcher` is the `key`. The folder name is created by `components.component` value in `package.json`. Keep in mind, some components like `forms/checkbox` will be changed to `forms-checkbox`. The following uses webpack's raw-loader plugin to get "text files" that will be eval()'d by CodeMirror within the documentation site on page load.

	/* eslint-env node */
	/* eslint-disable global-require */

	var siteStories = [];

	module.exports = siteStories;
});