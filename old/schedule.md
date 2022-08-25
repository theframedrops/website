# Schedule / Events

The next Frame Drops will be hosted on the weekend of January 1st. Different [participating streamers](/streamers) will be
live at different times, but we're centered around those dates in general.

We have a calendar of events below!

**The dates listed on the calendar below adapt to your system's set timezone.** Assuming your computer automatically sets the time, these dates should be accurate for your usage, regardless of where you are in the world

[Join our Discord](https://discord.theframedrops.com) to participate in our events, get notified when new events are announced,
or even help us organize your own event for the charity stream!

<div id="calendar">
  <v-app :dark="darkMode">
    <event-modal :darkMode="darkMode" :event="activeEvent" @close="setActiveEvent({event: null})"></event-modal>
    <v-manual-calendar :events="events" @pick="setActiveEvent($event)"></v-manual-calendar>
    <div aria-hidden="true">
    <v-calendar
        :dark="darkMode"
        @click:event="setActiveEvent($event)"
        ref="calendar"
        color="primary"
        type="custom-daily"
        :start="startDateStr"
        :end="endDateStr"
        :events="events"
        :event-color="getEventColor"
        @change="fetchEvents"
    ></v-calendar>
    </div>
    </v-app>
</div>

<script>
Vue.component('event-modal', {
    props: ['event', 'darkMode'],
    emits: ['close'],
    template: `
<div>
  <v-dialog
      attach="#dialog-entry"
      :value="event"
      @input="setDialogOpenVal($event)"
      transition="dialog-bottom-transition"
    >
 <v-card
          :dark="darkMode" 
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
            color="primary"
            text
            @click="copyURL()"
        >
          Share
        </v-btn>

        <v-btn
            color="primary"
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
      :light="!darkMode"
      :dark="darkMode"
    >
      {{snackbarMsg}}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="primary"
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
            const cal = ics(this.event.id);
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

Vue.component('v-manual-calendar', {
    props: ['events'],
    emits: ['pick'],
    template: `
        <ul class="sr-only sr-only-focusable manual-list" aria-label="List of activities in the event" tabIndex="0">
            <li v-for="event in events" :key="event.id">
                <button @click="selectEvent(event)">
                    {{event.name}} - starts at {{dayjs(event.start).format('h:mm A dddd D')}}, ends at {{dayjs(event.end).format('h:mm A dddd D')}}
                </button>
            </li>
        </ul>
    `,
    methods: {
        selectEvent(event) {
            this.$emit('pick', {event});
        },
        dayjs
    }
});

Vue.use(PartialVuetify.default.Vuetify, {
      components: PartialVuetify.default.components,
});

new Vue({
  el: '#calendar',
  vuetify: new PartialVuetify.default.Vuetify({
    theme: {disable: true}
  }),
  data: () => ({
    events: window.Schedule,
    activeEvent: null,
    darkMode: false,
    startDateStr: dayjs(window.Schedule[0].start).format('YYYY-MM-DD'),
    endDateStr: dayjs(window.Schedule[window.Schedule.length - 1].end).format('YYYY-MM-DD')
  }),
  mounted () {
    const themeListener = new MutationObserver((mutations) => {
      const currentValue = mutations[0].target.attributes['aria-pressed'].value;
    
      this.darkMode = currentValue === 'true';
    });
    
    themeListener.observe(document.getElementById('docsify-darklight-theme'), {
      attributes: true,
      attributeFilter: ['aria-pressed'],
    });

    const params = this.getParams();
    if (!params.has('eventId')) return;
    const eventId = params.get('eventId');
    const matchEvent = this.events.find(e => `${e.id}`.trim() === `${eventId}`.trim());
    if (!matchEvent) return;
    this.setActiveEvent({event: matchEvent});
    
    setTimeout(() => {    
        this.$refs.calendar.checkChange();
    }, 0);
  },
  updated() {
    document.querySelectorAll('.v-calendar').forEach(cEl => {
        cEl.querySelectorAll('button').forEach(bEl => bEl.tabIndex = -1)
    })
  },
  methods: {
    getParams() {
        return new URLSearchParams((new URL(location.href)).hash.replace(/^[^\?]*$|.*(?=\?)/, ''));
    },
    setActiveEvent({event}) {
       this.activeEvent = event;
        const currentParams = this.getParams();
        if (event) {
            currentParams.set('eventId', event.id);
        } else {
            currentParams.delete('eventId')
        }
        location.hash = (new URL(location.href).hash).replace(/(?:\?.*?$)|$/, "?" + currentParams.toString());
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

.markdown-section :is(.brown, .green, .blue, .red) strong {
color: white !important;
}

.markdown-section .orange {
background-color: #ffb445 !important;
}

.markdown-section .blue {
background-color: #005ba3 !important;
}

.markdown-section .green {
background-color: #1d7e21 !important;
}

.markdown-section .red {
background-color: #980a00 !important;
}

.markdown-section :is(.orange, .yellow) :is(strong, *) {
color: black !important;
}


/* Originally ripped from v-app */

.v-dialog {
    width: initial;
}

.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}

.align-end {
    align-items: flex-end !important;
}

.white--text {
    color: #fff !important;
    caret-color: #fff !important;
}

.v-responsive__sizer ~ .v-responsive__content {
    margin-left: -100%;
}

.primary--text {
    color: var(--accent) !important;
    caret-color: var(--accent) !important;
}

.v-calendar, .v-card, .v-snack__wrapper {
    background-color: var(--background) !important;
}

.v-card__text, .v-card__subtitle, .v-snack__wrapper {
    color: var(--textColor) !important;
}

:is(.v-card__text, .v-card__subtitle) a {
    color: var(--accent) !important;
}

.v-card__subtitle {
    opacity: 0.8;
}

.manual-list {
    list-style-position: unset;
    text-align: left;
    font-size: 1rem;
}

.manual-list button {
    background: #e8defd;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid black;
    margin: 1rem 0;
}


.manual-list button:hover, .manual-list button:focus {              
    background: #462b63;
    color: white;
}
</style>
