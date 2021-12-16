import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import style from './News.module.css'
import newsImg1 from '../../img/news1.jpg'

class News extends React.Component {
    render() {
        return  <div className={style.newsBlock}> 
        {this.props.news.map(n=> <div key={n.id}> 
           <Card className={style.card} sx={{ maxWidth: 500 }}>
   <CardMedia
     component="img"
     alt="house"
     height="280"
     image= {newsImg1}
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="div">
    <div> {n.title} </div>
     </Typography>
     <Typography variant="body2" color="text.secondary">
     <div> {n.date} </div>
     </Typography>
   </CardContent>
   <CardActions>
     <Button size="small">Узнать больше</Button>
   </CardActions>
 </Card>
       </div>)}
</div>
    }
}
export default News