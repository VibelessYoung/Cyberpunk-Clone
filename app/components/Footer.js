export default function Footer(){
 const links=["Terms of Use & Privacy Policy","Careers","User Agreement","Fan Content Guidelines","Cookie Declaration","REDmod","◉ English⌄"];
 return <footer className="footer">
  <div className="footer-top">
   <div className="socials"><span>FIND US ON</span><span className="social-icon">◉</span><span className="social-icon">f</span><span className="social-icon">𝕏</span><span className="social-icon">⌁</span><span className="social-icon">◎</span><span className="social-icon">t</span><span className="social-icon">◌</span></div>
   <div className="partners"><span>NVIDIA<br/><small>GEFORCE RTX</small></span><span>ALIENWARE</span><span>AMD<br/>RYZEN</span><span>ESRB<br/><small>TEEN</small></span></div>
  </div>
  <div className="footer-links">{links.map(x=><a key={x} href="#">{x}</a>)}</div>
  <div className="footer-bottom"><div className="footer-brand">CD PROJEKT RED</div><p>© 2026 CD PROJEKT RED S.A. All rights reserved. Cyberpunk 2077 and related logos, characters and marks are trademarks of CD PROJEKT RED S.A. in the US and/or other countries.</p><div><b>THE WITCHER</b><br/>thewitcher.com<br/><br/><b>GWENT</b><br/>playgwent.com</div></div>
 </footer>
}
