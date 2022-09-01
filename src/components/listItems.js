import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import BusinessIcon from '@mui/icons-material/DomainTwoTone';
//반출
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';//반출 신청
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';//반출 신청 내역
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';//반출 신청 내역(팀별)
import ListAltRoundedIcon from '@mui/icons-material/ListAltTwoTone';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import RoomPreferencesTwoToneIcon from '@mui/icons-material/RoomPreferencesTwoTone';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { NavLink } from 'react-router-dom';
import { Divider, Typography } from '@mui/material';
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import PolicyIcon from '@mui/icons-material/PolicyTwoTone';

const styleNavLink = {
  textDecoration:'none',
  color:'black',
}

export const mainListItems = (
  <React.Fragment>
    <NavLink to={'/'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="대시보드" />
      </ListItemButton>
    </NavLink>
    <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          업체<Divider variant="inset" component="li" />
    </Typography>
    <NavLink to={'/company/search'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="업체 검색" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/company/register'} style={styleNavLink}>
      <ListItemButton>
          <ListItemIcon>
            <DomainAddIcon />
          </ListItemIcon>
          <ListItemText primary="업체 등록 신청" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/company/history'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <ListAltRoundedIcon  />
        </ListItemIcon>
        <ListItemText primary="업체 등록 내역" />
      </ListItemButton>
    </NavLink>
    <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          내방<Divider variant="inset" component="li" />
    </Typography>
    <NavLink to={'/visit/register'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <MeetingRoomIcon />
        </ListItemIcon>
        <ListItemText primary="내방 신청" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/visit/history'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <RoomPreferencesTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="내방 신청 내역" />
      </ListItemButton>
    </NavLink>
    <Typography
          sx={{ mt: 0.5, ml: 2 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          반출<Divider variant="inset" component="li" />
    </Typography>
    <NavLink to={'/takeout/register'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <MedicalServicesIcon />
        </ListItemIcon>
        <ListItemText primary="반출 신청" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/takeout/history'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <WorkHistoryIcon />
        </ListItemIcon>
        <ListItemText primary="반출 신청 내역" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/takeout/history/team'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <WorkHistoryTwoToneIcon />
        </ListItemIcon>
        <ListItemText primary="반출 신청 내역(팀별)" />
      </ListItemButton>
    </NavLink>
    <Typography
          sx={{ mt: 0.5, ml: 1 }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
        출입권한<Divider variant="inset" component="li" />
    </Typography>
    <NavLink to={'/access/register'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <AddModeratorIcon />
        </ListItemIcon>
        <ListItemText primary="출입권한 신청" />
      </ListItemButton>
    </NavLink>
    <NavLink to={'/access/history'} style={styleNavLink}>
      <ListItemButton>
        <ListItemIcon>
          <PolicyIcon />
        </ListItemIcon>
        <ListItemText primary="출입권한 신청내역" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <Typography
          sx={{ mt: 0.5, ml: 1,color:'#A52A2A' }}
          color="text.secondary"
          display="block"
          variant="caption"
        >
          관리자
    </Typography>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="내방 목록" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="반출입 목록" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="출입(카드리더기)등록 목록" />
    </ListItemButton>
    내방객 정보<Divider variant="inset" component="li" />
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="내방객 목록" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="방문 거부자 목록" />
    </ListItemButton>
    권한 관리<Divider variant="inset" component="li" />
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="내방객 목록" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="방문 거부자 목록" />
    </ListItemButton>
  </React.Fragment>
);

export const adminListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);