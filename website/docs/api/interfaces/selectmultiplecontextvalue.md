---
id: "selectmultiplecontextvalue"
title: "Interface: SelectMultipleContextValue"
sidebar_label: "SelectMultipleContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of a [SelectMultipleContext](../variables/selectmultiplecontext.md).

## Properties

### handleDayClick

• **handleDayClick**: [DayClickEventHandler](../types/dayclickeventhandler.md)

Event handler to attach to the day button to enable the multiple select.

___

### modifiers

• **modifiers**: `Pick`<[Modifiers](../types/modifiers.md), ``"disabled"`` \| ``"selected"``\>

The modifiers for the corresponding selection.

___

### selected

• **selected**: `undefined` \| `Date`[]

The days that have been selected.
