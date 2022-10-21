import { AccountBox, CardMembership, Category, MonitorHeart, SwitchAccount, ViewQuilt } from '@mui/icons-material'

const iconColor = '#9C9CC8'

export const SidebarData = [
    {
        title: "Employee",
        icon: <ViewQuilt sx={{color: iconColor}}/>,
        link: "/"
    },
    {
        title: "Categories",
        icon: <Category sx={{color: iconColor}}/>,
        link: "/categories"
    },
    {
        title: "Skills",
        icon: <AccountBox sx={{color: iconColor}}/>,
        link: "/skills"
    },
    {
        title: "Certificates",
        icon: <CardMembership sx={{color: iconColor}}/>,
        link: "/certificates"
    },
    {
        title: "Projects",
        icon: <MonitorHeart sx={{color: iconColor}}/>,
        link: "/projects"
    },
    {
        title: "Role Mgt.",
        icon: <SwitchAccount sx={{color: iconColor}}/>,
        link: "/role"
    },
]