var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChannelPreviewMessage = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _contexts = require("../../contexts");
var _MessagePreview = require("../MessagePreview/MessagePreview");
var _jsxRuntime = require("react/jsx-runtime");
var _this = this,
  _jsxFileName = "/Users/what1slove/Dev/ownit/stream-chat-react-native/stream-chat-react-native-core/src/components/ChannelPreview/ChannelPreviewMessage.tsx";
var ChannelPreviewMessage = exports.ChannelPreviewMessage = function ChannelPreviewMessage(props) {
  var latestMessagePreview = props.latestMessagePreview;
  var _useTheme = (0, _contexts.useTheme)(),
    container = _useTheme.theme.channelPreview.message.container;
  return (0, _jsxRuntime.jsx)(_reactNative.View, {
    style: [styles.container, container],
    children: (0, _jsxRuntime.jsx)(_MessagePreview.MessagePreview, {
      previews: latestMessagePreview.previews
    })
  });
};
var styles = _reactNative.StyleSheet.create({
  container: {
    flexShrink: 1
  }
});
//# sourceMappingURL=ChannelPreviewMessage.js.map