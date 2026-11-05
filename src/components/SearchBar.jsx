import styles from "./SearchBar.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function SearchBar() {
    const navigate = useNavigate();
    const [keyword, setKeyword] = useState("");

    const onChangeHandler = event => setKeyword(event.target.value);

    const onSubmitHandler = event => {
        event.preventDefault();
        const k = keyword.trim();
        if (!k) return;

        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input className={styles.input} onChange={onChangeHandler} value={keyword} />
            <button className={styles.button} type={"submit"}>
                검색
            </button>
        </form>
    );
}

export default SearchBar;
