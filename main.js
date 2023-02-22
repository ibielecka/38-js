
function dzialania(liczba1, liczba2)
{

        if (liczba1 + liczba2 > 0) {
            let wynik_dodawania = liczba1 + liczba2;
            console.log("Wynik dodawania wynosi " + wynik_dodawania);
        } else {
            console.log("Wynik nieprawidłowy");
        }


    
        if (liczba1 - liczba2 > 0) {
            let wynik_odejmowania = liczba1 - liczba2;
        console.log("Wynik odejmowania wynosi " + wynik_odejmowania);
        } else {
        console.log("Wynik nieprawidłowy"); 
        }


        if (liczba2 * liczba1 > 0 ) {
            let wynik_mnozenia = liczba1 * liczba2;
        console.log("Wynik mnożenia wynosi " + wynik_mnozenia);
        } else {
        console.log("Wynik nieprawidłowy");   
        }

        if (liczba1 / liczba2 > 0 ) {
            let wynik_dzielenia = liczba1 / liczba2;
        console.log("Wynik odejmowania wynosi " + wynik_dzielenia);
        } else {
        console.log("Wynik nieprawidłowy"); 
        }

}

dzialania(5, 10);



