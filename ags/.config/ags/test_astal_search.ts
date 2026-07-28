import AstalApps from 'gi://AstalApps';
const apps = AstalApps.Apps.new();
const results = apps.fuzzy_query("fir");
console.log(results.map(a => a.name));
