//Crear aplicación
Vue.createApp({
  //Definir la DATA
  data() {
    return {
      goals: [],
      enteredValue: '', //Conectarlo con HTML
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }//Método para agregar goals
  }
}).mount('#app');