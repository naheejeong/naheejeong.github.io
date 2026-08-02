import { EmailIcon, GitHubIcon, LinkedInIcon } from './Icons';

const EMAIL = 'nahee.jeong@berkeley.edu';
const GITHUB_URL = 'https://github.com/naheejeong';
const LINKEDIN_URL = 'https://linkedin.com/in/naheejeong';

export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__bar" />
      <h2 className="footer__title">Let's talk</h2>
      <p className="footer__desc">
        Open to research collaborations, internships, and conversation about whatever's on this
        page.
      </p>
      <div className="footer__icons">
        <a href={`mailto:${EMAIL}`} className="footer__icon" aria-label="Email">
          <EmailIcon size={16} />
        </a>
        <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="footer__icon" aria-label="GitHub">
          <GitHubIcon size={16} />
        </a>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="footer__icon"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={16} />
        </a>
      </div>
      <div className="footer__updated">Last updated August 2026</div>
    </footer>
  );
}
