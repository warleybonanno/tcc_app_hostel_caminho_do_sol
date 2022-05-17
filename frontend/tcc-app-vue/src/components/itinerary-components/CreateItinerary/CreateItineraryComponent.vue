<template>
  <div class="container-fluid">
    <h1 class="text-center mt-3 mb-4">Hostel Caminho do Sol</h1>
    <h2 class="text-center">Criar Roteiro de Viagem</h2>
    <div class="row">
      <div class="col-md-8 offset-md-2 col-sm-10 offset-sm-1">
        <form
          class="form"
          v-on:submit.prevent="registerSubmitCreateItineraryForm()"
        >
          <div class="form-group mb-3 pb-4 pt-4 border border-info p-4 bg-light">
            <h4>Dados Gerais da Viagem</h4>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- DaysOfStay Block Start -->
                <div class="input-group">
                  <MazInput
                    type="number"
                    class="w-100"
                    placeholder="Quantos dias terá seu roteiro?"
                    v-model="createItineraryForm.daysOfStay"
                    :class="{
                          'is-invalid': isSubmitted && $v.createItineraryForm.daysOfStay.$error,
                      }"
                  />
                  <div
                      v-if="isSubmitted && $v.createItineraryForm.daysOfStay.$error"
                      class="invalid-feedback"
                  >
                      <span v-if="!$v.createItineraryForm.daysOfStay.required">
                        O campo dias de estadia é obrigatório!
                      </span>
                      <span v-else-if="!$v.createItineraryForm.daysOfStay.between">
                        Quantidade de dias de estadia inválido. Insira um valor entre 1 e 7 dias.
                      </span>
                  </div>
                </div>
                <!-- DaysOfStay Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- arrivalDate Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.arrivalDate"
                    placeholder="Data de Chegada"
                    class="w-100"
                    formatted="L"
                    @formatted="pickerFormatted2 = $event"
                    no-time
                    noNow
                    :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.arrivalDate.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && $v.createItineraryForm.arrivalDate.$error"
                    class="invalid-feedback!"
                  >
                    <span v-if="!$v.createItineraryForm.arrivalDate.required">
                      O campo data de chegada é obrigatório.
                    </span>
                    <span v-else-if="!$v.createItineraryForm.arrivalDate.minValue">
                      A data de chegada não pode ser inferior ao dia de hoje.
                    </span>
                  </div>
                <!-- arrivalDate Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- departureDate Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.departureDate"
                    placeholder="Data de Partida"
                    class="w-100"
                    formatted="L"
                    @formatted="pickerFormatted2 = $event"
                    no-time
                    noNow
                    :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.departureDate.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.departureDate.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo data de partida é obrigatório!</span>
                  </div>
                <!-- departureDate Block End -->
              </div>
            </div>
          </div>

          <div class="form-group mb-3 pb-4 pt-4 border border-info p-4 bg-light text-center">
            <h4 class="center">Escolha seu perfil de Viajante</h4>
            <p>Seu roteiro será gerado a partir do perfil escolhido.<br>
              Após o roteiro gerado, você poderá edita-lo conforme sua vontade.</p>
            <div class="row mt-4">
              <div class="col-md-12 col-sm-12 mb-4">
                <!-- Profile Block Start -->
                  <MazSelect
                    v-model="createItineraryForm.profile"
                    placeholder="Perfil de viajante"
                    type="text"
                    class="w-100"
                    :options="options"
                    :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.profile.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.profile.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo perfil de viajante é obrigatório!</span>
                  </div>
                <!-- Profile Block End -->
              </div>
            </div>
          </div>

          <!-- Button Block Start -->
          <center>
            <button
              @click="submitCreateItinerary"
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

<script src="./CreateItinerary.js"></script>

<style src="./CreateItinerary.css" scoped></style>
