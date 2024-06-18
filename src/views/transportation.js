import React from 'react'

import { Helmet } from 'react-helmet'

import './transportation.css'

const Transportation = (props) => {
  return (
    <div className="transportation-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="transportation-transportation">
        <div className="transportation-navigation">
          <span className="transportation-text">
            <span>Taniti</span>
          </span>
          <div className="transportation-items">
            <span className="transportation-text02">
              <span>Homepage</span>
            </span>
            <span className="transportation-text04">
              <span>Lodging</span>
            </span>
            <span className="transportation-text06">
              <span>Transportation</span>
            </span>
            <span className="transportation-text08">
              <span>Entertainment</span>
            </span>
            <span className="transportation-text10">
              <span>Information</span>
            </span>
          </div>
        </div>
        <span className="transportation-text12">
          <span>Transportation</span>
        </span>
        <span className="transportation-text14">
          <span>
            Almost all visitors arrive in Taniti by air, though some arrive on a
            small cruise ship that docks in Yellow Leaf Bay for one night per
            week. Taniti is served by a small airport that accommodates small
            jets and propeller planes. Taniti is in the process of expanding the
            airport so larger jets will be able to land on the island within the
            next few years.
          </span>
          <br></br>
          <span></span>
          <br></br>
          <span>
            Public buses serve Taniti City from 5 a.m. to 11 p.m. daily. Private
            buses serve the rest of the island. Taxis are available in Taniti
            City, and rental cars can be rented from a local rental agency near
            the airport. Bikes and helmets are available to rent from several
            vendors (helmets are required by law). Taniti City is flat and very
            walkable. Many tourists stay in the area surrounding Merriton
            Landing: this area is easy to explore on foot.
          </span>
        </span>
        <div className="transportation-frame1321316148">
          <img
            alt="car17050xqca400h1129"
            src="/external/car17050xqca400h1129-san2-700w.png"
            className="transportation-car17050xqca400h1"
          />
        </div>
        <div className="transportation-navigation-footer">
          <img
            alt="Divider739"
            src="/external/divider739-dhe.svg"
            className="transportation-divider"
          />
          <span className="transportation-text20 Subheading">
            <span>Taniti.com</span>
          </span>
          <div className="transportation-social-icons">
            <button className="transportation-buttons-icon">
              <div className="transportation-icon">
                <img
                  alt="Icon744"
                  src="/external/icon744-1cvyj.svg"
                  className="transportation-icon1"
                />
              </div>
            </button>
            <button className="transportation-buttons-icon1">
              <div className="transportation-icon2">
                <img
                  alt="Icon749"
                  src="/external/icon749-xwa.svg"
                  className="transportation-icon3"
                />
              </div>
            </button>
            <button className="transportation-buttons-icon2">
              <div className="transportation-icon4">
                <img
                  alt="Icon754"
                  src="/external/icon754-8klp9.svg"
                  className="transportation-icon5"
                />
              </div>
            </button>
            <button className="transportation-buttons-icon3">
              <div className="transportation-icon6">
                <img
                  alt="Icon759"
                  src="/external/icon759-ms5.svg"
                  className="transportation-icon7"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transportation
