import "./NewBooks.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"


function NewBooksComponent() {

    const dateObj = new Date();
    const date = new Intl.DateTimeFormat('bg-BG',
        { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Europe/Sofia' })
        .format(dateObj);

    return (
        <div>
            <section className="section wrapper">
                <h1>Нови Книги</h1>
                <h2 className="date-header">{date}</h2>
                <section className="book-cards-list">
                    <div className="book-card wrapper">
                        <img src="//assets.chitanka.info/thumb/book-cover/2b/11233.120.jpg" alt="" className="book-img" />
                        <div className="book-card-details">
                            <h3 className="book-title">Наследницата от Дакота Билдинг <FontAwesomeIcon icon={faInfoCircle} /></h3>
                            <p className="book-author">Фиона Дейвис</p>
                            <p className="book-genre">Исторически романи и повести <FontAwesomeIcon icon={faInfoCircle} /></p>
                            <div className="download-links">
                                <div className="btn-group" role="group" aria-label="Връзки за сваляне">
                                    <a href="" title="Сваляне във формат fb2.zip" className="btn btn-default dl dl-fb2 action "><span className="sr-only">fb2.zip</span></a>
                                    <a href="" title="Сваляне във формат epub" className="btn btn-default dl dl-epub action "><span className="sr-only">epub</span></a>
                                    <a href="" title="Сваляне във формат txt.zip" className="btn btn-default dl dl-txt action "><span className="sr-only">txt.zip</span></a>
                                    <a href="" title="Сваляне във формат sfb.zip" className="btn btn-default dl dl-sfb action "><span className="sr-only">sfb.zip</span></a>
                                    <a href="" title="Сваляне във формат pdf" className="btn btn-default dl dl-pdf action "><span className="sr-only">pdf</span></a>
                                    <a href="" title="Сваляне във формат mobi" className="btn btn-default dl dl-mobi action "><span className="sr-only">mobi</span></a>
                                    <a href="" target="_blank" className="btn btn-default dl biblioman-link" title="Запис за книгата в Библиоман"><span className="sr-only">Библиоман</span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="book-card wrapper">
                        <img src="//assets.chitanka.info/thumb/book-cover/2b/11233.120.jpg" alt="" className="book-img" />
                        <div className="book-card-details">
                            <h3 className="book-title">Наследницата от Дакота Билдинг <FontAwesomeIcon icon={faInfoCircle} /></h3>
                            <p className="book-author">Фиона Дейвис</p>
                            <p className="book-genre">Исторически романи и повести <FontAwesomeIcon icon={faInfoCircle} /></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}


export default NewBooksComponent;