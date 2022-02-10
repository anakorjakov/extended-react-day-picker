---
id: "navigationprops"
title: "Interface: NavigationProps"
sidebar_label: "NavigationProps"
sidebar_position: 0
custom_edit_url: null
---

The props for the [Navigation](../functions/navigation.md) component.

## Properties

### displayMonth

• **displayMonth**: `Date`

The month where the caption is displayed.

___

### hideNext

• **hideNext**: `boolean`

Hide the next button.

___

### hidePrevious

• **hidePrevious**: `boolean`

Hide the previous button.

___

### nextMonth

• `Optional` **nextMonth**: `Date`

The next month.

___

### onNextClick

• **onNextClick**: (`event`: `MouseEvent`<HTMLButtonElement, MouseEvent\>) => `void`

#### Type declaration

▸ (`event`): `void`

Event handler when the next button is clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<HTMLButtonElement, MouseEvent\> |

##### Returns

`void`

___

### onPreviousClick

• **onPreviousClick**: (`event`: `MouseEvent`<HTMLButtonElement, MouseEvent\>) => `void`

#### Type declaration

▸ (`event`): `void`

Event handler when the previous button is clicked.

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `MouseEvent`<HTMLButtonElement, MouseEvent\> |

##### Returns

`void`

___

### previousMonth

• `Optional` **previousMonth**: `Date`

The previous month.
