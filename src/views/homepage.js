import React from 'react'

import { Helmet } from 'react-helmet'

import './homepage.css'

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="homepage-homepage">
        <div className="homepage-navigation">
          <span className="homepage-text">
            <span>Taniti</span>
          </span>
          <div className="homepage-items">
            <span className="homepage-text02">
              <span>Homepage</span>
            </span>
            <span className="homepage-text04">
              <span>Lodging</span>
            </span>
            <span className="homepage-text06">
              <span>Transportation</span>
            </span>
            <span className="homepage-text08">Entertainment</span>
            <span className="homepage-text09">
              <span>Information</span>
            </span>
          </div>
        </div>
        <div className="homepage-homepage-island1">
          <span className="homepage-text11 Subheading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu
            ligula eu massa ornare fringilla. In nec arcu condimentum,
            efficitur.
          </span>
        </div>
        <div className="homepage-heading">
          <span className="homepage-text12 Heading">
            <span>Travel Deals</span>
          </span>
        </div>
        <div className="homepage-travel-deals">
          <div className="homepage-honeymoon">
            <div className="homepage-frame1321316143">
              <img
                alt="beachphoto26610y0s300h2126"
                src="/external/beachphoto26610y0s300h2126-s6p5-200h.png"
                className="homepage-beachphoto26610y0s300h2"
              />
            </div>
            <span className="homepage-text14">
              <span>Honeymoon Packages</span>
            </span>
          </div>
          <div className="homepage-vacation">
            <span className="homepage-text16">
              <span>Vacation Packages</span>
            </span>
            <div className="homepage-frame13213161431">
              <img
                alt="drink1667"
                src="/external/drink1667-8tys-200h.png"
                className="homepage-drink1"
              />
            </div>
          </div>
          <div className="homepage-tours">
            <span className="homepage-text18">
              <span>Tour Packages</span>
            </span>
            <div className="homepage-frame13213161432">
              <img
                alt="Tours1668"
                src="/external/tours1668-puag-200h.png"
                className="homepage-tours1"
              />
            </div>
          </div>
        </div>
        <div className="homepage-heading1">
          <span className="homepage-text20 Heading">
            <span>Sightseeing</span>
          </span>
        </div>
        <div className="homepage-sightseeing">
          <div className="homepage-beaches">
            <span className="homepage-text22">
              <span>Beaches</span>
            </span>
            <div className="homepage-frame1321316144">
              <div className="homepage-beachphoto26610y0s300h1"></div>
            </div>
          </div>
          <div className="homepage-volcano">
            <span className="homepage-text24">
              <span>Volcano</span>
            </span>
            <div className="homepage-frame1321316145">
              <img
                alt="volcano16615iwm500w1125"
                src="/external/volcano16615iwm500w1125-tkh-200h.png"
                className="homepage-volcano16615iwm500w1"
              />
            </div>
          </div>
          <div className="homepage-rainforest">
            <span className="homepage-text26">
              <span>Rainforest</span>
            </span>
            <div className="homepage-frame1321316146">
              <img
                alt="Rainforest16618"
                src="/external/rainforest16618-fjg-200h.png"
                className="homepage-rainforest1"
              />
            </div>
          </div>
        </div>
        <div className="homepage-navigation-footer">
          <img
            alt="Divider3625"
            src="/external/divider3625-ic7u.svg"
            className="homepage-divider"
          />
          <span className="homepage-text28 Subheading">
            <span>Taniti.com</span>
          </span>
          <div className="homepage-social-icons">
            <button className="homepage-buttons-icon">
              <div className="homepage-icon">
                <img
                  alt="Icon3623"
                  src="/external/icon3623-uce.svg"
                  className="homepage-icon1"
                />
              </div>
            </button>
            <button className="homepage-buttons-icon1">
              <div className="homepage-icon2">
                <img
                  alt="Icon3624"
                  src="/external/icon3624-3499.svg"
                  className="homepage-icon3"
                />
              </div>
            </button>
            <button className="homepage-buttons-icon2">
              <div className="homepage-icon4">
                <img
                  alt="Icon3624"
                  src="/external/icon3624-al5.svg"
                  className="homepage-icon5"
                />
              </div>
            </button>
            <button className="homepage-buttons-icon3">
              <div className="homepage-icon6">
                <img
                  alt="Icon3625"
                  src="/external/icon3625-mqu.svg"
                  className="homepage-icon7"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
