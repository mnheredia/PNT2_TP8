<template>

  <section>
    <div class="jumbotron">
      <h2>Punto 1 - Formulario</h2>
      <hr>
      <vue-form :state="formState" @submit.prevent="enviar()">

        <!-- CAMPO NOMBRE -->
        <!-- <validate tag="div">
          <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" class="form-control" autocomplete="off"
            v-model.trim="$store.state.formData.nombre" required :minlength="nombreMinLength"
            :maxlength="nombreMaxLength" no-espacios> -->

          <!-- <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">Error: No se permiten espacios intermedios en este
              campo</div>
            <div slot="minlength" class="alert alert-danger mt-1">Error: Este campo requiere como mínimo {{ nombreMinLength }} caracteres</div> 
            <div slot="minlength" class="alert alert-danger mt-1"> Este campo debe poseer al menos {{ nombreMinLength }} caracteres.</div>
            <div slot="maxlength" class="alert alert-danger mt-1"> Este campo no debe poseer mas de {{ nombreMaxLength }} caracteres. </div>
            <div v-if="formData.nombre.length == nombreMaxLength" class="alert alert-warning mt-1">Error: Este campo debe tener como máximo {{ nombreMaxLength }} caracteres</div>              
            -->


<!-- 



            <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>            
          <div slot="no-espacios" class="alert alert-danger mt-1">Error: No se permiten espacios intermedios en este campo</div>            
          <div slot="minlength" class="alert alert-danger mt-1">Error: Este campo requiere como mínimo {{ nombreMinLength }} caracteres</div>            
          <div v-if="formData.nombre.length == nombreMaxLength" class="alert alert-warning mt-1">Error: Este campo debe tener como máximo {{ nombreMaxLength }} caracteres</div>            
        </field-messages>
          </field-messages>
        </validate> -->
        <validate tag="div">
        <label for="nombre">Nombre</label>
        <input 
          type="text" 
          id="nombre" 
          name="nombre" 
          class="form-control"
          autocomplete="off"
          v-model.trim="formData.nombre"
          required
          :minlength="nombreMinLength"
          :maxlength="nombreMaxLength"
          no-espacios 
        >
        <field-messages name="nombre" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>            
          <div slot="no-espacios" class="alert alert-danger mt-1">Error: No se permiten espacios intermedios en este campo</div>            
          <div slot="minlength" class="alert alert-danger mt-1">Error: Este campo requiere como mínimo {{ nombreMinLength }} caracteres</div>            
          <div v-if="formData.nombre.length == nombreMaxLength" class="alert alert-warning mt-1">Error: Este campo debe tener como máximo {{ nombreMaxLength }} caracteres</div>            
        </field-messages>
      </validate>
        <br>

        <!-- CAMPO EDAD -->
        <validate tag="div">
          <label for="edad">Edad</label>
          <input type="number" id="edad" name="edad" class="form-control" autocomplete="off"
            v-model.number="formData.edad" required :min="edadMin" :max="edadMax">
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="min" class="alert alert-danger mt-1">Error: La edad mínima es de {{ edadMin }} años</div>
            <div slot="max" class="alert alert-danger mt-1">Error: La edad máxima permitida es de {{ edadMax }} años
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- CAMPO EMAIL -->
        <validate tag="div">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" class="form-control" autocomplete="off"
            v-model.trim="formData.email" required>
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo obligatorio</div>
            <div slot="email" class="alert alert-danger mt-1">Error: Email no válido</div>
          </field-messages>
        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Enviar</button>
      </vue-form>
    </div>
  </section>




</template>

<script>

export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      nombreMinLength: 5,
      nombreMaxLength: 15,
      edadMin: 18,
      edadMax: 120
    }
  },

  methods: {
    enviar() {
      // const user = { "nombre": 'then catch' + this.formData.nombre, "email": this.formData.email, "edad": this.formData.edad }
      this.$store.dispatch('postUserThenCatch')

      this.formData = this.getInitialData();
      this.formState._reset();
    },

    getInitialData() {
      return {
        nombre: '',
        edad: '',
        email: '',
      }
    },

    clear() {
      this.formData = {
        nombre: null,
        edad: null,
        email: null
      }
      this.formState._reset()
    },

    // POST THEN/CATCH
    postUserThenCatch() {
      const user = { "nombre": 'then catch' + this.formData.nombre, "email": this.formData.email, "edad": this.formData.edad }
      this.$store.dispatch('postUserThenCatch', user)
    },

    // POST ASYNC/AWAIT
    async postUser() {
      const user = { "nombre": 'async await' + this.formData.nombre, "email": this.formData.email, "edad": this.formData.edad }
      this.$store.dispatch('postUser', user)
    },

  }
}

</script>

<style>
.jumbotron {
  background-color: rgb(180, 221, 180);
  color: white;
}

hr {
  background-color: #eee;
}

pre {
  color: white;
}
</style>
