# TaskBoard Projesi - 1. Gün Teslim Raporu

## Proje Hakkında
Bu çalışma, uzaktan staj programı kapsamında geliştirilen bir görev yönetim otomasyonudur.
Projenin temel amacı, kullanıcıların günlük görevlerini dinamik bir arayüz üzerinden takip edebilmesini sağlamaktır.

## Teknik Detaylar ve Yapılanlar
* Projenin yerel geliştirme ortamında Git entegrasyonu ve sürüm kontrol altyapısı başarıyla kurulmuştur.
* `frontend` ve `backend` mimarisinin ilk adımı olarak ana klasör yapısı standartlara uygun kurgulanmıştır.
* `index.html` üzerinde, yeni görev girişini sağlayan `form` ve verileri listeleyecek `table` bileşenleri kodlanmıştır.
* Tamamen saf ve semantik HTML5 etiketleri (`header`, `main`, `section`, `footer`) kullanılarak arayüz iskeleti oluşturulmuştur.

# TaskBoard Projesi - 2. Gün Teslim Raporu

## Proje Hakkında

Bu çalışma, uzaktan staj programı kapsamında geliştirilen görev yönetim otomasyonunun ikinci gün çalışmalarını içermektedir. Bugün kullanıcıdan veri almayı sağlayan form yapıları geliştirilmiş ve görevlerin daha düzenli görüntülenebilmesi için tablo yapısı güncellenmiştir.

## Teknik Detaylar ve Yapılanlar

* Mevcut **index.html** dosyası geliştirilerek görev ekleme formu güncellenmiştir.
* Görev önceliği seçimi için **select** elementi eklenmiştir.
* Görev açıklaması girebilmek için **textarea** kullanılmıştır.
* Form alanlarına **required**, **maxlength** ve **placeholder** özellikleri eklenerek temel doğrulamalar sağlanmıştır.
* Her form elemanı için **label** kullanılarak erişilebilirlik iyileştirilmiştir.
* Görev listesinin daha düzenli görüntülenebilmesi amacıyla **table**, **thead** ve **tbody** etiketleri kullanılmıştır.
* Tablo içerisine örnek görev kayıtları eklenerek sayfa tamamlanmıştır.
* HTML5 semantik etiketleri (**header**, **main**, **section**, **footer**) kullanılmaya devam edilmiştir.

# Taskboard Projesi - 3. Gün Teslim Raporu

## Proje Hakkında 

Bu çalışmada TaskBoard uygulamasının CSS tasarımı tamamlandı. Flexbox ile sayfa düzeni oluşturuldu, kart ve tablo stilleri eklendi, CSS Variables kullanıldı, hover efektleri ve badge yapıları oluşturuldu. Ayrıca sayfa responsive hale getirilerek mobil uyumluluk sağlandı.

## Teknik Detaylar ve Yapılanlar

* Tüm stiller ayrı bir CSS dosyasına taşındı.
* CSS değişkenleri kullanılarak renk ve boşluk yönetimi sağlandı.
* Flexbox ile sayfa düzeni oluşturuldu.
* Kart, form, buton ve tablo tasarımları tamamlandı.
* Butonlara hover efekti ve öncelik etiketleri (badge) eklendi.
* Box Model kullanılarak düzenli boşluklar oluşturuldu.
* Sayfa mobil cihazlar için responsive hale getirildi.

# Taskboard Projesi - 4. Gün Teslim Raporu

## Proje Hakkında

Bu çalışmada TaskBoard uygulaması responsive hale getirildi. CSS Grid kullanılarak sayfa düzeni oluşturuldu, dashboard bölümüne KPI kartları eklendi, mobil öncelikli (Mobile First) tasarım yaklaşımı uygulandı. Ayrıca media query kullanılarak farklı ekran boyutlarına uyum sağlandı ve tablo için yatay taşma kontrolü eklendi.

## Teknik Detaylar ve Yapılanlar

* Dashboard bölümüne Toplam Görev, Açık Görev ve Tamamlanan görev kartları eklendi.
* CSS Grid kullanılarak responsive sayfa düzeni oluşturuldu.
* Mobile First yaklaşımı uygulanarak mobil görünüm hazırlandı.
* `@media` kullanılarak masaüstü ekranlarda iki kolonlu yapı oluşturuldu.
* Görev tablosuna `overflow-x: auto` eklenerek küçük ekranlarda taşma önlendi.
* Proje 390px, 768px ve masaüstü ekran boyutlarında test edilerek responsive görünümü kontrol edildi.

# Gün 5 - Statik UI Mini Proje (TaskBoard Dashboard)

## Proje Hakkında

Bu çalışmada ilk 4 günde öğrenilen HTML ve CSS konuları tek bir sayfada birleştirilerek statik bir TaskBoard Dashboard tasarımı oluşturulmuştur.


- Farklı HTML bileşenlerini tek bir sayfada birleştirmeyi öğrendim.
- Dashboard düzeni oluşturmak için Grid yapısını kullandım.
- CSS sınıflarını daha düzenli hale getirdim.
- Responsive tasarım için media query kullanımını pekiştirdim.
- Daha okunabilir ve düzenli bir proje yapısı oluşturdum.

## Gün 6

Bugün projeye JavaScript eklenerek form işlemleri dinamik hale getirildi. Form gönderme olayı `addEventListener` ile yakalandı, kullanıcıdan alınan görev bilgileri okunarak tabloya yeni görev satırı eklendi. Öncelik seviyesine göre uygun rozet oluşturuldu, görev tarihi otomatik eklendi ve form gönderildikten sonra temizlendi. Ayrıca görev ID'si mevcut satır sayısına göre otomatik oluşturulacak şekilde düzenlendi.


- DOM elemanlarını seçme (`querySelector`)
- Event Listener kullanımı
- Form verilerini okuma
- `insertAdjacentHTML()` ile tabloya yeni satır ekleme
- `form.reset()` ile formu temizleme