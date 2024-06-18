import React from 'react'

import { Helmet } from 'react-helmet'

import './lodging.css'

const Lodging = (props) => {
  return (
    <div className="lodging-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="lodging-lodging">
        <div className="lodging-navigation">
          <span className="lodging-text">
            <span>Taniti</span>
          </span>
          <div className="lodging-items">
            <span className="lodging-text02">
              <span>Homepage</span>
            </span>
            <span className="lodging-text04">
              <span>Lodging</span>
            </span>
            <span className="lodging-text06">
              <span>Transportation</span>
            </span>
            <span className="lodging-text08">
              <span>Entertainment</span>
            </span>
            <span className="lodging-text10">
              <span>Information</span>
            </span>
          </div>
        </div>
        <span className="lodging-text12">
          <span>Lodging</span>
        </span>
        <div className="lodging-frame1321316147">
          <img
            alt="hotel1704b7bo400h1127"
            src="/external/hotel1704b7bo400h1127-2sb-400h.png"
            className="lodging-hotel1704b7bo400h1"
          />
        </div>
        <span className="lodging-text14">
          <span>
            Taniti offers various lodging, from an inexpensive hostel to a
            large, four-star resort. There are also many small, family-owned
            hotels and a growing number of bed and breakfasts. The Tanitian
            government strictly regulates and regularly inspects all types of
            lodging.
          </span>
        </span>
        <div className="lodging-frame1321316148">
          <img
            alt="food17096ogi400h1128"
            src="/external/food17096ogi400h1128-i8oo-1500h.png"
            className="lodging-food17096ogi400h1"
          />
        </div>
        <span className="lodging-text16">
          <span>
            Taniti currently has ten restaurants: five serve mostly local fish
            and rice, three serve American-style meals, and two serve Pan-Asian
            cuisine.
          </span>
          <br></br>
          <span>
            Taniti has two supermarkets, two smaller grocery stores, and one
            24-hour convenience store.
          </span>
        </span>
        <div className="lodging-navigation-footer">
          <img
            alt="Divider6686"
            src="/external/divider6686-fgw7.svg"
            className="lodging-divider"
          />
          <span className="lodging-text20 Subheading">
            <span>Taniti.com</span>
          </span>
          <div className="lodging-social-icons">
            <button className="lodging-buttons-icon">
              <div className="lodging-icon">
                <img
                  alt="Icon6668"
                  src="/external/icon6668-6sn.svg"
                  className="lodging-icon1"
                />
              </div>
            </button>
            <button className="lodging-buttons-icon1">
              <div className="lodging-icon2">
                <img
                  alt="Icon6673"
                  src="/external/icon6673-0yla.svg"
                  className="lodging-icon3"
                />
              </div>
            </button>
            <button className="lodging-buttons-icon2">
              <div className="lodging-icon4">
                <img
                  alt="Icon6678"
                  src="/external/icon6678-6v8.svg"
                  className="lodging-icon5"
                />
              </div>
            </button>
            <button className="lodging-buttons-icon3">
              <div className="lodging-icon6">
                <img
                  alt="Icon6683"
                  src="/external/icon6683-eqxf.svg"
                  className="lodging-icon7"
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lodging
