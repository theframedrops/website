# Schedule / Events

We're currently working on figuring out a date(s) and time(s) that fit [participating streamers](/streamers-setup)'s schedules.

Likewise, we're also still working out what events we'll have. It's increasingly likely that we'll have multiple groups of
folks that can break into individual groups for specific events.

[Join our Discord](https://discord.theframedrops.com) to get notified when these details are nailed down.

<div id="calendar">
  <v-app>
    <event-modal :event="activeEvent" @close="setActiveEvent({event: null})"></event-modal>
    <v-calendar
        @click:event="setActiveEvent($event)"
        ref="calendar"
        color="primary"
        type="custom-daily"
        start="2021-09-25"
        end="2021-09-26"
        :events="events"
        :event-color="getEventColor"
        @change="fetchEvents"
    ></v-calendar>
    </v-app>
</div>

<script>
Vue.component('event-modal', {
    props: ['event'],
    emits: ['close'],
    template: `
  <v-dialog
      v-model="event"
      @input="setDialogOpenVal($event)"
      transition="dialog-bottom-transition"
    >
 <v-card
          class="mx-auto"
          max-width="400"
      >
      <v-img
          class="white--text align-end"
          height="200px"
          :src="event?.backgroundImage"
      >
        <v-card-title>{{event?.name}}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-0">
        {{event?.start.toLocaleString()}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        {{event?.description}}
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="orange"
            text
        >
          Share
        </v-btn>

        <v-btn
            color="orange"
            text
        >
          Explore
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
    `,
    methods: {
        setDialogOpenVal(val) {
            if (val) return; 
            this.$emit('close')
        },
    }
});

new Vue({
  el: '#calendar',
  vuetify: new Vuetify(),
  data: () => ({
    events: window.Schedule,
    activeEvent: null
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    setActiveEvent({event}) {
       this.activeEvent = event;
    },
    getEventColor (event) {
      return event.color
    },
fetchEvents() {
return this.events;
}
  },
})
</script>

<style>
.v-application {
    all: unset;
}

.v-dialog > .v-card > .v-card__text {
    box-sizing: border-box;
}

.v-dialog {
    width: initial;
}
</style>
