import React from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand navbar-dark flex-column flex-md-row bd-navbar align ">

        <NavLink className="navbar-brand mr-0 mr-md-2" to="/user" aria-label="Bootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  ><title>User</title>
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="currentColor"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="white"></path><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="currentColor"></path>
          </svg>
        </NavLink>


        <div className="navbar-nav-scroll text-uppercase f-17">
          <ul className="navbar-nav bd-navbar-nav flex-row navigation-menu">
            <li className="nav-item-mid">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>

            {/*------------------------------------DROPDOWN---------------------------- */}

            <li className="nav-item">
              <NavLink className="nav-link " to="/about">About</NavLink>
            </li> 

            {/* <div class="dropdown">
              <button
                class="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div> */}

            {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Click Me!
              </a>

              <div class="dropdown-menu dropdown-menu-end animate slideIn" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
              </li> */}

            {/*------------------------------------DROPDOWN---------------------------- */}



            <li className="nav-item">
              <NavLink className="nav-link " to="/explorejobs" >Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/updateprofile" >Update Profile</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className=" btn btn-custom btn-sm" to="/addjob" ><i class="fa fa-solid fa-upload"></i>Post a Job</NavLink>
            </li>
            {/* <a href="post-a-job.html" class="btn btn-custom btn-sm"><i class="mdi mdi-cloud-upload"></i> Post a Job</a> */}
          </ul>
        </div>

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">

          <li className="nav-item">
            <a className="nav-link p-2" href="https://github.com/nihal-gl/JobPortal_Capstone" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-2" href="https://twitter.com/" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" viewBox="0 0 512 416.32" role="img" focusable="false"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg></a>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link p-2" to="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="Open Collective">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" className="navbar-nav-svg" viewBox="0 0 40 41" role="img" focusable="false"><title>Open Collective</title><path fill-opacity=".4" d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"></path><path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"></path>
              </svg></NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" to="/signup">Signup</NavLink>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar