---
id: "useday"
title: "Type alias: UseDay"
sidebar_label: "UseDay"
sidebar_position: 0
custom_edit_url: null
---

Ƭ **UseDay**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `buttonProps?` | `Omit`<React.HTMLProps<HTMLButtonElement\>, ``"ref"``\> | The props for rendering the day as interactive element.  When `undefined`, DayPicker should render a non interactive element with non-interactive props. |
| `isOutside` | `boolean` | Whether the date is outside the display month/ |
| `modifiers` | [ModifierStatus](modifierstatus.md) | The modifiers for the given date. |
| `multiple` | [SelectMultipleContextValue](../interfaces/selectmultiplecontextvalue.md) | - |
| `nonInteractiveProps?` | [StyledComponentProps](styledcomponentprops.md) | The props for rendering the day as not interactive element.  When both this value and `buttonProps` are `undefined`, DayPicker should not render anything. |
| `range` | [SelectRangeContextValue](../interfaces/selectrangecontextvalue.md) | - |
| `selected` | `Date` \| `Date`[] \| [DateRange](daterange.md) \| `undefined` | The days in DayPicker currently selected. |
| `single` | [SelectSingleContextValue](../interfaces/selectsinglecontextvalue.md) | - |
