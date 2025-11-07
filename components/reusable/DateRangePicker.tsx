"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
type DatePickerProps = {
    date?: Date;
    onSelect?: (value: Date | undefined) => void;
};

export function DateRangePicker({ date, onSelect }: DatePickerProps) {
    const [internalDate, setInternalDate] = React.useState<Date | undefined>(new Date());

    const resolvedDate = date ?? internalDate;

    const handleSelect = (value: Date | undefined) => {
        if (!date) {
            setInternalDate(value);
        }
        onSelect?.(value);
    };

    return (
        <div className="flex w-full  p-0  ">
            <Calendar
                initialFocus
                mode="single"
                defaultMonth={resolvedDate}
                selected={resolvedDate}
                onSelect={handleSelect}
                numberOfMonths={1}
            />
        </div>
    );
}
