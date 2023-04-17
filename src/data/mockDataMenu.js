export const mockDataMenu = [
    {
        id:1,
        title: "Dasboard",
        to: "/",
        icon: "HomeOutlinedIcon",
    },
    {
        id:2,
        title: "Empleados",
        to: "/employes",
        icon: "PieChartOutlineOutlinedIcon",
    },
    {
        id:3,
        title: "Agenda",
        to: "/calendar",
        icon: "CalendarMonthIcon",
        subItems:[
            {
                id:1,
                title: "Day",
                to: "/day",
                icon: "CalendarMonthIcon",
            },
            {
                id:2,
                title: "Week",
                to: "/week",
                icon: "CalendarMonthIcon",
            },
            {
                id:3,
                title: "Month",
                to: "/month",
                icon: "CalendarMonthIcon",
            },
        ]
    },
    /* {
        titleGroup: "Data",
        items: [
            {
                title: "Manage Team",
                to: "/team",
                icon: "PeopleOutlinedIcon",
            },
        ]
    },
    {
        titleGroup: "Horarios",
        items: [
            {
                title: "Calendar",
                to: "/calendar",
                icon: "CalendarTodayOutlinedIcon",
                subitem: [
                    {
                        title: "Day",
                        to: "/day",
                        icon: "CalendarTodayOutlinedIcon",
                    },
                    {
                        title: "Week",
                        to: "/day",
                        icon: "CalendarTodayOutlinedIcon",
                    },
                    {
                        title: "Month",
                        to: "/month",
                        icon: "CalendarTodayOutlinedIcon",
                    },
                ]
            },
            {
                title: "Agenda",
                to: "/agent",
                icon: "CalendarTodayOutlinedIcon",
            }
        ]
    } */
]