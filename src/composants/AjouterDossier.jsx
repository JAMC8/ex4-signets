import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { TwitterPicker } from 'react-color';

export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#537169');

  const styles = 
  {
    champText:
    {
      margin: '15px 0'
    },
    sectionBtns:
    {
      margin: '10px'
    },
    texteBtn:
    {
      color: 'white'
    },
    btnVert:
    {
      background: '#009914'
    },
    btnRouge:
    {
      background: '#990000'
    }
  }

  function viderChamps() {
    setNom('');
    setCouverture('');
    setCouleur('#537169');
  }

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
            defaultValue={nom}

            style={{...styles.champText}}
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
            defaultValue={couverture}

            style={{...styles.champText}}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
            colors={['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3']}
            color={couleur}
          />
        </DialogContent>
        <DialogActions style={{...styles.sectionBtns}}>
          <Button onClick={()=>{setOuvert(false); viderChamps()}} color="primary" style={{...styles.btnRouge, ...styles.texteBtn}} >
            Annuler
          </Button>
          <Button onClick={() => {nom !== '' && gererAjout(nom, couverture, couleur); viderChamps(); }} color="primary" style={{...styles.btnVert, ...styles.texteBtn}}>
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}