<template>
  <div class="page-structure">
      <form
      class="form-style"
      @submit="submitForm"
      >
        <label for="name">Name:</label>
        <input
        id="name"
        class="text-input-register"
        type="text"
        placeholder="Insert name"
        v-model="user.name"
        >

        <label for="email">E-mail:</label>
        <input
        id="email"
        class="text-input-register"
        type="text"
        placeholder="E-mail"
        v-model="user.email"
        >

        <label for="cellphone">Cellphone number:</label>
        <input
        id="cellphone"
        class="text-input-register"
        type="text"
        placeholder="Number"
        v-model="user.cellphone"
        >
        
        <label for="pword">Password:</label>
        <input
        id="pword"
        class="text-input-register"
        type="password"
        placeholder="Password"
        v-model="user.pword.pword"
        >

        <label for="confPword">Password:</label>
        <input
        id="confPword"
        class="text-input-register"
        type="password"
        placeholder="Confirm password"
        v-model="user.pword.confirm"
        >

        <button @click="submitForm">Register</button>
      </form>

  </div>
</template>

<script>
import useValidate from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

export default {
  data() {
    return {
      v$: useValidate(),
      user: {
        name: '',
        email: '',
        cellphone: '',
        pword: {
          pword: '',
          confirm: '',
        },
      },
    }
  },
  validations() {
    return {
      name: { required },
      email: { required, email },
      cellphone: { required },
      pword: {
        pword: { required },
        confirm: { required },
      },
    }
  },
  methods: {
    submitForm() {
      this.v$.validate();
      if(!this.v$.error){
      console.log(this.v$);
      } else {
        alert('Form failed validation');
      }
    },
  }
}
</script>
