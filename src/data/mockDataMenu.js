export const mockDataMenu = [
    {
        title: "Dasboard",
        to: "/",
        icon: "HomeOutlinedIcon",
    },
    {
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
    }
]