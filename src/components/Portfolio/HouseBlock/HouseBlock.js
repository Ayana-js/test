import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import House1 from "../../../img/house1.jpg"
import style from '../../Portfolio/Portfolio.module.css'

const HouseBlock = (props) => {
    return <div className={style.portfolioBlock}> 
         {props.sortingItems.map(h=> <div key={h.id}> 
            <Card sx={{ maxWidth: 400 }} className={style.houseCard}>
    <CardMedia
      component="img"
      alt="house"
      height="200"
      image={House1}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
     <div> {h.name} </div>
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <div> {h.address} </div>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Узнать больше</Button>
    </CardActions>
  </Card>
        </div>)}
 </div>
}
export default HouseBlock