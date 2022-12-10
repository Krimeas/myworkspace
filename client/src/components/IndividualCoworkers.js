import React from "react";

insert styles variable here


const IndividualCoworkers = ({}) => {
return (

<div class="card">
  <img src="img_avatar.png" alt="Avatar" style="width:100%"/>
  <div class="container">
    <h4><b>Allen</b></h4>
    <p>working on project</p>

    <h4><b>Cody</b></h4>
    <p>working on project</p>

    <h4><b>Mark</b></h4>
    <p>working on project</p>

    <h4><b>Tony</b></h4>
    <p>working on project</p>

    <h4><b>Alex</b></h4>
    <p>working on project</p>

    <h4><b>Payton</b></h4>
    <p>working on project</p>

  </div>
</div>

)
}

export default Coworkers


/* css for cards */

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

/* Shadowds when hovering over */

.card:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* padding inside the card container */

.container {
  padding: 2px 16px;
}

