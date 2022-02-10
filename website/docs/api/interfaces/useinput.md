---
id: "useinput"
title: "Interface: UseInput"
sidebar_label: "UseInput"
sidebar_position: 0
custom_edit_url: null
---

Represent the value returned by [useInput](../functions/useinput.md).

## Properties

### dayPickerProps

• **dayPickerProps**: [UseInputDayPickerProps](useinputdaypickerprops.md)

The props to pass to a DayPicker component: `<DayPicker {...dayPickerProps} />`

___

### fieldProps

• **fieldProps**: [UseInputFieldProps](useinputfieldprops.md)

The props to pass to an input field: `<input {...fieldProps} />`

___

### reset

• **reset**: () => `void`

#### Type declaration

▸ (): `void`

A function to reset to the initial state.

##### Returns

`void`

___

### setSelected

• **setSelected**: (`day`: `Date`) => `void`

#### Type declaration

▸ (`day`): `void`

A function to set the selected day.

##### Parameters

| Name | Type |
| :------ | :------ |
| `day` | `Date` |

##### Returns

`void`
