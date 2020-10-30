import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from "./MenuComponent"
import { DISHES } from '../share/dishes';
import DishdetailComponent from './DishdetailComponent';

class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    const dish = this.state.dishes.filter(item => item.id === dishId)[0];
    this.setState({ selectedDish: dish });
  }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Wow</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)} />
        <div className="container">
        <DishdetailComponent selectedDish={this.state.selectedDish} />

        </div>
      </div>
    );
  }
}

export default Main;
