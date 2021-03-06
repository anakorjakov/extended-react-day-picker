/**
 * The props for the [[WeekNumber]] component.
 */
export interface WeekNumberProps {
    /** The number of the week. */
    number: number;
    /** The dates in the week. */
    dates: Date[];
}
/**
 * Render the week number element. If `onWeekNumberClick` is passed to DayPicker, it
 * renders a button, otherwise a span element.
 */
export declare function WeekNumber(props: WeekNumberProps): JSX.Element;
