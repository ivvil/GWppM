import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';

export class Wallpapers extends Adw.PreferencesPage {
	static {
		GObject.registerClass({
			GTypeName: 'WallpapersPage',
			Template: 'resource://org/gnome',
			InternalChildren: [
				'dark_chooser',
				'light_chooser',
			],
		}, this)
	}

	constructor({ settings, ...params } = {}) {
		super(params);

		settings.bind('light-wallpapers', this._light_chooser, 'uri', SettingsBindFlags.DEFAULT);
		settings.bind('dark-wallpapers', this._dark_chooser, 'uri', SettingsBindFlags.DEFAULT);
	}


}
