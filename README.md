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

## Gün 7 - JavaScript State ve Filtreleme

Bugün görevleri `tasks` array'i üzerinden yönetmeye başladım.
Görevlerin durum ve öncelik bilgilerini JavaScript ile kontrol ettim.
`map`, `filter` ve `find` metotlarını kullanarak görevleri listeledim ve filtreledim.
Tamamla butonuyla görevlerin durumunu değiştirdim.
Toplam, açık ve tamamlanan görev sayılarını dinamik hale getirdim.
Ayrıca önceliğe göre görev filtreleme özelliğini ekledim.

## Gün 8 - Async JavaScript ve localStorage

Bugün görevleri localStorage kullanarak kalıcı hale getirdim.
JSON.stringify ve JSON.parse ile veri dönüşümlerini uyguladım.
Sayfa açıldığında kayıtlı görevlerin tekrar yüklenmesini sağladım.
fetch ve async/await kullanarak örnek görevleri JSON dosyasından aldım.
Hata durumlarını try/catch ile kontrol ettim.
Ayrıca localStorage temizleme ve örnek görevleri içeri aktarma özelliklerini ekledim.

gün9

Bugün backend geliştirmeye geçiş için C# temel yapılarını çalıştım. Değişkenler, veri tipleri, koşullar, döngüler ve metotların kullanımını uygulamalı olarak öğrendim. Ayrıca .NET CLI kullanarak TaskBoard.Console projesini oluşturdum. Uygulamada görev ekleme, görevleri listeleme ve hatalı girişleri kontrol etme özelliklerini geliştirdim. Kodun daha okunabilir olması için işlemleri farklı metotlara ayırdım. Gün sonunda uygulamayı `dotnet run` ile test ederek menünün sorunsuz şekilde çalıştığını kontrol ettim.

## Gün 10 - C# OOP, Model Sınıfları ve LINQ

Bugün TaskBoard uygulamasının C# tarafını daha düzenli bir yapıya taşıdım. Görevleri temsil etmek için TaskItem modelini ve görev durumlarını yönetmek için TaskStatus enumunu oluşturdum. Görev işlemlerini TaskService sınıfında topladım. LINQ kullanarak açık durumdaki görevleri filtreledim. Aynı başlığa sahip görevlerin tekrar eklenmesini engelledim. Tamamlanan görevlerin durumunu değiştirerek CompletedAt bilgilerini kaydettim.

# Gün 11 - ASP.NET Core MVC Giriş
Bugün TaskBoard projesinde ASP.NET Core MVC yapısını kullanmaya başladım.
TaskBoard.Web adında bir MVC projesi oluşturdum.
TaskItem modeli ile görev bilgilerini tuttum.
TasksController içinde örnek görevler oluşturdum ve View'a gönderdim.
Ayrıca /Tasks adresini ve ana menüde Tasks bağlantısını oluşturdum.
CSS dosyasını wwwroot üzerinden kullanmayı öğrendim.

## Gün 12 - Razor, ViewModel ve Form Validation

Bugün TaskBoard projesinde görev ekleme formunu geliştirdim.

- CreateTaskViewModel oluşturuldu.
- Görev başlığı, öncelik ve açıklama alanları eklendi.
- Form doğrulama kuralları oluşturuldu.
- GET ve POST işlemleri ayrıldı.
- Hatalı girişlerde validation mesajları gösterildi.
- Başarılı eklenen görevlerin tabloda görünmesi sağlandı.

## Gün 13 - Web API ve Frontend-Backend Bağlantısı

- TaskBoard projesine Web API yapısı eklendi.
- GET endpointi ile görevlerin JSON formatında listelenmesi sağlandı.
- POST endpointi ile frontend üzerinden yeni görev ekleme işlemi gerçekleştirildi.
- PATCH endpointi ile görevlerin durumunun güncellenmesi sağlandı.
- Frontend tarafında fetch kullanılarak backend API ile bağlantı kuruldu.
- Görev verilerinin localStorage yerine API üzerinden alınması sağlandı.
- Frontend ve backend arasındaki CORS problemi giderildi.

## Gün 14 - Entity Framework Core ve Veritabanı

- Entity Framework Core ve SQLite paketleri projeye eklendi.
- TaskBoardDbContext oluşturularak TaskItem modeli veritabanına bağlandı.
- SQLite için connection string tanımlandı ve ilk migration oluşturuldu.
- API'deki geçici görev listesi kaldırılarak görevlerin veritabanında saklanması sağlandı.
- TaskItem modeline CreatedAt alanı eklendi ve Title alanı zorunlu hale getirildi.
- Veritabanına 3 örnek görev eklemek için seed metodu oluşturuldu.
- Uygulama yeniden başlatılarak görevlerin veritabanında kalıcı olarak saklandığı test edildi.

## Gün 15 - CRUD Operasyonları ve Service Katmanı

Bugün TaskBoard projesine Service katmanı eklendi.
Veritabanı işlemleri Controller'dan TaskService içerisine taşındı.
CRUD işlemleri async olarak düzenlendi ve DTO yapısı kullanıldı.
PUT ile görev güncelleme, DELETE ile görev silme işlemleri eklendi.
Endpointler test edilerek CRUD işlemlerinin doğru çalıştığı kontrol edildi.

## Gün 16 - Frontend API Entegrasyonu ve CRUD

- Frontend ile ASP.NET API bağlantısı tamamlandı.
- API işlemleri için `apiClient.js` oluşturuldu.
- Görev listeleme, ekleme, güncelleme ve silme işlemleri API'ye bağlandı.
- Görev durumunu tamamlamak için PATCH işlemi kullanıldı.
- Silme işleminden önce kullanıcı onayı eklendi.
- API işlemlerinde hata yönetimi ve butonların geçici olarak devre dışı bırakılması sağlandı.
- Yapılan işlemler Network sekmesinden test edildi.