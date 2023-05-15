import React from 'react';
import styles from "./Form.module.scss";

const Form = () => {

  return (
    <form className={styles.form}>
      <input type="text" placeholder={"Имя"} />
      <input type="tel" placeholder={"Телефон"} />
      <input type="text" id="input2" placeholder={"Адрес"} readOnly={true}/>
      <div className={styles.form__btns}>
        <button className={styles.btn} type="submit">Отправить запрос</button>
        <button className={styles.btn} type="reset">Очистить</button>
      </div>
    </form>
  )
};


export default Form;
