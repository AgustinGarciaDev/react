import React from 'react';

class BagdeForm extends React.Component { 
    state = {};
    
   /*  handleChange = (e) => { 
        this.setState({
         [e.target.name]: e.target.value,
        })
    } */
    handleClick = e => {
        console.log('Form was clicked');
        console.log(this.state);
    };
    
    render() { 
        return (
            <div>
                <h1>Nuevo registro</h1>
                <form >
                    <div className="form-group">
                        <label >First Name</label>
                        <input value={ this.props.formValues.firstName} onChange={this.props.onChange} className= "form-control" name ="firstName"  type="text"/>
                    </div>
                     <div className="form-group">
                        <label >Second  Name</label>
                        <input value={ this.props.formValues.secondtName} onChange={this.props.onChange} className= "form-control" name ="secondName"  type="text"/>
                    </div>
                     <div className="form-group">
                        <label >E-mail</label>
                        <input value={ this.props.formValues.email}   onChange={this.props.onChange} className= "form-control" name ="email"  type="email"/>
                    </div>
                     <div className="form-group">
                        <label >Job type</label>
                        <input  value={ this.props.formValues.Profesion}   onChange={this.props.onChange} className= "form-control" name ="Profesion"  type="text"/>
                    </div>
                      <div className="form-group">
                        <label >Twitter</label>
                        <input value={ this.props.formValues.Twitter}   onChange={this.props.onChange} className= "form-control" name ="Twitter"  type="text"/>
                    </div>
                      <button   type="button" onClick={this.handleClick }  className="btn  btn-primary mt-2">Save</button>
                </form>
           </div>
        )
    }
}
export default BagdeForm;