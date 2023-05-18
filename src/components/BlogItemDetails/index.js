// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
    isLoader: true,
  }

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({blogData: updatedData, isLoader: false})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {imageUrl, avatarUrl, author, content, title} = blogData
    return (
      <div className="container">
        <h1 className="heading">{title}</h1>
        <div className="mix">
          <img src={avatarUrl} className="avatar" alt={author} />
          <p>{author}</p>
        </div>
        <img src={imageUrl} className="imagesUrl" alt={title} />
        <p>{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderBlogItemDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
