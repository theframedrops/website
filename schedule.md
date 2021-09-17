# Schedule / Events

We're currently working on figuring out a date(s) and time(s) that fit [participating streamers](/streamers-setup)'s
schedules.

Likewise, we're also still working out what events we'll have. It's increasingly likely that we'll have multiple groups
of folks that can break into individual groups for specific events.

[Join our Discord](https://discord.theframedrops.com) to get notified when these details are nailed down.

<div id="calendar">
  <v-app v-if="renderPlz">
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
<div>
  <v-dialog
      :value="event"
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
        <span aria-hidden="true">{{timeRangeShortDate}}</span>
        <span class="sr-only">{{timeRangeLongDate}}</span>
        {{timeRangeStr}}
      </v-card-subtitle>

      <v-card-text class="text--primary" v-html="event?.description || ''">
      </v-card-text>

      <v-card-actions>
        <v-btn
            color="orange"
            text
            @click="copyURL()"
        >
          Share
        </v-btn>

        <v-btn
            color="orange"
            text
            @click="downloadIcs()"
        >
          Save Event
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar
      :value="!!snackbarMsg"
    >
      {{snackbarMsg}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="snackbarMsg = ''"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
    </div>
    `,
    methods: {
        setDialogOpenVal(val) {
            if (val) return; 
            this.$emit('close')
        },
        copyURL() {
            navigator.clipboard.writeText(location.href);
            this.snackbarMsg = "Event URL copied. Paste elsewhere to share event information";
        },
        downloadIcs() {
            const cal = ics();
            cal.addEvent(
                this.event.name, 
                this.event.description, 
                location.href, 
                this.event.start, 
                this.event.end
            );
            cal.download('charity_stream_event');
            this.snackbarMsg = "ICS file is downloaded. You'll need to import this into your calendar app"
        }
    },
    data() {
        return {
            snackbarMsg: "",
            snackbarTimeout: null
        }
    },
    computed: {
        timeRangeStr() {
            if (!this.event) return "";
            return dayjs(this.event.start).format('h:mm a') + " to " + dayjs(this.event.end).format('h:mm a') 
        },
        timeRangeShortDate() {
            if (!this.event) return "";
            return dayjs(this.event.start).format('ddd D,') 
        },
        timeRangeLongDate() {
            if (!this.event) return "";
            return dayjs(this.event.start).format('dddd D,') 
        }
    },
    watch: {
        snackbarMsg(val) {
            if (!val) return;
            clearTimeout(this.snackbarTimeout);
            this.snackbarTimeout = setTimeout(() => this.snackbarMsg = val, 5000); 
        }
    }
});

new Vue({
  el: '#calendar',
  vuetify: new Vuetify(),
  data: () => ({
    events: window.Schedule,
    activeEvent: null,
    renderPlz: false
  }),
  mounted () {
    if (!location.hash.includes('caltest')) return;
    this.renderPlz = true;
    const params = this.getParams();
    if (!params.has('eventId')) return;
    const eventId = params.get('eventId');
    const matchEvent = this.events.find(e => `${e.id}`.trim() === `${eventId}`.trim());
    if (!matchEvent) return;
    this.setActiveEvent({event: matchEvent})
    
    setTimeout(() => {    
this.$refs.calendar.checkChange();
}, 0);
    },
  methods: {
    getParams() {
        return new URLSearchParams((new URL(location.href)).hash.replace(/.*?(?=\?)/, ''));
    },
    setActiveEvent({event}) {
       this.activeEvent = event;
        const currentParams = this.getParams();
        if (event) {
            currentParams.set('eventId', event.id);
        } else {
            currentParams.delete('eventId')
        }
        location.hash = (new URL(location.href).hash).replace(/\?.*?$/, "?" + currentParams.toString());
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
    text-align: left;
    white-space: pre-line;
}

.v-responsive__content {
background: rgba(0,0,0,0.75);
}

.markdown-section :is(.brown, .green, .blue) strong {
color: white !important;
}

.v-dialog {
    width: initial;
}
</style>
