'use strict';

import Gtk from 'gi://Gtk?version=4.0';
import Adw from 'gi://Adw';
import GObject from 'gi://GObject';

import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';
import { Wallpapers } from './preferences/wallpaper.js'

export default class ExamplePreferences extends ExtensionPreferences {
	/**
	 * This class is constructed once when your extension preferences are
	 * about to be opened. This is a good time to setup translations or anything
	 * else you only do once.
	 *
	 * @param {ExtensionMeta} metadata - An extension meta object
	 */
	constructor(metadata) {
		super(metadata);

		// console.debug(`constructing ${this.metadata.name}`);
	}

	/**
	 * This function is called when the preferences window is first created to
	 * build and return a GTK4 widget.
	 *
	 * The preferences window will be a `Adw.PreferencesWindow`, and the widget
	 * returned by this function will be added to an `Adw.PreferencesPage` or
	 * `Adw.PreferencesGroup` if necessary.
	 *
	 * @returns {Gtk.Widget} the preferences widget
	 */
	getPreferencesWidget() {
		// return new Gtk.Label({
		//     label: this.metadata.name,
		// });
	}

	/**
	 * Fill the preferences window with preferences.
	 *
	 * If this method is overridden, `getPreferencesWidget()` will NOT be called.
	 *
	 * @param {Adw.PreferencesWindow} window - the preferences window
	 */
	fillPreferencesWindow(window) {
		window.search_enabled = true;
		window.set_default_size(500, 630);

		GObject.type_ensure(Wallpapers);

		let preferencesPage = new Wallpapers({ settings: this.getSettings(`${this.metadata['settings-schema']}`) });
		window.add(preferencesPage);
	}
}
