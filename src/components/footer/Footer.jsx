import './footer.css'
export const Footer = () =>{
 return(
    <footer className="bottom-footer-bar">
    <div className="footer-container">
        <div className="first-line-footer">
            <h2>Made with <i className="fa fa-code"></i> by Sagar Raj</h2>
        </div>
        <div className="nav-right-logo">
            <a className="list-logo" href="https://github.com/sagargse"><i className="fa fa-github"></i></a>
            <a className="list-logo" href="https://twitter.com/sagarastic_"><i className="fa fa-twitter"></i></a>
            <a className="list-logo" href="https://www.linkedin.com/in/sagar-raj-a910711b2/"><i
                    className="fa fa-linkedin"></i></a>
        </div>
        <div className="last-line-footer">
            <small><b>@2022 kidsZilla</b></small>
        </div>
    </div>
</footer>
 );
}