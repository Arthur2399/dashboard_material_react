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
            {
                title: "Contacts Information",
                to: "/contacts",
                icon: "ContactsOutlinedIcon",
            },
            {
                title: "Invoices Balances",
                to: "/invoices",
                icon: "ReceiptOutlinedIcon",
            },
        ]
    },
    {
        titleGroup: "Pages",
        items: [
            {
                title: "Profile Form",
                to: "/form",
                icon: "PersonOutlinedIcon",
            },
            {
                title: "Calendar",
                to: "/calendar",
                icon: "CalendarTodayOutlinedIcon",
            },
            {
                title: "FAQ Page",
                to: "/faq",
                icon: "HelpOutlineOutlinedIcon",
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
                        subitem: [
                            {
                                title: "Bimester",
                                to: "/bimester",
                                icon: "CalendarTodayOutlinedIcon",
                            },
                        ]
                    },
                ]
            },
        ]
    }
]