<template>
  <div class="container-fluid">
    <h1 class="text-center mt-5">Hostel Caminho do Sol</h1>
    <div class="row">
      <div class="col-md-4 offset-md-4 col-sm-10 offset-sm-1">
        <form
          class="form"
          v-on:submit.prevent="loginSubmitUserForm()"
        >
          <div class="form-group mb-5 border border-info p-5 bg-light">
            <h2 class="text-center">Login</h2>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- E-mail Block Start -->
                <div class="input-group">
                  <MazInput
                    v-model="loginForm.email"
                    placeholder="E-mail"
                    type="email"
                    class="w-100 rounded"
                    left-icon-name="email"
                    :class="{
                      'is-invalid': isSubmitted && $v.loginForm.email.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && $v.loginForm.email.$error"
                    class="invalid-feedback!"
                  >
                    <span v-if="!$v.loginForm.email.required">
                      O campo e-mail é obrigatório!
                    </span>
                    <span v-if="!$v.loginForm.email.email">
                      E-mail inválido!
                    </span>
                  </div>
                  <!-- E-mail Block End -->
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- Password Block Start -->
                <MazInput
                  v-model="loginForm.password"
                  placeholder="Senha"
                  type="password"
                  class="w-100 rounded"
                  left-icon-name="lock"
                  :class="{
                    'is-invalid': isSubmitted && $v.loginForm.password.$error,
                  }"
                />

                <div
                  v-if="isSubmitted && $v.loginForm.password.$error"
                  class="invalid-feedback!"
                >
                  <span v-if="!$v.loginForm.password.required">
                    O campo senha é obrigatório!
                  </span>
                  <span v-if="!$v.loginForm.password.minLength">
                    A senha deve conter pelo menos 6 caracteres!
                  </span>
                </div>
                <!-- Password Block End -->
              </div>
            </div>

            <p class="center mt-4 text-center">
              Não tem uma conta cadastrada?
              <router-link to="/register">Cadastre Aqui</router-link>
            </p>

            <center>
              <button
                @click="submitLoginUser"
                class="btn btn-primary btn-block w-75 my-4"
              >
                Entrar
              </button>
            </center>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js"></script>

<style src="" scoped>
span {
  color: red;
  font-weight: bold;
  margin-left: 15px;
}
.form {
  margin-top: 20px;
  height: auto;
  padding-top: 25px !important;
}
</style>
