<template>
  <div>
    <h1>test 2</h1>
    <v-container>
      <v-row>
        <v-col>
          <v-card max-height="200">
            <v-btn @click="generate">Generate ramdom flower position</v-btn>

            <GmapMap style=" height: 200px;" :zoom="15" :center="center" ref="map">
              <GmapMarker v-for="(marker, index) in markers" :key="index" :position="marker.latLng" />
            </GmapMap>
          </v-card>



        </v-col>
      </v-row>
    </v-container>

  </div>
</template>

<script>
export default {
  props: {
    center: {
      type: Object,
      default: () => {
        return { lat: 48.7587344, lng: 2.0488569 }
      }
    }
  },
  data() {
    return {
      options: {
        mapTypeId: 'roadmap',
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: true,
        disableDefaultUi: false
      },
      markers: [],
      place: null,
    }
  },
  description: `
  In which a random set of points are generated, and
  the bounds of the map are changed to fit the points
  `,
  watch: {
    markers(markers) {
      if (markers.length > 2) {
        const bounds = new google.maps.LatLngBounds()
        for (let m of markers) {
          bounds.extend(m.latLng)
        }
        this.$refs.map.fitBounds(bounds)
      }
    }
  },
  methods: {
    generate() {
      const spread = Math.random() + 0.001

      this.markers = Array.from(Array(10).keys())
        .map(m => ({
          latLng: {
            lat: this.center.lat + (Math.random() - 0.5) * spread,
            lng: this.center.lng + (Math.random() - 0.5) * spread,
          }
        }))
    }
  }
}
</script>
<style>
.custom-boder {
  border: solid;
}
</style>
