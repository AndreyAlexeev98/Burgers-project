// let myMap;

// const init = () => {
//   myMap = new ymaps.Map("map",{
//     center: [59.93128263, 30.31776757],
//     zoom: 11,
//     controls: []
//   });

//   const coords = [    // заносим в переменную координаты точек
//     [59.944190, 30.367168],   // ширина и долгота береться в строке браузера 
//     [59.969012, 30.304562],   // (в адресе, поменяны местами широта и долгота)
//     [59.930608, 30.289041],
//     [59.922770, 30.327331]
// ];

// //Далее создаем коллекцию вызвав метот GeObjectCollection 

// const myCollection = new ymaps.GeObjectCollection({}, {  
//   draggable: false, // запрещает таскать точку
//   iconLayout: 'default#image', // устанавливаем в качестве иконки собственное изображение
//   iconImageHref: './img/map-marker.svg', // путь до иконки ( от HTML файла !!! )
//   iconImageSize: [46, 57],   // размер иконки 
//   iconImageOffset: [-3, -42]  // смещение относительно левого верхнего угла - для сложных иконок
// });

// coords.forEach(coord => {        // Проходим циклом по нашим координатам 
//   myCollection.add(new ymaps.Placemark(coord));  // добавляем в коллекцию новый PlaceMark - т.е. новую точку 
// });

// myMap.geoObject.add(myCollection);  // добавляем наши обьекты на карту

// // myMap.behaviors.enable('scrollZoom');   // включить возможность скролла для масштабирование
// myMap.behaviors.disable('scrollZoom');     // // отключить возможность скролла для масштабирование

// }



// ymaps.ready(init);


let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [59.93916998692174, 30.409015096732622],
   zoom: 10.5,
   controls: ['zoomControl'],
 });

 
 let coords = [
     [59.94554327989287, 30.38935262114668],
     [59.91142323563909, 30.50024587065841],
     [59.88693161784606, 30.319658102103713],
     [59.97033574821672, 30.315194906302924],
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/contacts-section/map-marker.svg',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);