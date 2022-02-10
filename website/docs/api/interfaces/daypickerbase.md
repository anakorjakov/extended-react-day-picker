---
id: "daypickerbase"
title: "Interface: DayPickerBase"
sidebar_label: "DayPickerBase"
sidebar_position: 0
custom_edit_url: null
---

The shared props for the [DayPicker](../functions/daypicker.md) component.

## Properties

### captionLayout

• `Optional` **captionLayout**: ``"dropdown"`` \| ``"buttons"``

Change the layout of the caption:

- `buttons` (default): display prev/right buttons
- `dropdown`: display drop-downs to change the month and the year

**Note** `dropdown` is valid only when `fromDate/fromMonth/fromYear` and
`toDate/toMonth/toYear` are set.

___

### className

• `Optional` **className**: `string`

CSS class to add to the root UI element.

___

### classNames

• `Optional` **classNames**: `Partial`<[StyledElement](../types/styledelement.md)<string\>\>

Change the class names.

Use this prop when you need to change the default class names — for example
when using CSS modules.

___

### components

• `Optional` **components**: `Partial`<[Components](components.md)\>

A map of components used to create the layout.

___

### defaultMonth

• `Optional` **defaultMonth**: `Date`

The initial month to show in the calendar. Default is the current month.

As opposed to [month](daypickerbase.md#month), use this prop to let DayPicker control the current
month.

___

### defaultSelected

• `Optional` **defaultSelected**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [DateRange](../types/daterange.md) \| [DateBefore](../types/datebefore.md) \| [DateAfter](../types/dateafter.md) \| [DateInterval](../types/dateinterval.md) \| [DayOfWeek](../types/dayofweek.md) \| [Matcher](../types/matcher.md)[]

The default selected days when the `mode` is `single`, `multiple` or `range`.

___

### dir

• `Optional` **dir**: `string`

The text direction of the calendar. Use `ltr` for left-to-right (default)
or `rtl` for right-to-left.

___

### disableNavigation

• `Optional` **disableNavigation**: `boolean`

Disable the navigation between months.

___

### disabled

• `Optional` **disabled**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [DateRange](../types/daterange.md) \| [DateBefore](../types/datebefore.md) \| [DateAfter](../types/dateafter.md) \| [DateInterval](../types/dateinterval.md) \| [DayOfWeek](../types/dayofweek.md) \| [Matcher](../types/matcher.md)[]

Apply the `disabled` modifier to the matching days.

___

### fixedWeeks

• `Optional` **fixedWeeks**: `boolean`

Display six weeks per months, regardless the month’s number of weeks.
To use this prop, [showOutsideDays](daypickerbase.md#showoutsidedays) must be set. Default to `false`.

___

### footer

• `Optional` **footer**: `ReactNode`

Content to add to the `tfoot` element.

___

### formatters

• `Optional` **formatters**: `Partial`<[Formatters](../types/formatters.md)\>

A map of formatters to change the default formatting functions.

___

### fromDate

• `Optional` **fromDate**: `Date`

The earliest day to start the month navigation.

___

### fromMonth

• `Optional` **fromMonth**: `Date`

The earliest month to start the month navigation.

___

### fromYear

• `Optional` **fromYear**: `number`

The earliest year to start the month navigation.

___

### hidden

• `Optional` **hidden**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [DateRange](../types/daterange.md) \| [DateBefore](../types/datebefore.md) \| [DateAfter](../types/dateafter.md) \| [DateInterval](../types/dateinterval.md) \| [DayOfWeek](../types/dayofweek.md) \| [Matcher](../types/matcher.md)[]

Apply the `hidden` modifier to the matching days. Will hide them from the
calendar.

___

### hideHead

• `Optional` **hideHead**: `boolean`

Hide the month’s head displaying the weekday names.

___

### labels

• `Optional` **labels**: `Partial`<[Labels](../types/labels.md)\>

A map of labels creators used for the ARIA labels attributes.

___

### locale

• `Optional` **locale**: `Locale`

The date-fns locale object to localize the user interface. Defaults to
`en-US`.

___

### max

• `Optional` **max**: `number`

When in multiple or range selection mode, the maximum amount of days that
can be selected.

___

### min

• `Optional` **min**: `number`

When in multiple or range selection mode, the minimum amount of days that
can be selected.

___

### mode

• `Optional` **mode**: ``"uncontrolled"`` \| ``"single"`` \| ``"multiple"`` \| ``"range"``

Toggle the controlled selection mode.

- `uncontrolled`: disable the controlled selection mode
- `single`: control the selection of single days
- `multiple`: control the selection of multiple days
- `range`: control the selection of a range of days

___

### modifierClassNames

• `Optional` **modifierClassNames**: `Record`<string, string\>

Change the class name for the day matching the [modifiers](daypickerbase.md#modifiers).

___

### modifierPrefix

• `Optional` **modifierPrefix**: `string`

The prefix to add to the modifiers class names. Default is `rdp-day_`.

Each day will get a `${modifierPrefix}${modifier}` class name when matching
a modifier.

___

### modifierStyles

• `Optional` **modifierStyles**: `Record`<string, CSSProperties\>

Change the inline style for the day matching the [modifiers](daypickerbase.md#modifiers).

___

### modifiers

• `Optional` **modifiers**: `Record`<string, (`date`: `Date`) => `boolean` \| Date \| Date[] \| [DateRange](../types/daterange.md) \| [DateBefore](../types/datebefore.md) \| [DateAfter](../types/dateafter.md) \| [DateInterval](../types/dateinterval.md) \| [DayOfWeek](../types/dayofweek.md) \| [Matcher](../types/matcher.md)[]\>

Add modifiers to the matching days.

___

### month

• `Optional` **month**: `Date`

The month to display in the calendar.

As opposed to [defaultMonth](daypickerbase.md#defaultmonth), use this prop with [onMonthChange](daypickerbase.md#onmonthchange) to
change the month programmatically.

___

### numberOfMonths

• `Optional` **numberOfMonths**: `number`

The number of displayed months. Defaults to `1`.

___

### onDayBlur

• `Optional` **onDayBlur**: [DayFocusEventHandler](../types/dayfocuseventhandler.md)

___

### onDayClick

• `Optional` **onDayClick**: [DayClickEventHandler](../types/dayclickeventhandler.md)

___

### onDayFocus

• `Optional` **onDayFocus**: [DayFocusEventHandler](../types/dayfocuseventhandler.md)

___

### onDayKeyDown

• `Optional` **onDayKeyDown**: [DayKeyboardEventHandler](../types/daykeyboardeventhandler.md)

___

### onDayKeyPress

• `Optional` **onDayKeyPress**: [DayKeyboardEventHandler](../types/daykeyboardeventhandler.md)

___

### onDayKeyUp

• `Optional` **onDayKeyUp**: [DayKeyboardEventHandler](../types/daykeyboardeventhandler.md)

___

### onDayMouseEnter

• `Optional` **onDayMouseEnter**: [DayMouseEventHandler](../types/daymouseeventhandler.md)

___

### onDayMouseLeave

• `Optional` **onDayMouseLeave**: [DayMouseEventHandler](../types/daymouseeventhandler.md)

___

### onDayTouchCancel

• `Optional` **onDayTouchCancel**: [DayTouchEventHandler](../types/daytoucheventhandler.md)

___

### onDayTouchEnd

• `Optional` **onDayTouchEnd**: [DayTouchEventHandler](../types/daytoucheventhandler.md)

___

### onDayTouchMove

• `Optional` **onDayTouchMove**: [DayTouchEventHandler](../types/daytoucheventhandler.md)

___

### onDayTouchStart

• `Optional` **onDayTouchStart**: [DayTouchEventHandler](../types/daytoucheventhandler.md)

___

### onMonthChange

• `Optional` **onMonthChange**: [MonthChangeEventHandler](../types/monthchangeeventhandler.md)

Event fired when the user navigates between months.

___

### onNextClick

• `Optional` **onNextClick**: [MonthChangeEventHandler](../types/monthchangeeventhandler.md)

___

### onPrevClick

• `Optional` **onPrevClick**: [MonthChangeEventHandler](../types/monthchangeeventhandler.md)

___

### onSelect

• `Optional` **onSelect**: [SelectSingleEventHandler](selectsingleeventhandler.md) \| [SelectMultipleEventHandler](../types/selectmultipleeventhandler.md) \| [SelectRangeEventHandler](../types/selectrangeeventhandler.md)

Event handler when a day is selected (valid only in controlled selection mode).

___

### onWeekNumberClick

• `Optional` **onWeekNumberClick**: [WeekNumberClickEventHandler](../types/weeknumberclickeventhandler.md)

___

### pagedNavigation

• `Optional` **pagedNavigation**: `boolean`

Paginate the month navigation displaying the [numberOfMonths](daypickerbase.md#numberofmonths) at time.

___

### required

• `Optional` **required**: `boolean`

When in single selection mode, make the selection required.

___

### reverseMonths

• `Optional` **reverseMonths**: `boolean`

Render the months in reversed order (when [numberOfMonths](daypickerbase.md#numberofmonths) is greater
than `1`) to display the most recent month first.

___

### selected

• `Optional` **selected**: (`date`: `Date`) => `boolean` \| `Date` \| `Date`[] \| [DateRange](../types/daterange.md) \| [DateBefore](../types/datebefore.md) \| [DateAfter](../types/dateafter.md) \| [DateInterval](../types/dateinterval.md) \| [DayOfWeek](../types/dayofweek.md) \| [Matcher](../types/matcher.md)[]

Apply the `selected` modifier to the matching days.

___

### showOutsideDays

• `Optional` **showOutsideDays**: `boolean`

Show the outside days.  An outside day is a day falling in the next or the
previous month. Default is `false`.

___

### showWeekNumber

• `Optional` **showWeekNumber**: `boolean`

Show the week numbers column. Default to `false`.

___

### style

• `Optional` **style**: `CSSProperties`

Style to apply to the container element.

___

### styles

• `Optional` **styles**: `Partial`<[StyledElement](../types/styledelement.md)<CSSProperties\>\>

Change the inline styles for each UIElement.

___

### toDate

• `Optional` **toDate**: `Date`

The latest day to end the month navigation.

___

### toMonth

• `Optional` **toMonth**: `Date`

The latest month to end the month navigation.

___

### toYear

• `Optional` **toYear**: `number`

The latest year to end the month navigation.

___

### today

• `Optional` **today**: `Date`

The today’s date. Default is the current date. This Date will get the
`today` modifier to style the day.
