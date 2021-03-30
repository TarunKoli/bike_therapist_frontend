import Service from "../components/indexComponents/BookService";
import styles from "../styles/bookService/BookService.module.css";

const BookService = ()=>{
    return(
        <div className={styles.bookService}>
        <Service />
        <div className={styles.seprator}></div>
        </div>
    );
};

export default BookService;