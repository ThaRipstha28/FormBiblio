Vue.use(app);
new vue({
  el: '#app',
  data: {
    form : {
      nombre: '',
      cedula: '',
      sexo: '',
      Numpc: ''
      
    },
    options: {
      inquiry: [
        { value: 'Sexo', text: "selecionalo"},
        { value: 'hombre', text: "Hombre"},
        { value: 'mujer', text: "Mujer"}
      ]
    }
  }
});
