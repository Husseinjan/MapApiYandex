import React, { useState } from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

const MyMap = () => {
  const mapState = { center: [39.911989943186924, 69.00445228570554], zoom: 18 };
  const placemarkGeometry = [39.911989943186924, 69.00445228570554]; // Координаты метки

  const [isBalloonOpen, setIsBalloonOpen] = useState(false);

  const handlePlacemarkClick = () => {
    setIsBalloonOpen(true);
  };

  const handleBalloonClose = () => {
    setIsBalloonOpen(false);
  };

  const balloonContent = (
    <div>
      <h3>Заголовок</h3>
      <p>Дополнительная информация о метке.</p>
      <img src="https://autoreview.ru/images/Article/1593/Article_159376_860_575.jpg" alt="Изображение" width="200" />
    </div>
  );

  return (
    <YMaps query={{ apikey: "YOUR_API_KEY" }}>
      <Map state={mapState} width="100%" height="400px">
        <Placemark
          geometry={placemarkGeometry}
          options={{ preset: "islands#blueCircleDotIcon" }}
          onClick={handlePlacemarkClick}
          properties={{
            balloonContent: isBalloonOpen ? balloonContent : null,
            hintContent: "Подсказка при наведении",
            iconCaption: "Моя метка",
          }}
          onClose={handleBalloonClose}
        />
      </Map>
    </YMaps>
  );
};

export default MyMap;
