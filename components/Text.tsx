import React from 'react';
import { Text, TextProps } from 'react-native';

const CustomText: React.FC<TextProps> = (props) => {
  const style = Array.isArray(props.style) ? Object.assign({}, ...props.style) : props.style;
  return <Text {...props} style={[props.style, { fontFamily: style?.fontFamily || 'Inter_400Regular' }]} />;
};

export default CustomText;