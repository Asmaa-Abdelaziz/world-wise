import React from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { useCities } from "./Contexts/CitiesContext";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

export default function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : [""]
        }`}
        to={`/app/cities/${id}?lat=${position?.lat ?? 0}&lng=${
          position?.lng ?? 0
        }`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>
          {date ? formatDate(date) : "No date available"}
        </time>
        <button className={styles.deleteBtn} onClick={handleDelete}>
          &times;
        </button>
      </Link>
    </li>
  );
}
