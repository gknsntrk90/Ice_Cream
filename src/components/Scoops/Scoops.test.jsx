import { findAllByRole, getByAltText, getByText } from "@testing-library/react";
import Scoops from "./index";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";



/*
! SEÇİCİLER

1) Method Tipi | 2) All ifadesi | 3) seçici method

* get > render anında DOM'da olan elementleri almak için kullanılır | Elementi bulamazsa hata verir
* query > elementin ekranda olma durumu kesin değilse kullanılır get ile benzer çalışır  elementi bulamazsa null dööndürür test devam eder
*find > elementin ekrana basılmasının asenktron olduğu durumlarda kullanılır

* eğer seçici methoda all ifadesi eklersek seçici koşula uyan bütün elemanları getirir.
*/

test("API'den alınan veriler için ekrana kartlar basılır", () => {
    render(<Scoops />);

    //* ekrana basılan kartları al (resiimleri almak yeterli)
    const images = screen.findAllByAllText("çeşit-resim");

    //* ekrandaki resimlerin kartların sayısı 1 den fazla mı?
    expect(images.length).toBeGreaterThanOrEqual(1);
   
});


test("Çeşitlerin ekleme ve azaltma işlevlerinin toplam fiyata etkisi", async () => {
    //* userEvent kurulum
    const user = userEvent.setup();
    
    
    //* test edilecek olan bileşenin render edilmesi
    render(<Scoops />);

    //* bütün ekleme ve azaltma butonlarını çağır
    const addBtns = await screen.findAllByRole("button",{name: "Ekle" });
    const delBtns = await screen.findAllByRole("button",{name: "Azalt" });

    //* Toplam fiyat elementini çağır
    const total = screen.getByTestId("total");


    //* başlangıç anında toplam 0 mı kontrol et
    expect(total).toHaveTextContent(/^0$/);

    //* çikolata'nın ekle butonuna tıkla
    await user.click(addBtns[2]);

    //* toplam fiyat 20 mi kontrol et
    expect(total).toHaveTextContent(/^20$/);

    //* vanilyanın ekle butonuna çift tıkla
    await user.dblClick(addBtns[1]);

    //* toplam fiyat 60 mı kontrol et
    expect(total).toHaveTextContent(/^60$/);

    //* vanilyanın azalt butonuna tıkla
    await user.click(delBtns[1]);

    //* toplam fiyat 40 mı kontrol et
    expect(total).toHaveTextContent(/^40$/);

    //* vanilya azalt butonuna tıkla
    await user.click(delBtns[1]);

    //* toplam fiyat 20 mi kontrol et
    expect(total).toHaveTextContent(/^20$/);

    //* çikolatanın azalt butonuna tıkla
    await user.click(delBtns[2]);

    //* toplam fiyat 0 mı kontrol et
    expect(total).toHaveTextContent(/^0$/);
});