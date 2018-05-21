import React from 'react';


class Comment extends React.Component{
	getInitialState(){
					return {editing:false}
				}
				edit(){
					this.setState({editing:true});
				}
				remove(){
					console.log('removing comment');
					this.props.deleteFromBoard(this.props.index)
				}
				save(){
					var val= this.refs.newText.value;
					console.log("New Comment:",val);
					this.setState({editing:false});
					this.props.updateCommentText(val,this.props.index);
				}
				renderNormal(){
					return (
							<div className="commentContainer">
								<div className="commentText">
									{this.props.children}
								</div>
									<button onClick={this.edit} className="btn-primary">Edit</button>
									&nbsp; &nbsp;	
									<button onClick={this.remove} className="btn-danger">Remove</button>
							</div>
						);

				}
				renderForm(){
					return (
							<div className="commentContainer">
								<textarea ref="newText" defaultValue={this.props.children}></textarea>
									<button onClick={this.save} className="btn-success">save</button>
							</div>
						);

				}
				render(){
					if(this.state.editing){
						return this.renderForm();
					}
					else
					{
						return this.renderNormal();
					}

				}

}

class Board extends React.Component{
	getInitialState(){
				return (
					comments: []
				);
			}
			add(text){
				var arr = this.state.comments;
				arr.push(text);
				this.setState({comments:arr})
				console.log('add button');
			}
			eachComment(text,i){
				return (<Comment key={i} index={i} updateCommentText={this.updateComment} deleteFromBoard={this.removeComment}>
						{text}
						</Comment>);
			}
			removeComment(i){
				console.log('removing comment:',i);
				var arr = this.state.comments;
				arr.splice(i,1);
				this.setState({comments: arr})
			}
			updateComment(newText,i){
				console.log('Updating Comment');
				var arr =this.state.comments;
				arr[i]=newText;
				this.setState({comments:arr});
			}
			render() {
				return (
					<div>
						<button onClick={this.add.bind(null,'learn reactjs')} className="btn-info create"> Add New </button>
						<div className="board">
							{this.state.comments.map(this.eachComment)}
						</div>
					</div>
					);
			}
}
//////////////////////////////////////////

export default Board;