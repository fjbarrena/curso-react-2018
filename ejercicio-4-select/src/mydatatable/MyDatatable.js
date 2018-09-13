import React, { Component } from 'react';

class MyDatatable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          data: this.props.data
        }
    }


    componentDidUpdate() {
      console.log(this.state.data[this.props.selectedIndex]);
    }

    render() {
      console.log(this.props);

      var rows = this.state.data[this.props.selectedIndex].puestos.map((row) => {
        return <tr><td>{row.id}</td><td>{row.name}</td></tr>
      });

        return (
            <div>
              <button>Crear nuevo</button>

              <div>
                <table>
                  <tr>
                    <td>Id</td>
                    <td>Nombre</td>
                    <td>Acciones</td>
                  </tr>
                  {
                    rows
                  }
                </table>
              </div>
            </div>

            
        );
    }
}

export default MyDatatable;
