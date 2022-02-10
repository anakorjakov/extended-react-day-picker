---
id: "selectrangecontextvalue"
title: "Interface: SelectRangeContextValue"
sidebar_label: "SelectRangeContextValue"
sidebar_position: 0
custom_edit_url: null
---

Represents the value of a [SelectRangeContext](../variables/selectrangecontext.md).

## Properties

### handleDayClick

• **handleDayClick**: [DayClickEventHandler](../types/dayclickeventhandler.md)

Event handler to attach to the day button to enable the range select.

___

### modifiers

• **modifiers**: `Pick`<[Modifiers](../types/modifiers.md), ``"disabled"`` \| ``"selected"`` \| ``"range_start"`` \| ``"range_end"`` \| ``"range_middle"``\>

The modifiers for the corresponding selection.

___

### selected

• **selected**: `undefined` \| [DateRange](../types/daterange.md)

The range of days that has been selected.
