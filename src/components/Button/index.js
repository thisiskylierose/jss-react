// @flow
import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import type { ButtonProps } from './index.types';

const Button = (props: ButtonProps) => (
  <div>
    <p>Button Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default Button;
