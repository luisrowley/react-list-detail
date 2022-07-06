import { Avatar, Button, CircularProgress, Grid } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './detail-view.css';
import { Character } from '../../interfaces/character';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PropertyList from '../../components/property-list/property-list';
import { GlobalContext } from '../../data/context';

const DetailView: React.FC<any> = () => {

  const { state } : any = useLocation();
  const [character, setCharacter]:any = React.useState({});
  const { charData } = useContext(GlobalContext);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setCharacter(state.row)
  }, [state])

  const setCharacterByName = async (charname: string) => {
    setLoading(true);
    let character = await charData.find((character: Character) => character.name === charname);
    if(character) {
      setLoading(false);
      setCharacter(character);
    }
  }

  return (
    <main className="profile-container">
      <Link to={'/'}>
        <ArrowBackIcon fontSize="large" className="back-btn"/>
      </Link>
      <Grid container spacing={2} className="grid-main">
        <Grid item className="grid-section" xs={4} sx={{ display: "flex", justifyContent: "center" }}>
          { loading ? <CircularProgress/> : 
          <div style={{ width: 256, height: 400, alignItems: "center" }}>
          <Avatar 
            sx={{ width: 256, height: 256}}
            alt={character.name} src={character.thumbnail} />
            <h4 style={{marginTop: "20px"}}>{character.name}</h4>
          </div>
          }
        </Grid>
        <Grid item container className="grid-section" xs={8}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <PropertyList character={character} >
            </PropertyList>
          </Grid>
          <Grid item xs={12}>
            <h4>Friends: </h4>
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
