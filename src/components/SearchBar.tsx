import styles from "./SearchBar.module.css";
import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useNavigate } from "react-router";

type Props = { keyword: string };

function SearchBar({ keyword }: Props) {
    const navigate = useNavigate();
    const [input, setInput] = useState(keyword || "");

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement, HTMLInputElement>) =>
        setInput(event.target.value);

    const onSubmitHandler = (event: SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();
        const k = input.trim();
        if (!k) return;

        navigate(`/search?keyword=${encodeURIComponent(k)}`);
    };

    return (
        <form className={styles.form} onSubmit={onSubmitHandler}>
            <input className={styles.input} onChange={onChangeHandler} value={input} />
            <button className={styles.button} type={"submit"}>
                검색
            </button>
        </form>
    );
}

export default SearchBar;
