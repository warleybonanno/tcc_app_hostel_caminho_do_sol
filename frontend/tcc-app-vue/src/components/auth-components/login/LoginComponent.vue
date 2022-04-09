<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
        <h1 class="text-center" style="margin-top: 100px">
          Hostel Caminho do Sol
        </h1>
        <form
          class="text-center border border-danger p-5"
          style="margin-top: 70px; height: auto; padding-top: 50px !important;"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
        <h2 class="text-center"> Login </h2>
        <!-- Block E-mail Start -->
        <div class="form-group mt-5">
          <label for="email" style="text-align: left; font-weight: 600;">
            E-mail
            <input
              type="email"
              id="email"
              name="email"
              class="form-control"
              placeholder="Digite seu E-mail"
              v-model="loginForm.email"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.email.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.email.required"
              class="invalid-feedback!"
            >
              O campo e-mail é obrigatório!
            </div>
          </label>
        </div>
        <!-- Block E-mail End -->

        <!-- Block Password Start -->
        <div class="form-group mt-3">
          <label for="password" style="text-align: left; font-weight: 600;">
            Senha
            <input
              type="password"
              id="password"
              name="password"
              class="form-control"
              placeholder="Digite sua Senha"
              v-model="loginForm.password"
              :class="{
                'is-invalid': isSubmitted && $v.loginForm.password.$error,
              }"
            />
            <div
              v-if="isSubmitted && !$v.loginForm.password.required"
              class="invalid-feedback!"
            >
              O campo senha é obrigatório!
            </div>
          </label>
        </div>
        <!-- Block Password End -->

        <p class="center mt-4">
          Não tem uma conta cadastrada? <router-link to="/register">Cadastre Aqui</router-link>
        </p>

        <!-- Block Button Start -->
        <center>
          <button
            @click="submitLoginUser"
            class="btn btn-primary btn-block w-75 my-4"
          >
            Entrar
          </button>
        </center>
        <!-- Block Button End -->
        </form>
      </div> <!-- End Class col-lg-6 offset-lg-3 -->
    </div> <!-- End Class Row -->
  </div> <!-- End Class Container -->
</template>

<script src="./Login.js"></script>

<style src="" scoped></style>
