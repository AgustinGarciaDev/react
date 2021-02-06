import React from 'react';
import './styles/NavBar.css';


class BadgesList extends React.Component { 
    render() { 
        return (
            <ul className="list-unstyled">
         {this.props.badges.map((badge) => {
          return (
              
              <li key={badge.id}>
                
                  <div className='col-12 badgeBox'>
                    <img src=  {badge.avatarUrl} alt=""/>
                      <p className="text_badge">
                          {badge.firstName}<br/>
                          {badge.lastName} <br/> 
                          {badge.twitter} <br/> 
                          {badge.jobTitle}
                      </p>
                   </div>
                
          </li>   
          ) 
          }
       )}
     </ul>    
       )
       
        
    }
}
export default BadgesList;