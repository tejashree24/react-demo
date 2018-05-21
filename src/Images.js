import React from 'react';
import ReactDOM from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import e from './images/e.jpg';
import f from './images/f.jpg';
import g from './images/g.jpg';
import h from './images/h.jpg';


const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
	{
		img:a,
		title:'aaaaaaaa'
	},
	{
		img:b,
		title:'bbbbbbbb'
	},
	{
		img:c,
		title: 'ccccccc'
	},
	{
		img:d,
		title: 'dddddddd'
	},
	{
		img:e,
		title: 'dddddddd'
	},
	{
		img:f,
		title: 'dddddddd'
	},
	{
		img:g,
		title: 'dddddddd'
	},
	{
		img:h,
		title: 'dddddddd'
	}
	]

class Images extends React.Component{
	render(){
		return(
				<div style={styles.root}>
					<GridList cellHeight={180}
							style={styles.gridList}>

						{tilesData.map((tile) => (
					        <GridTile
					          key={tile.img}
					          title={tile.title}
					          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
					        >
					          <img src={tile.img} />
					        </GridTile>
					      ))}
					</GridList>
				</div>
			);

	}
}

export default Images;
