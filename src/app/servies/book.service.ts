import { Injectable } from "@angular/core";

export interface Book {
  "id": number,
  "name": string,
  "author": string,
  "rating": string,
  "description": string,
  "date": string,
  "genre": string,
  "img": string
}


@Injectable({
  providedIn: "root"
})
export class BookService {

  baseUrl = "http://localhost:8080"

  books = [
    {
      "id": 1,
      "name": "НИ СЫ.",
      "author": "Синсеро Джен",
      "rating": "4.5/10",
      "description": "Эта книга – культовый бестселлер – дерзкая и невероятно искренняя, она заставляет проснуться, засунуть свои страхи куда подальше и начать действовать. Джен Синсеро испытала на себе все известные методики личной трансформации, выбрала 25 подходов, которые дали результат, и превратила их в систему полного преображения жизни. Если что-то и может заставить вас по максимуму реализовать свой потенциал, это она – невероятная, яркая, прорывная книга от знаменитого тренера по мотивации и успеху.",
      "date": "2018",
      "genre": "Литература по саморазвитию",
      "img": "https://i3.mybook.io/p/512x852/book_covers/52/89/5289a16b-83be-46cd-8a10-2ee23b4514f8.jpg?v2"
    },
    {
      "id": 2,
      "name": "НИ СЫ.",
      "author": "Синсеро Джен",
      "rating": "4.5/10",
      "description": "Эта книга – культовый бестселлер – дерзкая и невероятно искренняя, она заставляет проснуться, засунуть свои страхи куда подальше и начать действовать. Джен Синсеро испытала на себе все известные методики личной трансформации, выбрала 25 подходов, которые дали результат, и превратила их в систему полного преображения жизни. Если что-то и может заставить вас по максимуму реализовать свой потенциал, это она – невероятная, яркая, прорывная книга от знаменитого тренера по мотивации и успеху.",
      "date": "2018",
      "genre": "Литература по саморазвитию",
      "img": "https://i3.mybook.io/p/512x852/book_covers/52/89/5289a16b-83be-46cd-8a10-2ee23b4514f8.jpg?v2"
    },
    {
      "id": 3,
      "name": "НИ СЫ.",
      "author": "Синсеро Джен",
      "rating": "4.5/10",
      "description": "Эта книга – культовый бестселлер – дерзкая и невероятно искренняя, она заставляет проснуться, засунуть свои страхи куда подальше и начать действовать. Джен Синсеро испытала на себе все известные методики личной трансформации, выбрала 25 подходов, которые дали результат, и превратила их в систему полного преображения жизни. Если что-то и может заставить вас по максимуму реализовать свой потенциал, это она – невероятная, яркая, прорывная книга от знаменитого тренера по мотивации и успеху.",
      "date": "2018",
      "genre": "Литература по саморазвитию",
      "img": "https://i3.mybook.io/p/512x852/book_covers/52/89/5289a16b-83be-46cd-8a10-2ee23b4514f8.jpg?v2"
    },
  ];

  constructor() { }

  getBook(id: any) {
    return this.books.find(fId => fId.id === id)
  }
}
