---
id: "useday"
title: "Function: useDay"
sidebar_label: "useDay"
sidebar_position: 0
custom_edit_url: null
---

▸ **useDay**(`date`, `displayMonth`, `buttonRef`): [UseDay](../types/useday.md)

This hook returns details about the content to render in the day cell.

When a day cell is rendered in the table, DayPicker can either:

- render nothing: when the day is outside the month or has matched the
  "hidden" modifier.
- render a button. When a selection mode is set, DayPicker renders a button
  to allow the focus and the selection. In case of `uncontrolled` selection
  mode, DayPicker expects a `onDayClick` prop to render a button.
- render a non-interactive element: when no selection mode is set, the day
  cell shouldn’t respond to any interaction. DayPicker should render a `div`
  or a `span`.

### Usage

Use this hook to customize the behavior of the [Day](day.md) component. Create a
new `Day` component using this hook and pass it to the `components` prop.
The source of [Day](day.md) can be a good starting point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `displayMonth` | `Date` |
| `buttonRef` | `React.RefObject`<HTMLButtonElement\> |

#### Returns

[UseDay](../types/useday.md)
