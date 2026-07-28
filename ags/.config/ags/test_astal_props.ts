import AstalApps from "gi://AstalApps"
const apps = AstalApps.Apps.new()
const res = apps.fuzzy_query("")
if (res.length > 0) {
    console.log("Name: " + res[0].name)
    console.log("Icon: " + res[0].icon_name)
    console.log("Desc: " + res[0].description)
}
