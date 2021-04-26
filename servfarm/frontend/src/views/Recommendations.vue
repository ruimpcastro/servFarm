<template>
  <div class="page-structure">
    <div class="container">
      <img src="https://images.impresa.pt/sicnot/2021-03-02-vacina-covid--5-.jpg/original/mw-860" alt="Nature" style="width:63%;">
      <div class="centered">
        <p>Do you live in São Miguel and want to get vaccinated? Check the link below!</p>
        <p><a href="https://vacinacao-covid19.azores.gov.pt/">https://vacinacao-covid19.azores.gov.pt/</a></p>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>
/* Container holding the image and the text */
.container {
  position: relative;
  text-align: center;
  color: rgb(0, 0, 0);
}
/* Centered text */
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: rgb(255, 255, 255);
  border-radius: 15px;
  border-color: darkcyan;
  border-style: solid;
  border-width: thin;
  color: rgb(0, 0, 0);
  padding-left: 20px;
  padding-right: 20px;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
}

</style>