 <template>
  <div class="container-fluid">
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

              <div>
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
</template>
