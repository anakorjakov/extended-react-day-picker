import React from 'react';
import { DateRange, ModifierStatus, StyledComponentProps } from '../../../types';
import { SelectMultipleContextValue } from '../../../contexts/SelectMultiple';
import { SelectRangeContextValue } from '../../../contexts/SelectRange';
import { SelectSingleContextValue } from '../../../contexts/SelectSingle';
export declare type UseDay = {
    /** Whether the date is outside the display month/ */
    isOutside: boolean;
    /** The modifiers for the given date. */
    modifiers: ModifierStatus;
    /** The days in DayPicker currently selected. */
    selected: Date | Date[] | DateRange | undefined;
    /**
     * The props for rendering the day as interactive element.
     *
     * When `undefined`, DayPicker should render a non interactive element with non-interactive
     * props.
     */
    buttonProps?: Omit<React.HTMLProps<HTMLButtonElement>, 'ref'>;
    /**
     * The props for rendering the day as not interactive element.
     *
     * When both this value and `buttonProps` are `undefined`, DayPicker should not render anything.
     */
    nonInteractiveProps?: StyledComponentProps;
    single: SelectSingleContextValue;
    multiple: SelectMultipleContextValue;
    range: SelectRangeContextValue;
};
/**
 * This hook returns details about the content to render in the day cell.
 *
 *
 * When a day cell is rendered in the table, DayPicker can either:
 *
 * - render nothing: when the day is outside the month or has matched the
 *   "hidden" modifier.
 * - render a button. When a selection mode is set, DayPicker renders a button
 *   to allow the focus and the selection. In case of `uncontrolled` selection
 *   mode, DayPicker expects a `onDayClick` prop to render a button.
 * - render a non-interactive element: when no selection mode is set, the day
 *   cell shouldn’t respond to any interaction. DayPicker should render a `div`
 *   or a `span`.
 *
 * ### Usage
 *
 * Use this hook to customize the behavior of the [[Day]] component. Create a
 * new `Day` component using this hook and pass it to the `components` prop.
 * The source of [[Day]] can be a good starting point.
 *
 * */
export declare function useDay(
/** The day rendered in the month. */
date: Date, 
/** The month where the date is displayed. DayPicker renders days outside the display month when `showOutsideDays` is true. */
displayMonth: Date, 
/** A ref to the button element. */
buttonRef: React.RefObject<HTMLButtonElement>): UseDay;
