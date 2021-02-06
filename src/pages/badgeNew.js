import React from 'react';
import './styles/badgeNew.css'

import heroImage from '../image/badge-header.svg';
import Bagde from '../componets/Badge';
import BagdeForm from '../componets/BadgeForm'    

class BagdeNew extends React.Component { 
    state = {
        form: {
            firstName: '',
            secondName: '',
            email: '',
            Twitter: '',
            Profesion: '',
        
          
    } };
    handleChange = e => { 
        this.setState({ 
            form: {
               ...this.state.form,
               [e.target.name]: e.target.value,
           } 
        }
        )
    }

    render() { 
        return (
            <div>
               
                <div className="BagdeNew__hero" >
                    <img src={heroImage } alt=""/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Bagde
                                firstName={this.state.form.firstName}
                                secondName={this.state.form.secondName}
                                Twitter={this.state.form.Twitter}
                                Profesion={this.state.form.Profesion}
                                avatarUrl="http://baravdg.com/wp-content/uploads/2021/01/121267735_116018723605644_5247384035527959391_n.jpg "
                            />
                        </div>
                         <div className="col-6">
                            <BagdeForm
                                onChange={this.handleChange}
                                formValues={ this.state.form}
                            />
                            </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}
export default BagdeNew;