import { useState, useEffect, useMemo } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import Box from "@mui/material/Box";
import { hu } from "date-fns/locale";
import { client } from "../lib/client";

const firstLastDayOfMonth = (now) => {
  let first = new Date(now.getFullYear(), now.getMonth(), 1)
    .toLocaleDateString()
    .replaceAll(".", "")
    .replaceAll(" ", "-");
  let last = new Date(now.getFullYear(), now.getMonth() + 1, 0)
    .toLocaleDateString()
    .replaceAll(".", "")
    .replaceAll(" ", "-");

  return { first, last };
};

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [runs, setRuns] = useState([]);

  const [shownEvent, setShownEvent] = useState({});

  const { distance, when, endDate, location, pace } = shownEvent || {};

  const getDates = useMemo(async () => {
    const { first: firstDate, last: lastDate } = firstLastDayOfMonth(
      new Date(currentMonth)
    );
    const responsone = await client
      .fetch(
        `*[_type == "sharedTrainingsDates" && when >= "${firstDate}" && when <= "${lastDate}" ]`
      )
      .then((data) => {
        setRuns(data);

        setShownEvent(
          data.find((event) => +event.when.split("-")[2] === value.getDate())
        );

        var eventDates = [];

        for (const event of data) {
          let { when } = event;

          eventDates.push(+when.split("-")[2]);
        }

        setHighlightedDays(eventDates);
      });
  }, [currentMonth, value]);

  const handleDayChange = (newValue) => {
    setValue(newValue);

    let selectedDay = new Date(newValue).getDate();

    let eventOfDay = runs.find((event) => {
      return +event.when.split("-")[2] === selectedDay;
    });

    setShownEvent(eventOfDay);
  };

  useEffect(() => {
    getDates();
  }, [currentMonth, getDates]);

  return (
    <Box sx={{ maxWidth: "350px" }}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={hu}>
        <StaticDatePicker
          // mask='____/__/__'
          disablePast={false}
          variant="static"
          orientation="portrait"
          toolbarFormat="MMMM d EEEE"
          minDate={new Date("01-01-2022")}
          value={value}
          onMonthChange={(value) => {
            setCurrentMonth(value);
          }}
          onChange={handleDayChange}
          renderInput={(params) => {
            <TextField {...params} />;
          }}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.getDate()) >= 0;

            return (
              <Badge
                key={day.toString()}
                overlap="circular"
                badgeContent={isSelected ? "🏃🏽‍♂️" : undefined}
              >
                <PickersDay {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </LocalizationProvider>

      {shownEvent && (
        <div className="runing-event">
          <div>
            <b>Ídőpont: </b> {when} {endDate && <> - {endDate}</>}
          </div>
          <div>
            <b>Helyszín: </b> {location}
          </div>
          <div>
            <b>Táv, szint: </b> {distance}
          </div>
          <div>
            <b>Tempó: </b> {pace}
          </div>
        </div>
      )}
    </Box>
  );
};

export default Calendar;
