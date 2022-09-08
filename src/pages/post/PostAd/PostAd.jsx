import PostSections from '../../../components/PostSections/PostSections'
import './PostAd.scss'

const PostAd = () => {
  return (
    <div className="postAdPage">
        <h1>Dub<span>i</span>zlle</h1>
        <div className="container">
            <div className="title">
                <h2>Hello, What are you listing today</h2>
                <p>Select the area that best suits your ad</p>
                <h5>*only motors active*</h5>
            </div>
            <PostSections/>
        </div>
    </div>
  )
}

export default PostAd