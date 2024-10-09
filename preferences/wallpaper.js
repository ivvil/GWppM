import Adw from 'gi://Adw';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';

export class Wallpapers extends Adw.PreferencesPage {
  static {
	GObject.registerClass({
	  GTypeName: 'WallpapersPage',
	  Template: 'resource://org/gnome'
	})
  }

		constructor({ ...params } = {}) {
		super(params);

		const settings = new Gio.Settings({ schema: 'org.gnome.shell.extensions.gwppm' });


	}


}
