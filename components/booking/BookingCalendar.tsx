"use client";

import { useState } from "react";
import { DayPicker, DateRange } from "react-day-picker";
import { format, differenceInDays } from "date-fns";
import "react-day-picker/style.css";
import "@/app/booking-calendar.css";

interface BookingCalendarProps {
  onDateChange?: (range: DateRange | undefined) => void;
}

export default function BookingCalendar({ onDateChange }: BookingCalendarProps) {
  const [range, setRange] = useState<DateRange | undefined>();

  const handleSelect = (newRange: DateRange | undefined) => {
    setRange(newRange);
    onDateChange?.(newRange);
  };

  const nights = range?.from && range?.to
    ? differenceInDays(range.to, range.from)
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-primary-dark text-base font-medium mb-6">
        Select Dates
      </h3>

      {/* Calendar */}
      <div className="mb-6 booking-calendar">
        <DayPicker
          mode="range"
          selected={range}
          onSelect={handleSelect}
          disabled={{ before: new Date() }}
          numberOfMonths={1}
          classNames={{
            root: "rdp-custom",
            months: "rdp-months",
            month: "rdp-month",
            month_caption: "rdp-caption",
            caption_label: "text-primary-dark text-base font-normal mb-4",
            nav: "rdp-nav",
            button_previous: "rdp-nav-button rdp-nav-button-previous",
            button_next: "rdp-nav-button rdp-nav-button-next",
            month_grid: "rdp-table",
            weekdays: "rdp-head",
            weekday: "text-primary text-sm font-normal",
            weeks: "rdp-tbody",
            week: "rdp-week",
            day: "rdp-day text-primary-dark",
            day_button: "rdp-day-button w-10 h-10 rounded-none hover:bg-primary/10 transition-colors",
            selected: "bg-primary text-surface hover:bg-primary/90",
            range_start: "bg-primary text-surface rounded-l",
            range_end: "bg-primary text-surface rounded-r",
            range_middle: "bg-primary/20 text-primary-dark",
            disabled: "text-gray-300 cursor-not-allowed hover:bg-transparent",
            outside: "text-gray-400",
            today: "font-bold border border-primary/30",
          }}
        />
      </div>

      {/* Date Display */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        <div>
          <div className="text-primary text-xs font-normal mb-1">Check-in</div>
          <div className="text-primary-dark text-base">
            {range?.from ? format(range.from, "MMM d") : "-"}
          </div>
        </div>
        <div>
          <div className="text-primary text-xs font-normal mb-1">Check-out</div>
          <div className="text-primary-dark text-base">
            {range?.to ? format(range.to, "MMM d") : "-"}
          </div>
        </div>
        <div>
          <div className="text-primary text-xs font-normal mb-1">Nights</div>
          <div className="text-primary-dark text-base">
            {nights > 0 ? nights : "-"}
          </div>
        </div>
      </div>
    </div>
  );
}
