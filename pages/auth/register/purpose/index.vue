<template>
  <div class="limit__container mx-auto d-flex align-center justify-center fill-height flex-column">
    <div class="auth">
      <Loading v-if="loading" :fullWidth="true"/>
      <v-form
        class="auth__form"
        ref="form"
        lazy-validation
      >
        <GoBack url="/auth/register"/>
        <h2 class="form__title">For what purposes</h2>
        <div class="select__purpose mt-4 mb-7">
          <div class="d-flex align-center mb-5" v-for="role in purpose_list" :key="role.id">
            <input v-model="purpose" type="radio" :value="role.id" :id="role.id">
            <label :for="role.id">{{ role.name }}</label>
          </div>
        </div>
        <button
          class="btn-primary"
          :disabled="disabled"
          type="submit"
          @click.prevent="redirect"
        >
          Create an account
        </button>
      </v-form>
      <p class="terms__policy">
        By clicking "Create Account", I acknowledge that I have read the <br>
        <nuxt-link to="">Terms of Use</nuxt-link>
        and
        <nuxt-link to="">Privacy Policy</nuxt-link>
        .
      </p>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/utils/GoBack";
import Loading from "@/components/utils/Loading";

export default {
  data: () => ({
    disabled: true,
    purpose: '',
    loading: true,
    purpose_list: []
  }),
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  components: {
    Loading,
    GoBack
  },
  mounted() {
    if (this.$store.state.registerCredentials.first_name) {
      this.loading = false
      this.$axios.get('/api/auth/purposes').then(({data}) => {
        this.purpose_list = data
      })
    } else {
      this.$router.push({path: '/auth/register'})
    }
  },
  methods: {
    redirect() {
      let crd = this.$store.state.registerCredentials
      this.$axios.post('/api/auth/register', {
        first_name: crd.first_name,
        last_name: crd.last_name,
        password: crd.password,
        email: crd.email,
        role_id: String(this.purpose),
        purpose_id: String(this.purpose)
      }).then((res) => {
        localStorage.setItem('TOKEN', res.data.access_token)
        this.$axios.setToken(res.data.access_token, 'Bearer', ['delete', 'post', 'get'])
        console.log(res.data.access_token)
        console.log(this)
        this.$store.state.registerCredentials = {}
      }).catch((err) => {
        throw err
      })
    }
  },
  watch: {
    purpose: {
      handler() {
        this.disabled = false
      }
    }
  }
}
</script>
