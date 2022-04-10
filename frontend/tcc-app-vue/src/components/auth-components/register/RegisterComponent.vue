<template>
  <div class="container-fluid">
    <h1 class="text-center mt-5 mb-4">Hostel Caminho do Sol</h1>
    <h2 class="text-center">Cadastre-se agora!</h2>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        <form
          style="margin-top: 20px; height: auto; padding-top: 25px !important"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <div class="form-group mb-5 border border-info p-5 bg-light">
            <h4>Dados de Acesso</h4>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- E-mail Block Start -->
                <div class="input-group">
                  <label for="email" class="w-100">
                    E-mail
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Digite seu E-mail"
                      v-model="registerForm.email"
                      :class="{
                          'is-invalid': isSubmitted && $v.registerForm.email.$error,
                      }"
                    />
                    <div
                        v-if="isSubmitted && $v.registerForm.email.$error"
                        class="invalid-feedback!"
                    >
                      <span v-if="!$v.registerForm.email.required">
                        O campo e-mail é obrigatório!
                      </span>
                      <span v-if="!$v.registerForm.email.email">
                        E-mail inválido!
                      </span>
                    </div>
                  </label>
                </div>
                <!-- E-mail Block End -->
              </div>
              <div class="col-md-6 col-sm-12">
                <!-- Password Block Start -->
                <label for="password" class="w-100">
                  Senha
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Digite sua Senha"
                    v-model="registerForm.password"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.password.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && $v.registerForm.password.$error"
                    class="invalid-feedback!"
                  >
                    <span v-if="!$v.registerForm.password.required">
                      O campo senha é obrigatório!
                    </span>
                    <span v-if="!$v.registerForm.password.minLength">
                      A senha deve conter pelo menos 6 caracteres!
                    </span>
                  </div>
                </label>
                <!-- Password Block End -->
              </div>
            </div>
          </div>
          <div class="form-group mb-5 border border-info p-5 bg-light">
            <h4>Dados de Cadastro</h4>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- Name Block Start -->
                <label for="name" class="w-100">
                  Nome Completo
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Digite seu Nome Completo"
                    v-model="registerForm.name"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.name.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.name.required"
                    class="invalid-feedback!"
                  >
                    O campo nome completo é obrigatório!
                  </div>
                </label>
                <!-- Name Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- Sex Block Start -->
                <label for="sex" class="w-100">
                  Sexo
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Informe seu Sexo"
                    v-model="registerForm.sex"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.sex.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.sex.required"
                    class="invalid-feedback!"
                  >
                    O campo sexo é obrigatório!
                  </div>
                </label>
                <!-- Sex Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- BirthDate Block Start -->
                <label for="birthDate" class="w-100">
                  Data de Nascimento
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Informe a Data de Nascimento"
                    v-model="registerForm.birthDate"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.birthDate.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.birthDate.required"
                    class="invalid-feedback!"
                  >
                    O campo data de nascimento é obrigatório!
                  </div>
                </label>
                <!-- BirthDate Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- Phone Block Start -->
                <label for="phone" class="w-100">
                  Telefone
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Informe seu Telefone"
                    v-model="registerForm.phone"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.phone.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.phone.required"
                    class="invalid-feedback!"
                  >
                    O campo telefone é obrigatório!
                  </div>
                </label>
                <!-- Phone Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- City Block Start -->
                <label for="city" class="w-100">
                  Cidade
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Informe sua Cidade"
                    v-model="registerForm.city"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.city.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.city.required"
                    class="invalid-feedback!"
                  >
                    O campo cidade é obrigatório!
                  </div>
                </label>
                <!-- City Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- State Block Start -->
                <label for="state" class="w-100">
                  Estado
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Informe seu Estado"
                    v-model="registerForm.state"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.state.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.state.required"
                    class="invalid-feedback!"
                  >
                    O campo estado é obrigatório!
                  </div>
                </label>
                <!-- State Block End -->
              </div>
              <div class="col-md-6 col-sm-12">
                <!-- Country Block Start -->
                <label for="country" class="w-100">
                  País
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Informe seu País"
                    v-model="registerForm.country"
                    :class="{
                      'is-invalid': isSubmitted && $v.registerForm.country.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.country.required"
                    class="invalid-feedback!"
                  >
                    O campo país é obrigatório!
                  </div>
                </label>
                <!-- Country Block End -->
                <!-- Phone Block Start -->
                <!--
                  <MazPhoneNumberInput
                    v-model="registerForm.phone"
                    @update="results = $event"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.phone.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.phone.required"
                    class="invalid-feedback!"
                  >
                    O campo telefone é obrigatório!
                  </div>
                -->
                <!-- Phone Block End -->
              </div>
            </div>
          </div>

          <p class="text-center">
              Já possui uma conta cadastrada? <router-link to="/">
              Faça o Login Aqui
            </router-link>
          </p>
          <!-- Button Block Start -->
          <center>
            <button
              @click="submitRegisterUser"
              class="btn btn-primary btn-block w-50 my-4"
            >
              Cadastrar
            </button>
          </center>
          <!-- Button Block End -->
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./Register.js"></script>

<style src="" scoped></style>
