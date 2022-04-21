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
                <MazInput
                  v-model="createItineraryForm.daysOfStay"
                  placeholder="Quantos dias de estadia"
                  type="text"
                  class="w-100"
                  :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.daysOfStay.$error,
                    }"
                />
                <div
                    v-if="isSubmitted && !$v.createItineraryForm.daysOfStay.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo dias de estadia é obrigatório!</span>
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
                    v-if="isSubmitted && !$v.createItineraryForm.arrivalDate.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo data de chegada é obrigatório!</span>
                  </div>
                <!-- arrivalDate Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- arrivalTime Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.arrivalTime"
                    placeholder="Horário de Chegada"
                    class="w-100"
                    formatted="LT"
                    @formatted="pickerFormatted2 = $event"
                    no-date
                    noNow
                    :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.arrivalTime.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.arrivalTime.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo horário de chegada é obrigatório!</span>
                  </div>
                <!-- arrivalTime Block End -->
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
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- departureTime Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.departureTime"
                    placeholder="Horário de Partida"
                    class="w-100"
                    formatted="LT"
                    @formatted="pickerFormatted2 = $event"
                    no-date
                    noNow
                    :class="{
                        'is-invalid': isSubmitted && $v.createItineraryForm.departureTime.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.departureTime.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo horário de partida é obrigatório!</span>
                  </div>
                <!-- departureTime Block End -->
              </div>
            </div>
          </div>
          <div class="form-group mb-3 pb-4 pt-4 border border-info p-4 bg-light">
            <h4>Rotina de Viagem</h4>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- startTimeActivities Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.startTimeActivities"
                    placeholder="Horário de Inicio das Atividades"
                    class="w-100"
                    formatted="LT"
                    @formatted="pickerFormatted2 = $event"
                    no-date
                    noNow
                    :class="{
                        'is-invalid':
                          isSubmitted && $v.createItineraryForm.startTimeActivities.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.startTimeActivities.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo horário de inicio das atividades é obrigatório!</span>
                  </div>
                <!-- startTimeActivities Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- endTimeActivities Block Start -->
                  <MazPicker
                    v-model="createItineraryForm.endTimeActivities"
                    placeholder="Horário de Encerramento das Atividades"
                    class="w-100"
                    formatted="LT"
                    @formatted="pickerFormatted2 = $event"
                    no-date
                    noNow
                    :class="{
                        'is-invalid':
                          isSubmitted && $v.createItineraryForm.endTimeActivities.$error,
                    }"
                  />
                  <div
                    v-if="isSubmitted && !$v.createItineraryForm.endTimeActivities.required"
                    class="invalid-feedback!"
                  >
                    <span>O campo horário de inicio das atividades é obrigatório!</span>
                  </div>
                <!-- startTimeActivities Block End -->
              </div>
            </div>
          </div>
          <div class="form-group mb-3 pb-4 pt-4 border border-info p-4 bg-light">
            <h4>Seus Interesses na Viagem</h4>
            <h5>Para definir os seus interesses na viagem escolha entre os valores 0 e 3</h5>
            <p>0 - Nenhum /
               1 - Pouco /
               2 - Médio /
               3 - Muito
            </p>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- museumInterest Block Start -->
                  <p>Museus</p>
                  <MazSlider
                    v-model="createItineraryForm.museumInterest"
                    type="number"
                    class="w-100"
                    max= 3
                  />
                <!-- museumInterest Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- beachInterest Block Start -->
                  <p>Praias</p>
                  <MazSlider
                    v-model="createItineraryForm.beachInterest"
                    class="w-100"
                    max= 3
                  />
                <!-- beachInterest Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- adventureInterest Block Start -->
                  <p>Aventuras</p>
                  <MazSlider
                    v-model="createItineraryForm.adventureInterest"
                    class="w-100"
                    max= 3
                  />
                <!-- adventureInterest Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- foodInterest Block Start -->
                  <p>Restaurantes/Bares</p>
                  <MazSlider
                    v-model="createItineraryForm.foodInterest"
                    class="w-100"
                    max= 3
                  />
                <!-- foodInterest Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- purchaseInterest Block Start -->
                  <p>Compras</p>
                  <MazSlider
                    v-model="createItineraryForm.purchaseInterest"
                    class="w-100"
                    max= 3
                  />
                <!-- purchaseInterest Block End -->
              </div>
              <div class="col-md-6 col-sm-12 mb-4">
                <!-- touristAttractionsInterest Block Start -->
                  <p>Atrações Turísticas</p>
                  <MazSlider
                    v-model="createItineraryForm.touristAttractionsInterest"
                    class="w-100"
                    max= 3
                  />
                <!-- touristAttractionsInterest Block End -->
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
