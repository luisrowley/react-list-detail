import { Avatar, Button, CircularProgress, Grid, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './detail-view.css';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import { deepPurple } from '@mui/material/colors';

const DetailView: React.FC<any> = (props: any) => {

  const { state } : any = useLocation();
  const [character, setCharacter]:any = React.useState({});
  const [loading, setLoading]:any = React.useState(false);

  useEffect(() => {
    setCharacter(state.row)
  }, [state])

  const setCharacterByName = async (charname: string) => {
    setLoading(true);
    let character = await props.charData.find((character: any) => character.name === charname);
    if(character) {
      setLoading(false);
      setCharacter(character);
    }
  }

  return (
    <main className="profile-container">
      <Grid container spacing={2} className="grid-main">
        <Grid item className="grid-section" xs={4}>
          { loading ? <CircularProgress/> : 
          <div style={{ width: 256, height: 400, alignItems: "center" }}>
          <Avatar 
            sx={{ width: 256, height: 256}}
            alt={character.name} src={character.thumbnail} />
            <div style={{marginTop: "20px"}}>{character.name}</div>
          </div>
          }
        </Grid>
        <Grid item container className="grid-section" xs={8}>
          <Grid item xs={12}>
          <List sx={{ float: "right", width: "750px" }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepPurple[100] }}>
                  <FaceRetouchingNaturalIcon color="secondary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Age" secondary={character.age} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepPurple[100] }}>
                  <ScaleIcon color="secondary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Weight" secondary={character.weight} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: deepPurple[100] }}>
                  <HeightIcon color="secondary" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Height" secondary={character.weight} />
            </ListItem>
          </List>
          </Grid>
          <Grid item xs={12}>
            {character.friends && character.friends.length > 0 ?
              character.friends.map((friend: string, i: number) => 
              <Button onClick={() => setCharacterByName(friend)} variant="outlined" sx={{ mr: 2 }} key={i}>
                {friend}
              </Button>
              ) :
              <div>No friends found :(</div>}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export default DetailView;
