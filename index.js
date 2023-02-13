
const apiUrl = 'https://vue3-course-api.hexschool.io/v2';
const apiPath = 'hazel_vue';

Vue.createApp({
  data() {
    return {
      loadingStatus: {
        loadingItem: '',
      },
      products: [],
      product: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      cart: {},
    };
  },
  components: {
    VForm: Form,
    VField: Field,
    ErrorMessage: ErrorMessage,
  },
  methods: {

  },
  mounted() {

  },
})
  .mount('#app');