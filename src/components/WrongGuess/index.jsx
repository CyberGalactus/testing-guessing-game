import Styles from "./WrongGuess.module.css"

const WrongGuess = () => {
    return(
        <p data-testid="wrong-guess" className={Styles.wrongText}>
            Wrong Guess mate
        </p>
    )
}

export default WrongGuess;