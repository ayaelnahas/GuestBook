<template>
  <div class="messageItem">
    <v-card class="mx-auto" color="#26c6da" dark max-width="700">
      <v-flex class="d-flex justify-end">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="ma-2 pa-0">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="headline">
              <p>Edit message</p>
              <v-spacer></v-spacer>
              <v-btn icon ml-4 @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-card-title>

            <v-card-text>
              <!-- Here will retrieve the message form and display the data of selected message to edit -->
            </v-card-text>
          </v-card>
        </v-dialog>

        <v-btn
          icon
          class="ma-2 pa-0 ml-2"
          @click="deleteMessage(message)"
          :loading="loading"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-flex>

      <v-card-text class="text-h5 font-weight-bold">
        "Turns out semicolon-less style is easier and safer in TS because most
        gotcha edge cases are type invalid as well."
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
          </v-list-item-content>

          <v-row align="center" justify="end">
            <v-icon class="mr-1"> mdi-message-text </v-icon>
            <span class="subheading mr-2">Reply</span>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="js">

  export default  {
    name: 'message-item',
    props: [],
    mounted () {

      },
    data () {
      return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.message-item {
}
</style>
