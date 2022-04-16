<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="" class="navbar-brand">Hostel Caminho do Sol</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="colapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toogle navigation"
      >
        <span class="navbar-toggler-icon">

        </span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item-active">
            <a class="nav-link" @click="logOutUser" @keypress="logOutUser">Sair</a>
          </li>
        </ul>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">
                Nome Completo: {{ user.name }}
              </li>
              <li class="list-group-item">
                E-mail: {{ user.email }}
              </li>
              <li class="list-group-item">
                ID Usuário: {{ user._id }}
              </li>
            </ul>
          </div>
        </div>
      </div>
  </section>
  </div>

</template>

<script src="./Home.js"></script>

<style src="" scoped></style>
