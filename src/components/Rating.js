import React, { useState, useEffect } from "react";
import styles from "./Rating.module.css";
import phone from "../assets/images/illustration-thank-you.svg";
import star from "../assets/images/icon-star.svg";

//className={rating ? styles.myButton.active : styles.myButton}
function Rating() {
  const [rating, setRating] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);
  useEffect(() => {
    console.log(rating);
  });
  const ratings = [1, 2, 3, 4, 5];
  function handleRating(rating) {
    setRating(rating);
    setSelectedRating(rating);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return isSubmitted ? (
    <div className={styles.thanks}>
      <div className={styles.thanksContainer}>
        <img src={phone} alt="phone" />
        <div className={styles.selected}>You selected {rating} out of 5</div>
        <div className={styles.thanksContent}>
          <h1 className={styles.header}>Thank You!</h1>
          <p className={styles.text}>
            {" "}
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      </div>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <img src={star} alt="star" className={styles.star} />
        <div className={styles.mainContainer}>
          <div className={styles.content}>
            <h1 className={styles.header}>How Did we Do?</h1>
            <p>
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>
          </div>

          <div className={styles.rating}>
            {ratings.map((input, index) => (
              <button
                type="button"
                key={index}
                onClick={() => handleRating(input)}
                className={`${styles.myButton} ${
                  input === selectedRating && styles.active
                }`}
              >
                {input}
              </button>
            ))}
          </div>
          <button
            className={styles.submit}
            type="submit"
            disabled={rating === undefined}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default Rating;
