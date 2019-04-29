import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

const Button = (props) => (
  <div>
    <p>Button Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Button;
