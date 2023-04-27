import { FC } from "react";
import { FooterBlock, AddressLink, Privacy } from "./Footer.styled";
import instagram from "../images/instagram.png";
import facebook from "../images/Vector.png";
const Footer: FC = () => {
	return (
		<FooterBlock>
			<AddressLink>
				<Privacy href='https://facebook.com'>
					<img src={facebook} alt='facebook'></img>
				</Privacy>
				<Privacy href='https://instagram.com'>
					<img src={instagram} alt='instagram'></img>
				</Privacy>
			</AddressLink>

			<Privacy href='https:/google.com'>Політика конфіденційності</Privacy>
		</FooterBlock>
	);
};

export default Footer;
