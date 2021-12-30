# Charge Points IoT
![Alt Text](https://thumbs.gfycat.com/IcyPiercingCockatiel-size_restricted.gif)

ELEKTRİKLİ ARAÇ ŞARJ İSTASYONU UYGULAMASI

Elektrikli araçlarınızı şarj etmek için en kolay şekilde şarj istasyonu bulabileceğiniz IoT uygulaması.

## Nasıl Çalışır?
![caption](https://serving.photos.photobox.com/871710234ab2671c74cf521f31ac74b210a4154462abb21d23a35cbcf343e60065c74248.jpg)

## Projenin Yapısı

![caption](https://serving.photos.photobox.com/538164910e363653b332e123164c028205912dae13ff848358925e1293513ca506d86caf.jpg)

## Uygulama İçi Görüntüler

IoT sensörlerinden gelen verilerin arayüzde gösterimi.
![Alt Text](https://user-images.githubusercontent.com/60824063/147774513-c9587d8f-cacc-4d42-a707-577c8056149e.mp4)

![Alt Text](https://serving.photos.photobox.com/64335825e0c6cb61b7337767630d2921cc7e0e7126e10cafddf8f1748c320328edc83555.jpg)

Filtreleme

![Alt Text](https://user-images.githubusercontent.com/60824063/147774857-bd655a3a-d2fc-4f65-9f4c-0502d2c14c24.mp4)

Responsive tasarımı

![Alt Text](https://user-images.githubusercontent.com/60824063/147774791-1fc50a3f-2068-4da5-9f8e-a0e86741ea1e.mp4)

## NPM Paketleri
![Alt Text](https://i.ibb.co/wQjFs7c/dependencies.jpg)

Not: MQTT ile gönderim yapılan program MQTT Box'tır.

## Kurulumu

1. Projenin çekilmesi

        $ git clone https://github.com/femresirvan/Charge-points-iot.git
        $ cd Charge-points-iot

2. Paket Kurulumu:

        $ npm i

3. MongoDB bağlantısı: .env dosyasında MONGODB_URI ile mongodb connection stringiniz olması gerekir.

        MONGODB_URI="YOUR_MONGODB_CONNECTION_STRING"

4. Google Maps API Key entegre etme. (./index.ejs dosyasına)

        <script src="YOUR GOOGLE MAPS API KEY" async></script>

5. Çalıştırma:

        $ node app
