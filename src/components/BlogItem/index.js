// Write your JS code here
import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogsData} = this.props
    const {author, imageUrl, avatarUrl, title, topic, id} = blogsData

    return (
      //   <li className="list-item">
      <Link to={`/blogs/${id}`}>
        <div className="nc">
          <div>
            <img src={imageUrl} alt={title} className="images" />
          </div>
          <div>
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-con">
              <img src={avatarUrl} className="avatar" alt={author} />
              <p className="topic">{author}</p>
            </div>
          </div>
        </div>
      </Link>
      //   </li>
    )
  }
}

export default BlogItem
