var _ = require("hr.utils");
var $ = require("jquery");
var Q = require("q");

var logger = require("hr.logger")("app");

Q.onerror = function (error) {
    logger.exception("Uncaught Error:", error);
};

var app = require("./core/application");
var commands = require("./core/commands");
var packages = require("./core/packages");
var user = require("./core/user");
var workspace = require("./core/workspace");
var users = require("./core/users");
var settings = require("./core/settings");
var dialogs = require("./utils/dialogs");
var menu = require("./utils/menu");
var File = require("./models/file");

var keybindings = require("./settings/keybindings");
var upload = require("./utils/upload");
var zideRequire = require("./utils/require");

// Create the global object for packages
window.zide = {
    require: zideRequire,
    app: app,
    user: user,
    workspace: workspace,
    root: new File(),
    settings: settings
};

commands.register({
    id: "settings.open",
    title: "Settings: Open",
    icon: "gear",
    shortcuts: [
        "mod+,"
    ],
    run: function(args, context) {
        return commands.run("file.open", {
            file: settings.getFile()
        });
    }
});

// Start running the applications
logger.log("start application");
Q.delay(500)
.then(function() {
    return Q.all([
        zide.user.whoami(),
        zide.root.stat('./'),
        zide.workspace.about(),
        settings.load(),
        users.listAll()
    ]);
})
.then(function() {
    return packages.loadAll(!zide.workspace.get('debug'))
    .fail(function(err) {
        var message = "<p>"+err.message+"</p>";
        if (err.errors) {
            message += "<ul>"+ _.map(err.errors, function(e) {
                return "<li><b>"+_.escape(e.name)+"</b>: "+_.escape(e.error)+"</li>";
            }).join("\n")+ "</ul>";
        }

        return dialogs.alert(message, { isHtml: true })
    });
})
.then(app.start.bind(app))
.fail(function(err) {
    logger.error("Error:", err.message || "", err.stack || err);
    return dialogs.error(err);
});

