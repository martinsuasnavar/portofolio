import ContentButton from "../buttons/ContentButton";

const ContactForm = () => {
    return(
        <form action="submit.php" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required></input><br></br>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input><br></br>

            <label for="message">Message:</label><br></br>
            <textarea id="message" name="message" rows="4" cols="50" required></textarea><br></br>

            <ContentButton buttonText={"SUBMIT"}/>
        </form>
    );
}

export default ContactForm;