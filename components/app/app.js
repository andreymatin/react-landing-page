import React, { Component } from 'react';
import { GlobalStyle } from './styles';
import { Header } from './header';
import './scss/main.scss';

export class App extends Component {
  render() {

    return (

      <>
        <Header />
        <GlobalStyle />

        {/* Navigation Menu */}
        <nav className="nav-panel">
          <div className="container">
            <div className="row">
              <div className="col">

                <ul className="main-menu">
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Home</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Buy</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">News</a></li>
                  <li className="main-menu-item"><a className="main-menu-link" href="./index.html">Specification</a></li>
                </ul>

              </div>
            </div>
          </div>
        </nav>

        {/* Intro */}
        <section className="intro">
          <div className="container">
            <div className="row">
              <div className="col-md-6">

                <div className="intro-block">

                  {/* Intro Header */}
                  <header className="intro-header">
                    <h1 className="intro-title">Apple Airpods</h1>
                    <h2 className="intro-subtitle">Wireless. Effortless. Magical.</h2>
                  </header>

                  {/* Intro Content */}
                  <div className="intro-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                    <p>Excepteur cupidatat blacks are not excepteur, is soothing to the soul, that is, they deserted the general duties of those who are to blame for your troubles.</p>
                  </div>

                  {/* Intro Indicators */}
                  <ul className="indicators-list">
                    <li className="indicators-item active"></li>
                    <li className="indicators-item"></li>
                    <li className="indicators-item"></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <img src="./images/head.jpg" alt="" className="intro-photo" />
              </div>
            </div>
          </div>
        </section>


        {/* Details */}
        <section className="details">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="details-photo">
                  <img src="./images/airpods.jpg" alt="" />
                </div>
              </div>
              <div className="col-md-5">
                <h2 className="details-title">Wireless. Effortless. Magical.</h2>

                <p>Body text. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>

                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Board */}
        <section className="board">
          <div className="container">
            <div className="row">
              <div className="col-md-6">

                <h2 className="board-title">AirPods</h2>
                <img src="./images/photo.jpg" alt="" />

              </div>
              <div className="col-md-6">
                <img src="./images/devices.jpg" alt="" className="board-photo-devices" />
              </div>
            </div>
          </div>
        </section>


        {/* Features */}
        <section className="features">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="features-content">
                  <ul className="features-list">
                    <li className="features-item">Amazingly easy to use, AirPods combine intelligent design with breakthrough technology and crystal clear sound.</li>
                    <li className="features-item">Get up to 5 hours of listening time on one charge.</li>
                    <li className="features-item">Or up to 3 hours with just a 15-minute charge in the charging case.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Retailers */}
        <section className="retailers">
          <div className="container">
            <div className="row">
              <div className="col">

                <div className="retailers-block">

                  {/* Retailers Header */}
                  <header className="retailers-header">
                    <h2 className="retailers-title">Buy your Apple Airpods online from these retailers</h2>
                  </header>

                  <div className="retailers-content">

                    {/* Retailers List */}
                    <ul className="retailers-list">
                      <li className="retailers-item"><img src="./images/logo-1.png" alt="" /></li>
                      <li className="retailers-item"><img src="./images/logo-2.png" alt="" /></li>
                      <li className="retailers-item"><img src="./images/logo-3.png" alt="" /></li>
                      <li className="retailers-item"><img src="./images/logo-4.png" alt="" /></li>
                      <li className="retailers-item"><img src="./images/logo-5.png" alt="" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Last News */}
        <section className="last-news">

          <div className="container">
            <div className="row">

              {/* Last News Item */}
              <div className="col-md-3">
                <div className="last-news-item">
                  <div className="last-news-header">
                    <h3>H3 Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                  </div>
                  <div className="last-news-footer">
                    <a href="./index.html" className="last-news-link">more info...</a>
                  </div>
                </div>
              </div>

              {/* Last News Item */}
              <div className="col-md-3">
                <div className="last-news-item">
                  <div className="last-news-header">
                    <h3>Title news</h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione est.</p>
                  </div>
                  <div className="last-news-footer">
                    <a href="./index.html" className="last-news-link">more info...</a>
                  </div>
                </div>
              </div>

              {/* Last News Item */}
              <div className="col-md-3">
                <div className="last-news-item">
                  <div className="last-news-header">
                    <h3>news</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. architecto beatae explicabo.</p>
                  </div>
                  <div className="last-news-footer">
                    <a href="./index.html" className="last-news-link">more info...</a>
                  </div>
                </div>
              </div>

              {/* Last News Item */}
              <div className="col-md-3">
                <div className="last-news-item">
                  <div className="last-news-header">
                    <h3>LAST news</h3>
                    <p>Accumsan lacus vel facilisis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                  </div>
                  <div className="last-news-footer">
                    <a href="./index.html" className="last-news-link">more info...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Specifications */}
        <section className="specifications">

          <div className="container">
            <div className="row">
              <div className="col">

                {/* Specifications Header */}
                <header className="specifications-header">
                  <h3>Specifications</h3>
                </header>

                {/* Specifications Content */}
                <div className="specifications-content">


                  {/* Specifications List */}
                  <table className="specifications-list">
                    <tbody>

                      {/* Specifications Item */}
                      <tr className="specifications-item">
                        <td>
                          <strong>Weight</strong>
                        </td>
                        <td>
                          AirPods (each): 0.14 ounce (4 g); Charging Case: 1.34 ounces (38 g)
                      </td>
                      </tr>

                      {/* Specifications Item */}
                      <tr className="specifications-item">
                        <td>
                          <strong>Dimensions</strong>
                        </td>
                        <td>
                          AirPods (each): 0.65 by 0.71 by 1.59 inches (16.5 by 18.0 by 40.5 mm)
                        <br />
                          Charging Case: 1.74 by 0.84 by 2.11 inches (44.3 by 21.3 by 53.5 mm)
                      </td>
                      </tr>

                      {/* Specifications Item */}
                      <tr className="specifications-item">
                        <td>
                          <strong>Power and Battery</strong>
                        </td>
                        <td>
                          AirPods with Charging Case:
                        <br />
                          More than 24 hours listening time, up to 11 hours talk time
                      </td>
                      </tr>

                      {/* Specifications Item */}
                      <tr className="specifications-item">
                        <td>
                          <strong>Bluetooth:</strong>
                        </td>
                        <td>
                          Yes
                      </td>
                      </tr>

                      {/* Specifications Item */}
                      <tr className="specifications-item">
                        <td>
                          <strong>Wireless:</strong>
                        </td>
                        <td>
                          Yes
                      </td>
                      </tr>

                      <tr className="specifications-item">
                        <td>
                          <strong>Sensors:</strong>
                        </td>
                        <td>
                          Optical sensors and a motion accelerometer
                      </td>
                      </tr>

                      <tr className="specifications-item">
                        <td>
                          <strong>Connections:</strong>
                        </td>
                        <td>
                          AirPods: Bluetooth; Charging Case: Lightning connector
                      </td>
                      </tr>
                    </tbody>
                  </table>


                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5">

                {/* Copyright */}
                <p className="copy">Copyright &copy; Younify. All right reserved.</p>

              </div>
              <div className="col-md-7">

                {/* Footer Menu */}
                <ul className="footer-menu">
                  <li className="footer-menu-item"><a className="footer-menu-link" href="./index.html">Privacy</a></li>
                  <li className="footer-menu-item"><a className="footer-menu-link" href="./index.html">Terms and Conditions</a></li>
                </ul>
              </div>

            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
