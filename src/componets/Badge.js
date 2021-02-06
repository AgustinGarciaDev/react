import React from 'react'; /* Importo react */
import "./styles/badge.css"
import confLogo from '../image/badge-header.svg'; 


class Badge extends React.Component {
  render() { 
    return(
        <div className="badge">
            <div className = "badge_header">
              <img src={confLogo} alt="Logo conferencia"/>
            </div>
            <div className="badge_section-name">
        <img className="badge__avatar" src={ this.props.avatarUrl} alt="Aca va la imagen"/>
        <h1 className="badge__nameuser">
          {this.props.firstName} <br /> {this.props.secondName}
        </h1> 
          </div>
           
            <div className="badge_section-info ">
                <p>{ this.props.Profesion}</p>
                <p>@{this.props.Twitter}</p>
          </div>
          <div className="badge_footer">
              <p>#Platzi</p>
          </div>
            </div>
        )
    }
  }
export default Badge;