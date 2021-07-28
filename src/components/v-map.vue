<template>
  <div>
    <div id="map"></div>
  </div>
</template>
<script>
import { loadYmap } from "vue-yandex-maps";

export default {
  components: {},
  name: "v-map",
  props: {},
  async mounted() {
    
    const settings = {
  apiKey: 'd1547931-4c0e-4766-8df1-36bd990919b7',
  lang: "ru_RU",
  coordorder: 'latlong',
  version: "2.1"
};
    await loadYmap(settings);
    // eslint-disable-next-line
    let myPlacemark,myMap = new ymaps.Map('map', {
            center: this.cords,
            zoom: 9,
            controls: ["geolocationControl"],
        }, {
            searchControlProvider: 'yandex#search'
        });

    // Слушаем клик на карте.
    myMap.events.add(
      "click",
      function (e) {
        let coords = e.get("coords");
        // Если метка уже создана – просто передвигаем ее.
        if (myPlacemark) {
          myPlacemark.geometry.setCoordinates(coords);
        }
        // Если нет – создаем.
        else {
         myPlacemark = createPlacemark(coords);
         myMap.geoObjects.add(myPlacemark);
        }
       
        
        this.getcoords(coords);
        this.getAddress(coords,myPlacemark);
        console.log(this.cords);
      },this
    );

    // Создание метки.
    function createPlacemark(coords) {
         // eslint-disable-next-line
      return new ymaps.Placemark(
        coords,
        {
          iconCaption: "Место заявки",
        },
        {
          preset: "islands#violetDotIconWithCaption",
          draggable: true,
        }
      );
    }
  },
  methods: {
    getcoords(coords){
      this.cords = coords;
    },
    getAddress(coords,myPlacemark) {
      // eslint-disable-next-line
        myPlacemark.properties.set('iconCaption', 'поиск...');
        // eslint-disable-next-line
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
            // eslint-disable-next-line
          this.adress = (myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                      balloonContent: firstGeoObject.getAddressLine(),
                      
                }));
        });
       console.log(this.adress)
    },
  },
  data() {
    return {
      cords: [55.72, 37.65],
      myPlacemark: {},
      myMap: {},
      adress: {},
    };
  },
};
</script>

<style>
#map {
  width: 600px;
  height: 600px;
}
</style>