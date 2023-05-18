import './index.css'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="first-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="profile"
      />
      <h1 className="name">Wade Warren</h1>
      <p className="description">Software developer at UK</p>
    </div>
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
