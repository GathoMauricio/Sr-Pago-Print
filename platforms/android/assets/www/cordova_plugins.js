cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    },
    {
        "file": "plugins/de.appplant.cordova.plugin.printer/www/printer.js",
        "id": "de.appplant.cordova.plugin.printer.Printer",
        "clobbers": [
            "plugin.printer",
            "cordova.plugins.printer"
        ]
    },
    {
        "file": "plugins/com.darktalker.cordova.screenshot/www/Screenshot.js",
        "id": "com.darktalker.cordova.screenshot.screenshot",
        "merges": [
            "navigator.screenshot"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "de.appplant.cordova.plugin.printer": "0.7.1",
    "com.darktalker.cordova.screenshot": "0.1.1"
}
// BOTTOM OF METADATA
});