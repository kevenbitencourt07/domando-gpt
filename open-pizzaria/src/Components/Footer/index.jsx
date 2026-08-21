import "./Footer.css";

const Footer = (props) => {

     console.log(props);

    return (
        <>
            <footer className="footer">
                <h1>{props.titleFooter}</h1>
            </footer>
        </>
    )
}

export default Footer