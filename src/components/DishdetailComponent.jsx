import React, { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

export default class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    let commentsList = comments.map((item) => {
      return (
        <li key={item.id} className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{item.comment}</h5>
            <small className="text-muted">
              --- {item.author}, {item.date.toLocaleString()}
            </small>
          </div>
        </li>
      );
    });

    return (
      <div className="list-group">
        <h4>Comments</h4>
        {commentsList}
      </div>
    );
  }

  render() {
    if (this.props.selectedDish === null) {
      return <div></div>;
    } else {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish.comments)}
          </div>
        </div>
      );
    }
  }
}
