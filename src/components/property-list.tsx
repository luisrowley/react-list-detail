import { List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';

const PropertyList: React.FC<any> = (props: any) => {

    return (
    <List sx={{ width: "500px", display: "flex" }}>
        <ListItem>
            <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[100] }}>
                <FaceRetouchingNaturalIcon color="secondary" />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Age" secondary={props.character.age} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[100] }}>
                <ScaleIcon color="secondary" />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Weight" secondary={props.character.weight} />
        </ListItem>
        <ListItem>
            <ListItemAvatar>
            <Avatar sx={{ bgcolor: deepPurple[100] }}>
                <HeightIcon color="secondary" />
            </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Height" secondary={props.character.weight} />
        </ListItem>
    </List>
    );
}

export default PropertyList;