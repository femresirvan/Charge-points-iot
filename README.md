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

![Alt Text](https://thumbs.gfycat.com/MagnificentComfortableHomalocephale-size_restricted.gif)

![Alt Text](https://serving.photos.photobox.com/64335825e0c6cb61b7337767630d2921cc7e0e7126e10cafddf8f1748c320328edc83555.jpg)

Filtreleme

![Alt Text](https://thumbs.gfycat.com/FearfulGeneralGrayreefshark-size_restricted.gif)

Responsive tasarımı

![Alt Text](https://thumbs.gfycat.com/GeneralYearlyAtlanticsharpnosepuffer-size_restricted.gif)

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

4. Çalıştırma:

        $ node app
