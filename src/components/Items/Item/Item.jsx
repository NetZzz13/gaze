import React from "react";
import s from "./Item.module.scss";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import noposter from "../../../assets/movie-poster.jpg";

const Item = (props) => {
  return (
    <Card className={s.card}>
      <Card.Img
        variant="top"
        src={props.film.Poster !== "N/A" ? props.film.Poster : noposter}
        className={s.cardImg}
      />
      <Card.Body style={{ height: "9rem" }} className={s.cardBody}>
        <Card.Title className={s.cardTitle}> {props.film.Title} </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>
          <span className={s.cardLabel}>Year:</span> {props.film.Year}
        </ListGroupItem>
        <ListGroupItem>
          <span className={s.cardLabel}>Imdb(id): </span> {props.film.imdbID}
        </ListGroupItem>
        <ListGroupItem className={s.cardType}>
          <span className={s.cardLabel}>Type:</span> {props.film.Type}
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};

export default Item;
