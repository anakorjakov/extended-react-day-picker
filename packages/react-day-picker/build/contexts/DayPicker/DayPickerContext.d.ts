import * as React from 'react';
/**
 * The DayPicker context shares the props passed to DayPicker within the
 * internal components. It is used to set the default values and  perform
 * one-time calculations required to render the days.
 *
 * Access this context from the [[useDayPicker]] hook when using custom
 * components.
 */
export declare const DayPickerContext: React.Context<(import("../..").DayPickerBase & import("../..").DayPickerRange & {
    captionLayout: import("../..").CaptionLayout;
    classNames: Required<Partial<import("../..").StyledElement<string>>>;
    components: import("../..").Components;
    formatters: import("../..").Formatters;
    labels: import("../..").Labels;
    locale: Locale;
    modifierClassNames: Record<string, string>;
    modifierPrefix: string;
    modifiers: import("../..").Modifiers;
    numberOfMonths: number;
    styles: Partial<import("../..").StyledElement<React.CSSProperties>>;
    today: Date;
    toYear?: undefined;
    fromYear?: undefined;
    toMonth?: undefined;
    fromMonth?: undefined;
}) | (import("../..").DayPickerBase & import("../..").DayPickerMultiple & {
    captionLayout: import("../..").CaptionLayout;
    classNames: Required<Partial<import("../..").StyledElement<string>>>;
    components: import("../..").Components;
    formatters: import("../..").Formatters;
    labels: import("../..").Labels;
    locale: Locale;
    modifierClassNames: Record<string, string>;
    modifierPrefix: string;
    modifiers: import("../..").Modifiers;
    numberOfMonths: number;
    styles: Partial<import("../..").StyledElement<React.CSSProperties>>;
    today: Date;
    toYear?: undefined;
    fromYear?: undefined;
    toMonth?: undefined;
    fromMonth?: undefined;
}) | (import("../..").DayPickerBase & import("../..").DayPickerSingle & {
    captionLayout: import("../..").CaptionLayout;
    classNames: Required<Partial<import("../..").StyledElement<string>>>;
    components: import("../..").Components;
    formatters: import("../..").Formatters;
    labels: import("../..").Labels;
    locale: Locale;
    modifierClassNames: Record<string, string>;
    modifierPrefix: string;
    modifiers: import("../..").Modifiers;
    numberOfMonths: number;
    styles: Partial<import("../..").StyledElement<React.CSSProperties>>;
    today: Date;
    toYear?: undefined;
    fromYear?: undefined;
    toMonth?: undefined;
    fromMonth?: undefined;
}) | (import("../..").DayPickerBase & import("../..").DayPickerUncontrolled & {
    captionLayout: import("../..").CaptionLayout;
    classNames: Required<Partial<import("../..").StyledElement<string>>>;
    components: import("../..").Components;
    formatters: import("../..").Formatters;
    labels: import("../..").Labels;
    locale: Locale;
    modifierClassNames: Record<string, string>;
    modifierPrefix: string;
    modifiers: import("../..").Modifiers;
    numberOfMonths: number;
    styles: Partial<import("../..").StyledElement<React.CSSProperties>>;
    today: Date;
    toYear?: undefined;
    fromYear?: undefined;
    toMonth?: undefined;
    fromMonth?: undefined;
}) | undefined>;
