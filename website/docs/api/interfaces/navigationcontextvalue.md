---
id: "navigationcontextvalue"
title: "Interface: NavigationContextValue"
sidebar_label: "NavigationContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of the [NavigationContext](../variables/navigationcontext.md).

## Properties

### displayMonths

• **displayMonths**: `Date`[]

The months to display, according to `numberOfMonths`.

___

### goToMonth

• **goToMonth**: (`month`: `Date`) => `void`

#### Type declaration

▸ (`month`): `void`

Navigate to the specified month.

##### Parameters

| Name | Type |
| :------ | :------ |
| `month` | `Date` |

##### Returns

`void`

___

### month

• **month**: `Date`

The current month. Note that when `numberOfMonths > 1` represent the first month in the displayed months.

___

### nextMonth

• `Optional` **nextMonth**: `Date`

The next month to display. `undefined` if no months left

___

### previousMonth

• `Optional` **previousMonth**: `Date`

The previous month to display. `undefined` if no months left
