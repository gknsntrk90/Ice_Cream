import { fireEvent, getByRole, getByTestId, getByText, render,screen } from "@testing-library/react";
import Form from ".";


test("Koşulların onay durumuna göre buton aktifliği", () => {
    //* 1- Test edilecek bileşen render'lanır
    render(<Form />);

    //* 2- Gerekli elementleri çağır (button | checkbox)
    //! buttonun rolü buton olduğu için çağırabiliriz
    const button = screen.getByRole("button");
    const checkbox = screen.getByRole("checkbox");

    //* 3- checkbox tiklenmemiştir.
    expect(checkbox).not.toBeChecked();

    //* 4- button inaktiftir
    expect(button).toBeDisabled();

    //* 5- Checkbox'a tıkla
    fireEvent.click(checkbox);

    //* 6- Button aktif mi?
    expect(button).toBeEnabled();

    //* 7- Checkbox'tan tiki kaldır
    fireEvent.click(checkbox);

    //* 8- Button inaktif mi kontrol et
    expect(button).toBeDisabled();
});

test("Butonun hover durumuna göre bildirim ekrana gelir", () => {
    render(<Form />);

    //* Gerekli elementleri al
    const checkbox = screen.getByRole("checkbox");
    const button = screen.getByRole("button");
    const alert = screen.getByText(/size gerçekten/i);

    //* Bildiirm ekranda gözükmüyordur
    expect(alert).not.toBeVisible();

    //* checkbox'ı tikle
    fireEvent.click(checkbox);

    //* Mouse'u button'un üzerine getir (hover)
    fireEvent.mouseEnter(button);

    //* Ekrandan bildirim var mı kontrolü
    expect(alert).toBeVisible();

    //* Mouse'u buttondan çek
    fireEvent.mouseLeave(button);

    //* Bildirim ekranda gözükmüyordur
    expect(alert).not.toBeVisible();
});