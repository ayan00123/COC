import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="totalnav">
        <a className="navbar-brand" id="slogo" href="/"><img src="https://cdn.supercell.com/supercell.com/210416113614/all/themes/supercell/img/logo_supercell@2x.png"/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active" id="tools">
              <a className="nav-link" href="/">Gamers</a>
            </li>
            <li className="nav-item active" id="tools">
              <a className="nav-link" href="/">Careers</a>
            </li>
            <li className="nav-item active" id="tools">
              <a className="nav-link" href="/">Suport</a>
            </li>
            <li className="nav-item active" id="tools">
              <a className="nav-link" href="/"> . . .</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto" id="sndlogo">
                <img src="https://cdn.supercell.com/supercell.com/210416113614/all/themes/supercell/img/18/logo_supercell_id.png"/>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation;