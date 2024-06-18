import React from 'react'

import { Helmet } from 'react-helmet'

import './information.css'

const Information = (props) => {
  return (
    <div className="information-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="information-information">
        <div className="information-navigation">
          <span className="information-text">
            <span>Taniti</span>
          </span>
          <div className="information-items">
            <span className="information-text02">
              <span>Homepage</span>
            </span>
            <span className="information-text04">Lodging</span>
            <span className="information-text05">
              <span>Transportation</span>
            </span>
            <span className="information-text07">
              <span>Entertainment</span>
            </span>
            <span className="information-text09">Information</span>
          </div>
        </div>
        <span className="information-text10">
          <span>Frequently Requested Information:</span>
        </span>
        <div className="information-frame1321316148">
          <img
            alt="photofemale117113yz28400h11211"
            src="/external/photofemale117113yz28400h11211-t5uh-400h.png"
            className="information-photofemale117113yz28400h1"
          />
        </div>
        <span className="information-text12">
          <span>
            Power outlets are 120 volts (the same as in the United States).
          </span>
          <br></br>
          <br></br>
          <span>
            Alcohol cannot be served or sold between midnight and 9:00 a.m.
          </span>
          <br></br>
          <br></br>
          <span>
            The drinking age in Taniti is 18, and the drinking age is not
            strictly enforced.
          </span>
          <br></br>
          <br></br>
          <span>
            Many younger Tanitians speak fluent English. Very little English is
            spoken in rural areas, especially by the older residents.
          </span>
          <br></br>
          <br></br>
          <span>
            There is one hospital and several clinics. The hospital has many
            multilingual employees.
          </span>
          <br></br>
          <br></br>
          <span>
            Violent crime is rare in Taniti, but as tourism increases, there are
            more reports of pickpocketing and other petty crimes.
          </span>
          <br></br>
          <br></br>
          <span>
            Taniti enjoys many national holidays, and many tourist attractions
            and restaurants are closed these days, so visitors should plan
            accordingly.
          </span>
          <br></br>
          <br></br>
          <span>
            Taniti uses the U.S. dollar, but many businesses will also accept
            euros and yen. Several banks facilitate currency exchange, and many
            businesses accept major credit cards.
          </span>
        </span>
        <div className="information-navigation-footer">
          <img
            alt="Divider787"
            src="/external/divider787-r7mp.svg"
            className="information-divider"
          />
          <span className="information-text35 Subheading">
            <span>Taniti.com</span>
          </span>
          <div className="information-social-icons">
            <button className="information-buttons-icon">
              <div className="information-icon">
                <img
                  alt="Icon792"
                  src="/external/icon792-fbii.svg"
                  className="information-icon1"
                />
              </div>
            </button>
            <button className="information-buttons-icon1">
              <div className="information-icon2">
                <img
                  alt="Icon797"
                  src="/external/icon797-vl5i.svg"
                  className="information-icon3"
                />
              </div>
            </button>
            <button className="information-buttons-icon2">
              <div className="information-icon4">
                <img
                  alt="Icon7102"
                  src="/external/icon7102-4opo.svg"
                  className="information-icon5"
                />
              </div>
            </button>
            <button className="information-buttons-icon3">
              <div className="information-icon6">
                <img
                  alt="Icon7107"
                  src="/external/icon7107-kmr.svg"
                  className="information-icon7"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
