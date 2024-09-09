# KÜTÜPHANELER
- json-server
- bootstrap
- axios@^0.27.2
- @texting-library/user-event@14.0

# Selector - Seçiciler

- Test içerisinde JSX elementlerini çağırmaya yarayan methodlardır
- Screen nesnesi aracılığı ile kullanılır
- https://testing-library.com/docs/

- getByRole: Elementin rolüne göre o elementi çağırmaya yarar.
- getByLabelText: Bir inputu bağlı olduğu label'a göre çağrırır.
- getByPlaceHolderText: Bir input'u placeholder'ına göre çağırır.
- getByDisplayValue: Elementin value'suna göre çağırır.
- getByAltText: Resimleri img etiketlerini almak için kullanırız.
- getByTitle: Elementleri title'ına göre çağırır.
- getByTestId: elementlere extra olarak data-tested id diye değer veririz.
- expect: Herhangbir değerden ve elementten beklentimizi kontrol ederiz
- toBeVisible: Elemanın görünür olmasını bekliyor 

# HTML Element Rolleri

- Her html elementinin kendini temsil eden bir rolü vardır. Bu rol ismi bazen etiket  ismi ile aynı button'ın rolü button bazen farklı h1'in rolü heading olabilir.

# MAtchers - Kontrolcüler
- expect komutu ile birlikte kullanılan ve bir element veya değişken üzerindeki beklentimiz konrol methodlarıdır. Rengi kırmızıdır | checkbox tıklıdır | buton aktiftir | yazı içeriği şudur | dizinin uzunluğu 5'tir gibi.

- Elementin ekranda olmasını kontrol eder
   expect(checkbox).toBeInTheDocument();

- Yazı içeriği şu yazıya eşit mi örnek merhabaya eşit mi?
    expect(checkbox).toHaveTextContent();

- Still kontrol eder background mavi mi?
    expect(checkbox).toHaveStyle()

- npm run test ile terminalden testimizi gerçekleştirebiliriz

# Test Geliştirme Süreci
- ikiye ayrılır TDD ve BDD

## TDD (Test Driven Development)
- Önce testler yazılır sonra işlevler/bileşenler kodlanır
- Red to green olur
- Artısı, testler bir yük olarak gelmez. Test, yazmak, geliştirme sürecinin bir parçası oluyor. Testleri yazarken dinamik yapının bir algoritmasını oluşturudğumuz için işevlevi daha hızlı kodlayabiliyoruz

## BDD (Behaviour Driven Development)
- Önce işlev/bileşen kodlanır sonra testleri yazılır.

# FireEvent
- rtl içerisinde gelen olay tetiklemek için kullandığımız method, gerçek kullanıcıdan uzak tepkiler verdiği için yerini UserEvent'e bıraktı.
- Tetiklenen olaylar gerçek bir insanın tepkisinden çok daha hızlı bir şekilde aniden gerçekleştiği için testlerde tutarsızlıklara ve beklenmedik sonuçlara sebp olabiliyor.

# UserEvent

- FireEvent'in modern / gelişmiş versiyonu tetiklediğimiz olaylar FireEvent gibi doğrudan tetiklenmiş yerine gerçek bir kullanıcıyı simüle ederek belirli bir gecikmenin ardından tetiklenir
- Kullanılması için userEvent kütüphanesi kurulmalıdır.
- async çalıştığı için async await ile kullanılır.


# db-json'a kur hata verirse server
- "server": "json-server --watch db.json --port 4090"

# NOT
- find() ile her bir item'ı arıyoruz ==> basket.find((i) => i.id === item.id)
- filter() elemanı sileceğimiz için filtreleyip. setBasket(basket.filter((i) => i.id !== id));

- Reduce: dizi içinde ki tüm elemanların değerini toplamak,bölmek,çarpmak gibi istersek kullanılır


/*
! SEÇİCİLER

1) Method Tipi | 2) All ifadesi | 3) seçici method

* get > render anında DOM'da olan elementleri almak için kullanılır | Elementi bulamazsa hata verir
* query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır  elementi bulamazsa null dööndürür test devam eder
*find > elementin ekrana basılmasının asenktron olduğu durumlarda kullanılır
* eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir.
*/

# Mock

- Unit testlerde "mock" kullanımı; bir fonksiyonun veya nesnenin belirli bir kısmını izole ederek test etmeye yarar. Özellikle dış bağımlılıkları olan fonskyionları test etmek için kullanılır. Bu sayede gerçek sistem bileşenlerine bağımlı olmadan sadece test edilmek istenen kodun doğru çalışıp çalışmadığı kontrol edilir.

- Doşa bağımlıkları izole ederiz.

- Fonksiyonlar çağırıldı mı kontrolü yapmamızı sağlar

- Fonksyionlara gönderilen parametreleri kontrol edebilir.# Ice_Cream
