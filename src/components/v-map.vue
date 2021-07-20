<template>
  <div>
    <!-- Карта-при клике появляется метка {{ cords }} -->
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
    const settings = { lang: "ru_RU" };
    await loadYmap(settings);
  
    // let geolocation = ymaps.geolocation, myPlacemark,
    
    //   myMap = new ymaps.Map(
    //     "map",
    //     {
    //       center: this.cords,
    //       zoom: 10,
    //       controls: ["geolocationControl"],
    //     },
    //     {
    //       searchControlProvider: "yandex#search",
    //     }
    //   );
    var myPlacemark, // eslint-disable-next-line
        myMap = new ymaps.Map('map', {
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
        //мой метод
        this.getAddress(coords);
      },
      this
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
    getAddress(coords) {
         // eslint-disable-next-line
      this.myPlacemark.properties.set('iconCaption', 'поиск...');
       // eslint-disable-next-line
        ymaps.geocode(coords).then(function (res) {
            var firstGeoObject = res.geoObjects.get(0);
             // eslint-disable-next-line
            myPlacemark.properties
                .set({
                    // Формируем строку с данными об объекте.
                    iconCaption: [
                        // Название населенного пункта или вышестоящее административно-территориальное образование.
                        firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
                        // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
                        firstGeoObject.getThoroughfare() || firstGeoObject.getPremise()
                    ].filter(Boolean).join(', '),
                    // В качестве контента балуна задаем строку с адресом объекта.
                    balloonContent: firstGeoObject.getAddressLine()
                });
        });
    },
  },
  data() {
    return {
      cords: [55.72, 37.65],
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