import { Avatar, Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './detail-view.css';

const DetailView: React.FC<any> = (props: any) => {

  const { state } : any = useLocation();
  const [character, setCharacter]:any = React.useState({});

  useEffect(() => {
    setCharacter(state.row)
  }, [state])

  const setCharacterByName = (charname: string) => {
    setCharacter(props.charData.find((character: any) => character.name === charname));
  }

  return (
    <main className="profile-container">
      <Grid container spacing={2} className="grid-main">
        <Grid item className="grid-section" xs={4}>
          <div>
          <Avatar 
            sx={{ width: 256, height: 256 }}
            alt={character.name} src={character.thumbnail} />
            {character.name}
          </div>
        </Grid>
        <Grid container className="grid-section" xs={8}>
          <Grid item xs={12}>
            <div>xs=34</div>
            <div>xs=34</div>
            <div>xs=34</div>
            <div>xs=34</div>
          </Grid>
          <Grid item xs={12}>
            {character.friends && character.friends.length > 0 ?
              character.friends.map((friend: string, i: number) => 
              <Button onClick={() => setCharacterByName(friend)} variant="outlined" sx={{ mr: 2 }} key={i}>
                {friend}
              </Button>
              ) :
              <div>No friends found</div>}
          </Grid>
        </Grid>
      </Grid>
    </main>
  );
}

export default DetailView;
