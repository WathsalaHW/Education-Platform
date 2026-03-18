import './App.css'

function App() {
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BRIGHTPATH</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About Us</li>
          <li>Tutors</li>
          <li>Resources</li>
          <li>Subject</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="nav-auth">
          <span className="login-btn">Login</span>
          <button className="signup-btn">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1>MASTER SCIENCE</h1>
          <p>
            Unlock your A/L Science potential with short lessons, expert support,
            and powerful study tools.
          </p>
          
          <div className="hero-btns">
            <button className="btn-primary">Start Learning Free</button>
            <button className="btn-secondary">Find a Tutor</button>
          </div>

          <div className="stats">
            <div className="stat-item">
              <h2>10,000+</h2>
              <p>Active Students</p>
            </div>
            <div className="stat-item">
              <h2>500+</h2>
              <p>Expert Tutors</p>
            </div>
            <div className="stat-item">
              <h2>98%</h2>
              <p>Success Rate</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img 
            src="C:\Users\Asus\Desktop\React new\frontend\src\assets\science.webp" 
            alt="Science Illustration" 
          />
        </div>
      </header>
    </div>
  )
}

export default App