const Months = [
    {
        name:"january",
        abbr:"jan",
        daysInMonth: 31
    },
    {
        name:"february",
        abbr:"feb",
        daysInMonth: 28
    },
    {
        name:"march",
        abbr:"mar",
        daysInMonth: 31
    },
    {
        name:"april",
        abbr:"apr",
        daysInMonth: 30
    },
    {
        name:"may",
        abbr:"may",
        daysInMonth: 31
    },
    {
        name:"june",
        abbr:"jun",
        daysInMonth: 30
    },
    {
        name:"july",
        abbr:"jul",
        daysInMonth: 31
    },
    {
        name:"august",
        abbr:"aug",
        daysInMonth: 31
    },
    {
        name:"september",
        abbr:"sep",
        daysInMonth: 30
    },
    {
        name:"october",
        abbr:"oct",
        daysInMonth: 31
    },
    {
        name:"november",
        abbr:"nov",
        daysInMonth: 30
    },
    {
        name:"december",
        abbr:"dec",
        daysInMonth: 31
    }
];

const currentDate   = new Date();
let monthIndex      = currentDate.getMonth();
// let monthIndex      = 0;

let month           = Months[monthIndex]["name"];
let year            = currentDate.getFullYear();
// let year            = 2018;

function setMonth(){
    const monthLabel        = document.getElementById("month");
    monthLabel.innerHTML    = month;
}

function setYear(){
    const yearLabel         = document.getElementById("year");
    yearLabel.innerHTML     = year;
}

function setLabel(){
    setMonth();
    setYear();
}

function getFirstWeek(){
    console.log("Get First Week...");
    const { firstDayIndex, previousMonthDays, firstWeekDays, firstWeekStartDate, firstWeekEmptyDays} = calendarData;
    console.log("First Week Start Date: "+calendarData.firstWeekStartDate);
    let calendarWeeks = document.getElementById("calendar-weeks");
    let currentDate;
    let firstWeekOutput = "<tr>";
    for(let i = 0; i < firstWeekEmptyDays; i++){

        currentDate     = firstWeekStartDate + i;
        firstWeekOutput += "<td>"+currentDate+"</td>";
        console.log(currentDate);
    }
    for(let j = 0; j < firstWeekDays; j++){

        currentDate     = j + 1;
        firstWeekOutput += "<td>"+currentDate+"</td>";
        console.log(currentDate);
    }
    firstWeekOutput         += "</tr>";
    calendarWeeks.innerHTML = firstWeekOutput;
}

function getFullWeeks(){
    console.log("Get Full Weeks...");
}

const calendarData = {};

function getPreviousMonthIndex(monthIndex){
    if(monthIndex == 0){
        return 11;
    }
    return monthIndex - 1;
}

function getCalendarWeeks(){
    let beginDate = new Date(year, monthIndex);
    // let beginDate = new Date(2019, 0);
    console.log("Calendar Weeks...");
    console.log(beginDate);
    calendarData.firstDayIndex      = calendarData.firstWeekEmptyDays = beginDate.getDay();
    calendarData.previousMonthDays  = Months[getPreviousMonthIndex(monthIndex)]["daysInMonth"];
    calendarData.firstWeekDays      = 7 - calendarData.firstDayIndex;
    calendarData.firstWeekStartDate = calendarData.previousMonthDays - (calendarData.firstDayIndex - 1);
    calendarData.daysInMonth        = Months[monthIndex]["daysInMonth"];
    calendarData.baseDays           = calendarData.daysInMonth - calendarData.firstWeekDays;
    calendarData.lastWeekDays       = calendarData.baseDays % 7;
    calendarData.fullWeeks          = Math.floor(calendarData.baseDays / 7);
    calendarData.totalWeeks         = (calendarData.lastWeekDays > 0) ? Math.floor(calendarData.baseDays / 7) + 2 : Math.floor(calendarData.baseDays / 7) + 1;
    
    console.log(calendarData);
    return calendarData;
}
