import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function ListDividers() {

    return (
        <div className="Main">
            <List component="nav" aria-label="mailbox folders">
                <ListItem button>
                    <svg className="mui"><AccountCircleIcon sx={{ fontSize: 30 }} /> </svg>
                    <ListItemText secondary="Account information" />
                </ListItem>
                <Divider />
                <ListItem button divider>
                    <svg className="mui"><WorkOutlineIcon sx={{ fontSize: 30 }} /> </svg>
                    <ListItemText secondary="Change your password" />
                </ListItem>
                <ListItem button>
                    <ListItemText primary="Other settings" />
                </ListItem>
                <ListItem button>
                    <ListItemText secondary="Clear browser history" />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText secondary="pause my search" />
                    <Switch defaultChecked />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText secondary="Allow spark india to access your location" />
                    <Switch />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText secondary="Allow spark india to access contact list" />
                    <Switch defaultChecked />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText secondary="Allow spark india to access microphone" />
                    <Switch />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemText secondary="Allow spark india to access camera" />
                    <Switch defaultChecked />
                </ListItem>
            </List>
        </div>
    );
}
