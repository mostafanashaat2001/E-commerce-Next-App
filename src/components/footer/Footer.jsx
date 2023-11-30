import Image from "next/image";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer container pt-5">
        <div className="copyright">© Made By Mostafa Nashaat</div>
        <div className="icons">
          <a href="https://www.facebook.com/mostafa.nashaat01?mibextid=ZbWKwL">
            <Image
              src="/image/lcons/facebook.png"
              width={20}
              height={20}
              alt="facebook"
            />
          </a>
          <a href="https://www.linkedin.com/in/mostafa-nashaat-41a438245">
            <Image
              src="/image/lcons/linkedin.png"
              width={20}
              height={20}
              alt="linked in"
            />
          </a>
          <a href="https://github.com/mostafanashaat2001">
            <Image
              src="/image/lcons/github.png"
              width={20}
              height={20}
              alt="linked in"
            />
          </a>
        </div>
      </div>
    </>
  );
}
