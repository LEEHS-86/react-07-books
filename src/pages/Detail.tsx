import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_KEY, type Book } from "./Search.tsx";
import styles from "./Detail.module.css";

function Detail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`)
            .then(res => res.json())
            .then((json: Book) => setBook(json))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    console.log(err.message);
                } else {
                    console.log(err);
                }
            });
    }, []);

    if (!book) {
        return <div className={styles.container}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <button
                className={styles.backBtn}
                onClick={() => {
                    // 사용자를 이동시키기 위해 뭘 써야되느냐
                    navigate(-1);
                }}>
                &larr; 뒤로 가기
            </button>
            <h2>{book.volumeInfo.title}</h2>
            {book.volumeInfo.imageLinks ? (
                <img
                    className={styles.cover}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.title}
                />
            ) : (
                <div className={styles.no_cover}>No Cover</div>
            )}
            <p>{book.volumeInfo.authors?.join(", ")}</p>
            {/*
                태그들에게 dangerouslySetInnerHTML 속성을 사용할 수 있음
                 - 기본적으로 리액트에서는 '개발자'가 사용한 태그 외에는
                   태그 형식이더라도 string으로 처리하여 화면에 출력함
                 - 외부에서 제공된 태그는 악성코드의 위험이 존재함
                 - 이 속성을 사용할 때에는 주의가 필요함 => 필요하면 그냥 하는거

                 사용법 : dangerouslySetInnerHTML={{ __html: 내용 }}

                 '__html'에서 오류
                 Type string | undefined is not assignable to type string | TrustedHTML
             */}
            <p dangerouslySetInnerHTML={{ __html: book.volumeInfo.description || "" }}></p>
        </div>
    );
}

export default Detail;
