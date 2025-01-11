import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n      }\n      body {\n        font-family: Arial, sans-serif;\n        background-color: #f8f9fa;\n        color: #212529;\n        line-height: 1.6;\n      }\n      header {\n        background: #000000;\n        padding: 1rem;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        color: #fff;\n      }\n      header h1 {\n        font-size: 1.8rem;\n      }\n      nav a {\n        text-decoration: none;\n        color: #fff;\n        margin-left: 1rem;\n        font-size: 1rem;\n      }\n      nav a:hover {\n        color: #cce5ff;\n      }\n      .login-icon {\n        display: flex;\n        align-items: center;\n        cursor: pointer;\n      }\n      .login-icon img {\n        width: 24px;\n        height: 24px;\n        margin-right: 0.5rem;\n      }\n      .hero {\n        text-align: center;\n        padding: 2rem;\n        background: #e9ecef;\n      }\n      .hero h2 {\n        font-size: 2.5rem;\n        color: #000000;\n      }\n      .hero p {\n        font-size: 1.2rem;\n        margin-bottom: 2rem;\n      }\n      .hero .cta {\n        background: #000000;\n        color: #fff;\n        padding: 0.8rem 1.5rem;\n        font-size: 1rem;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n      }\n      .hero .cta:hover {\n        background: #0056b3;\n      }\n      section {\n        padding: 2rem;\n      }\n      .features {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 2rem;\n        max-width: 1200px;\n        margin: 2rem auto;\n        background: #ffffff;\n        padding: 2rem;\n        border-radius: 8px;\n        border: 5px solid #dee2e6;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      }\n      .features-text {\n        flex: 1;\n      }\n      .features-text h2 {\n        font-size: 2rem;\n        color: #000000;\n        margin-bottom: 1rem;\n      }\n      .features-text ul {\n        list-style: none;\n        margin-top: 1rem;\n      }\n      .features-text ul li {\n        margin: 0.8rem 0;\n        font-size: 1rem;\n      }\n      .features-text li::before {\n        content: "✔";\n        color: #000000;\n        margin-right: 0.5rem;\n      }\n      .features-img {\n        flex: 1;\n        text-align: center;\n      }\n      .features-img img {\n        max-width: 100%;\n        height: auto;\n        border-radius: 8px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n      }\n      .pricing {\n        text-align: center;\n        padding: 2rem;\n        background: #f8f9fa;\n      }\n      .pricing h2 {\n        font-size: 2rem;\n        color: #000000;\n        margin-bottom: 1.5rem;\n      }\n      .pricing-container {\n        display: flex;\n        justify-content: center;\n        gap: 2rem;\n        flex-wrap: wrap;\n      }\n      .plan {\n        background: #ffffff;\n        padding: 2rem;\n        border-radius: 8px;\n        border: 1px solid #dee2e6;\n        width: 300px;\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n        text-align: center;\n      }\n      .plan h3 {\n        font-size: 1.5rem;\n        color: #000000;\n        margin-bottom: 1rem;\n      }\n      .plan ul {\n        list-style: none;\n        padding: 0;\n        margin: 1rem 0;\n      }\n      .plan ul li {\n        margin: 0.5rem 0;\n        font-size: 1rem;\n      }\n      .plan .cta {\n        background: #000000;\n        color: #fff;\n        padding: 0.8rem 1.2rem;\n        font-size: 1rem;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n        margin-top: 1rem;\n      }\n      .plan .cta:hover {\n        background: #0056b3;\n      }\n      footer {\n        background: #000000;\n        text-align: center;\n        padding: 1rem;\n        color: #fff;\n        margin-top: 2rem;\n      }\n      footer p {\n        font-size: 0.9rem;\n      }\n    ',
          }}
        />
        <header>
          <h1>Restaurant Dashboard Builder</h1>
          <nav>
            <div className="login-icon">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/login-rounded-right.png"
                alt="Login Icon"
              />
              <a href="https://restrologin.rugvddev.site/">Login</a>
            </div>
          </nav>
        </header>
        <div className="hero">
          <h2>Create Your Restaurant Dashboard</h2>
          <p>Manage menus, reservations, and analytics effortlessly.</p>
          <button className="cta">Get Started</button>
        </div>
        <section id="features" className="features">
          <div className="features-text">
            <h2>Features</h2>
            <ul>
              <li>
                Menu Management: Add, edit, and organize your restaurant's menu.
              </li>
              <li>
                Reservation System: Streamline table bookings for customers.
              </li>
              <li>
                Real-Time Analytics: Track sales and customer preferences.
              </li>
              <li>Custom Dashboards: Tailor the dashboard to your needs.</li>
              <li>
                Secure Login: Protect your data with robust authentication.
              </li>
            </ul>
          </div>
          <div className="features-img">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Dashboard Preview"
            />
          </div>
        </section>
        <section id="pricing" className="pricing">
          <h2>Pricing</h2>
          <div className="pricing-container">
            <div className="plan">
              <h3>Free Plan</h3>
              <ul>
                <li>Menu Management</li>
                <li>Basic Analytics</li>
                <li>Reservation System</li>
              </ul>
              <button className="cta">Sign Up for Free</button>
            </div>
            <div className="plan">
              <h3>Pro Plan</h3>
              <ul>
                <li>All Free Plan Features</li>
                <li>Real-Time Analytics</li>
                <li>Staff Management</li>
                <li>Priority Support</li>
              </ul>
              <button className="cta">Subscribe for $49/month</button>
            </div>
          </div>
        </section>
        <footer>
          <p>© 2025 Restaurant Dashboard Builder. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
