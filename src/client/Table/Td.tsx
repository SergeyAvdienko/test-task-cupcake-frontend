import * as React from 'react';
import { minVal } from '../parentClass/Observer';

function Red() {
  return (
    <td className="red lighten-4 center-align">
      <span>0</span>
    </td>
  );
}

function White(prop: any) {
  return (
    <td className="center-align">
      <span>{prop.value}</span>
    </td>
  );
}

function Green(prop: any) {
  return (
    <td className="teal lighten-4 center-align">
      <span>{prop.value}</span>
    </td>
  );
}

export function Cell(prop: any) {
  if (!prop.value) {
    return <Red />;
  }
  if (prop.value && prop.value <= minVal.getMinimumValue()) {
    return <Green value={prop.value} />;
  }
  if (prop.value && prop.value > minVal.getMinimumValue()) {
    return <White value={prop.value} />;
  }
}
