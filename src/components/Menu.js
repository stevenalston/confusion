import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

export default (props) => {

  const menu = ({ id, name, image, description }) => {
    return (
      <div key={id} className="col-6 d-flex col-md-4 m-1">
        <Card>
          <CardImg src={image} />
          <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  };

  console.log(props.dishes);

  return (
    <div className="row align-items-stretch d-flex justify-content-center">
      { props.dishes.map(dish => menu(dish)) }
    </div>
  )
}