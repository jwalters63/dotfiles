import Gio from 'gi://Gio';
const apps = Gio.AppInfo.get_all();
console.log(apps.length);
