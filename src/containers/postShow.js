import React, {Component} from "react";
import {connect} from "react-redux";
import {showPost, deletePost} from "../actions/index.js";
import {bindActionCreators} from "redux";
import {PropTypes} from "prop-types";
import {Link} from "react-router";

class PostShow extends Component{
  static contextTypes = {
    router: PropTypes.object
  }
  componentWillMount(){
    this.props.showPost(this.props.params.id);
  }

  onDeleteClick = () => {
    this.props.deletePost(this.props.params.id)
      .then(() => {
        this.context.router.push("/");
      })
  }
  render(){
    const {post} = this.props;
    // same as => const post = this.props.post
    if(!post){
      return(
        <div>Loading</div>
      )
    }
    if(post.id != this.props.params.id){
      return(
        <div>Loading</div>
      )
    }

    return(
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>Content: {post.content} </p>
        <button onClick={() => this.onDeleteClick()} className="btn btn-danger pull-xs-right">Delete</button>
        <Link className="btn btn-primary" to="/">Back</Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return({
    post: state.posts.post
  })
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({showPost: showPost, deletePost: deletePost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);
