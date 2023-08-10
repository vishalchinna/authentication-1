import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="bg-container">
    <Header />
    <div className="home-page">
      <div className="intro-text">
        <h1 className="cloth-head">Clothes That Get YOU Noticed</h1>
        <p className="information">
          Fashion is part of the daily air, reflecting the prevailing beliefs,
          economic conditions, and technological advancements of its time. From
          the elegant attire of the Victorian era to the rebellious styles of
          the 1960s, each s fashion choices carry a narrative of the past. In
          essence, fashion transcends mere a language through which individuals
          and societies communicate their stories, beliefs, and aspirations. As
          cultures evolve and times change, fashion remains a vibrant canvas
          capturing the essence of the human experience. Advancements in
          technology have revolutionized fashion, from online shopping and
          virtual fitting rooms to 3D printing of garments. Tech-driven
          innovations are reshaping the way fashion is designed, produced, and
          consumed
        </p>
        <button type="button" className="shop-btn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
        alt="clothes that get you noticed"
        className="intro-logo"
      />
    </div>
  </div>
)

export default Home
