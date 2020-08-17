## Work Day Scheduler

A standard work day calendar contains timeblocks from 9am - 6pm.
When the planner is opened, the current day is displayed at the top of the calendar.
When you scroll down, the time blocks are color-coded as gray for time that has past, blue for time that is present, and faded blue/teal for time in the future.
When I click 'Add' on a timeblock, a modal window opens for me to save an event.
Event is saved to localStorage.
When I refresh the page, any saved events persist.
```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Screenshot:

## Link to Live Page:


## Link to GitHub Repository:

https://github.com/ssevadjian/Day-Planner