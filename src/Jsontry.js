import React,{Component} from 'react';

class Jsontry extends React.Component{
	constructor(){
		super();
		this.state={
			data:[
				{
					id:1,
					name:'teju'
				},
				{
					id:2,
					name:'riya'
				},
				{
					id:3,
					name:'tiya'
				},
				{
					id:4,
					name:'diya'
				}
			]
		}
	}

	render(){
		return(
			<div>
				{
					this.state.data.map(
						(dynamicData,i) =>
						<p>{dynamicData.name}</p>
					)
				}
			</div>
			)
	}


}

export default Jsontry;