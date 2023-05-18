// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogsData: [],
    isLoader: true,
  }

  componentDidMount = () => {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const response = await fetch(' https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachData => ({
      author: eachData.author,
      avatarUrl: eachData.avatar_url,
      id: eachData.id,
      imageUrl: eachData.image_url,
      title: eachData.title,
      topic: eachData.topic,
    }))
    this.setState({blogsData: updatedData, isLoader: false})
  }

  render() {
    const {blogsData, isLoader} = this.state

    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(eachBlog => (
            <BlogItem blogsData={eachBlog} key={eachBlog.id} />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
