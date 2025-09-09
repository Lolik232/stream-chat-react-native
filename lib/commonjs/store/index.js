Object.defineProperty(exports, "__esModule", {
  value: true
});
var _inAppNotificationsStore = require("./in-app-notifications-store");
Object.keys(_inAppNotificationsStore).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _inAppNotificationsStore[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _inAppNotificationsStore[key];
    }
  });
});
//# sourceMappingURL=index.js.map