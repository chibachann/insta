import * as React from 'react';
import * as styles from './section01.module.css';

const Section01 = () => {
  return (
    <section id="section01" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>  
          <h1>Super fast<br/>electric Moped</h1>
        </div>
        <div className={styles.imageBackground01}>

        </div>
        <div className={styles.imageBackground02}>

        </div>
        <div className={styles.imageBackground03}>

        </div>
        <div className={styles.imageBackground04}>
          <h2>C45<span className={styles.h2subtitle}>classic model</span></h2>
          <p className={styles.h2Describe}>Officially the UK's No.1
          <br/>Officially the UK's No.1
          <br/>Officially the UK's No.1
          <br/>Officially the</p>
        </div>
       
  
        
  

      </div>
    </section>
  );
};

export default Section01;
