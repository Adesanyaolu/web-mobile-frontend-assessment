const React = require("react");
const { Text } = require("react-native");

function createIconMock(iconSetName) {
  const Icon = ({ name, ...props }) =>
    React.createElement(Text, props, name);
  Icon.displayName = iconSetName;
  return Icon;
}

module.exports = {
  Ionicons: createIconMock("Ionicons"),
  MaterialIcons: createIconMock("MaterialIcons"),
  FontAwesome: createIconMock("FontAwesome"),
  Feather: createIconMock("Feather"),
  AntDesign: createIconMock("AntDesign"),
  Entypo: createIconMock("Entypo"),
  EvilIcons: createIconMock("EvilIcons"),
  FontAwesome5: createIconMock("FontAwesome5"),
  Foundation: createIconMock("Foundation"),
  MaterialCommunityIcons: createIconMock("MaterialCommunityIcons"),
  Octicons: createIconMock("Octicons"),
  SimpleLineIcons: createIconMock("SimpleLineIcons"),
  Zocial: createIconMock("Zocial"),
};
