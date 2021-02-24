<template>
  <div class="mt-4">
    <b-form @submit.prevent="onSubmit">
      <ValidationProvider name="Name" rules="required" v-slot="{ errors }">
        <b-form-group id="input-group-name" label="Name:" label-for="name">
          <b-form-input
            id="name"
            v-model="form.name"
            type="text"
            placeholder="Enter name"
            required
          ></b-form-input>
          <vlidation-message :errors="errors" />
        </b-form-group>
      </ValidationProvider>
      <ValidationProvider name="Email" rules="email" v-slot="{ errors }">
        <b-form-group
          id="input-group-email"
          label="Email address:"
          label-for="email"
        >
          <b-form-input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
          <vlidation-message :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        name="Password"
        rules="required|min:4"
        v-slot="{ errors }"
      >
        <b-form-group
          id="input-group-password"
          label="Your Password:"
          label-for="password"
        >
          <b-form-input
            id="password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <vlidation-message :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <ValidationProvider
        name="Password"
        rules="required|min:4"
        v-slot="{ errors }"
      >
        <b-form-group
          id="input-group-confirm-password"
          label="Confirm your Password:"
          label-for="confirm_password"
        >
          <b-form-input
            id="confirm_password"
            v-model="form.confirm_password"
            type="password"
            placeholder="Enter password"
            required
          ></b-form-input>
          <vlidation-message :errors="errors" />
        </b-form-group>
      </ValidationProvider>

      <b-button type="submit" variant="primary">Signup</b-button>
    </b-form>

    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import VlidationMessage from "../components/VlidationMessage.vue";
export default {
  components: {
    ValidationProvider,
    VlidationMessage
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        password: "",
        confirm_password: ""
      }
    };
  },
  methods: {
    async onSubmit() {
      try {
        await axios.post("http://localhost:3000/auth/signup", {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name
        });

        this.$router.push({ path: "/login" });
      } catch (err) {
        console.log(err);
      }
    },

    validateEmail(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      // if the field is not a valid email
      // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      //   return "This field must be a valid email";
      // }

      // All is good
      return true;
    }
  }
};
</script>
