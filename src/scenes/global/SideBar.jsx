import { useState } from "react";
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import logo from "/LogoERAS.png"

import "react-pro-sidebar/dist/css/styles.css";
import { mockDataMenu } from "../../data/mockDataMenu";


const iconComp = {
  "HomeOutlinedIcon": <HomeOutlinedIcon />,
  "PieChartOutlineOutlinedIcon": <PieChartOutlineOutlinedIcon />,
  "CalendarMonthIcon": <CalendarMonthIcon />
}


const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={iconComp[icon]}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

export const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >

      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                sx={{ cursor: 'default', userSelect: 'none' }}
              >
                <img
                  src={logo}
                  alt="logo"
                  style={{ width: "140px" }}
                />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center" sx={{ cursor: 'default', userSelect: 'none' }}>
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`http://192.168.194.52:85/media/usuarios/yojjwkska.jpeg`}
                  style={{ borderRadius: "50%", objectFit: "cover", userSelect: 'none' }}
                />
              </Box>
              <Box textAlign="center" sx={{ cursor: 'default', userSelect: 'none' }}>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Arthur Chávez
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Ing.Sistemas
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"} sx={{ cursor: 'default', userSelect: 'none' }}>

            {/* MENU DINAMICO */}
            {
              mockDataMenu.map((item) =>
                item.subItems ? (
                  <SubMenu
                    key={item.id}
                    title={item.title}
                    icon={iconComp[item.icon]}
                    style={{
                      cursor: 'default',
                      userSelect: 'none',
                      color: colors.grey[100],
                    }}
                  >
                    {item.subItems.map((subitem) => (
                      <Item
                        key={subitem.id}
                        title={subitem.title}
                        to={subitem.to}
                        icon={subitem.icon}
                        selected={selected}
                        setSelected={setSelected} />
                    ))}
                  </SubMenu>
                )
                  : (<Item
                    key={item.id}
                    title={item.title}
                    to={item.to}
                    icon={item.icon}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  )
              )
            }

            {/*
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <SubMenu
              title="Data"
              icon={<PieChartOutlineOutlinedIcon />}
              style={{
                cursor: 'default',
                userSelect: 'none',
                color: colors.grey[100],
              }}
            >
              <Item
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu> */}

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  )
}
