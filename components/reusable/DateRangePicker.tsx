"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";

export function DateRangePicker() {
    const [date, setDate] = React.useState<DateRange | undefined>({
        from: new Date(),
        to: new Date(),
    });

    return (
        <div className="flex w-full  p-0  ">
            <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={1}
            />
        </div>
    );
}
