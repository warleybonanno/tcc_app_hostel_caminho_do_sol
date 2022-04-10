<template>
  <div class="container-fluid">
    <h1 class="text-center mt-3 mb-4">Hostel Caminho do Sol</h1>
    <h2 class="text-center">Cadastre-se agora!</h2>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        <form
          class="form"
          v-on:submit.prevent="registerSubmitUserForm()"
        >
          <div class="form-group mb-3 pb-4 pt-4 border border-info p-4 bg-light">
            <h4>Dados de Acesso</h4>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- E-mail Block Start -->
                <div class="input-group">
                    <MazInput
                      type="email"
                      class="w-100"
                      placeholder="E-mail"
                      v-model="registerForm.email"
                      left-icon-name="email"
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
                </div>
                <!-- E-mail Block End -->
              </div>
              <div class="col-md-6 col-sm-12">
                <!-- Password Block Start -->
                  <MazInput
                    v-model="registerForm.password"
                    placeholder="Senha"
                    type="password"
                    class="w-100"
                    left-icon-name="lock"
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
                <!-- Password Block End -->
              </div>
            </div>
          </div>
          <div class="form-group mb-5 pb-4 pt-4 border border-info p-4 bg-light">
            <h4>Dados de Cadastro</h4>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- Name Block Start -->
                  <MazInput
                    v-model="registerForm.name"
                    placeholder="Nome Completo"
                    type="text"
                    class="w-100"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.name.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.name.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo nome completo é obrigatório!</span>
                  </div>
                <!-- Name Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- Sex Block Start -->
                  <MazSelect
                    v-model="registerForm.sex"
                    placeholder="Sexo"
                    type="text"
                    class="w-100"
                    :options="options"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.sex.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.sex.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo sexo é obrigatório!</span>
                  </div>
                <!-- Sex Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- BirthDate Block Start -->
                  <MazPicker
                    v-model="registerForm.birthDate"
                    placeholder="Data de Nascimento"
                    class="w-100"
                    formatted="L"
                    @formatted="pickerFormatted2 = $event"
                    no-time
                    noNow
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.birthDate.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.birthDate.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo data de nascimento é obrigatório!</span>
                  </div>
                <!-- BirthDate Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- Phone Block Start -->
                  <MazPhoneNumberInput
                    v-model="registerForm.phone"
                    placeholder="Telefone"
                    class="w-100"
                    noValidation
                    no-flags
                    @update="resultsExample = $event"
                    :translations="{
                      countrySelectorLabel: 'Código do país',
                      countrySelectorError: 'Escolha um país',
                      phoneNumberLabel: 'Número de telefone',
                      example: 'Exemplo :'
                    }"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.phone.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.phone.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo telefone é obrigatório!</span>
                  </div>
                <!-- Phone Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- City Block Start -->
                  <MazInput
                    v-model="registerForm.city"
                    placeholder="Cidade"
                    type="text"
                    class="w-100"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.city.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.city.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo cidade é obrigatório!</span>
                  </div>
                <!-- City Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- State Block Start -->
                  <MazInput
                    v-model="registerForm.state"
                    placeholder="Estado"
                    type="text"
                    class="w-100"
                    :class="{
                        'is-invalid': isSubmitted && $v.registerForm.state.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.state.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo estado é obrigatório!</span>
                  </div>
                <!-- State Block End -->
              </div>
              <div class="col-md-6 col-sm-12">
                <!-- Country Block Start -->
                  <MazInput
                    v-model="registerForm.country"
                    placeholder="País"
                    type="text"
                    class="w-100"
                    :class="{
                      'is-invalid': isSubmitted && $v.registerForm.country.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.registerForm.country.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo país é obrigatório!</span>
                  </div>
                <!-- Country Block End -->
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

<style src="./Register.css" scoped></style>
