import c from './Footer.module.css';
import twitterIcon from '../../assets/icon_twitter.png';
import linkedinIcon from '../../assets/icon_linkedin.png';
import facebookIcon from '../../assets/icon_facebook.png';
import instagramIcon from '../../assets/icon_instagram.png';
import youtubeIcon from '../../assets/icon_youtube.png';


function Footer() {
    return (
        <footer className={c.footer}>
            <div className={c.container}>
                <div className={c.links}>
                    <a href='https://by.linkedin.com/company/brimit' target='_blank' rel="noreferrer"><img src={linkedinIcon} alt="LinkedIn icon"/></a>
                    <a href='https://www.youtube.com/channel/UCFEylwoEopjwrfkpxf0wJxQ' target='_blank' rel="noreferrer"><img src={youtubeIcon} alt="YouTube icon"/></a>
                    <a href='https://www.facebook.com/brimit.web/' target='_blank' rel="noreferrer"><img src={facebookIcon} alt="Facebook icon"/></a>
                    <a href='https://twitter.com/brimit_web' target='_blank' rel="noreferrer"><img src={twitterIcon} alt="Twitter icon"/></a>
                    <a href='/#'><img src={instagramIcon} alt="Instagram icon"/></a>
                </div>
                <div className={c.copyright} >© Brimit 2023</div>
            </div>
        </footer>
    )
}

export default Footer;
