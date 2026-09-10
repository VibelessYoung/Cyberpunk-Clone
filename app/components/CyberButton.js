export default function CyberButton({children,dark=false,className="",href="#"}){
 return <a href={href} className={`cyber-button ${dark?"dark":""} ${className}`}>{children}</a>;
}
