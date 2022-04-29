const app = new Vue({
    el: '#app',
    data:{
        data:null,
        emails:[]
    },
    methods:{},
    mounted(){

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
        })

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            this.emails.push(response.data.response)
            this.data = response.data
        })
    }

})