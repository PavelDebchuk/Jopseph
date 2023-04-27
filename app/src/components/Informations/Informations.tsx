import { FC } from "react";
import { SearchWindov, InfoTitle, InfoData } from "./Informtions.styled";

const Informations: FC = () => {
	return (
		<div>
			<SearchWindov />
			<InfoTitle>Свята Меса</InfoTitle>
			<InfoData>
				<span>Неділя</span> 11:00
			</InfoData>
			<InfoData>
				<span>Пятниця</span> 11:00
			</InfoData>
			<InfoTitle>Контакти</InfoTitle>
			<InfoData>
				<span>о.Микола Невський</span>
			</InfoData>
			<InfoData>
				<a href='tel:+380999999999'>+38 (099) 999-99-99</a>
			</InfoData>
			<InfoData>
				<a href='mailto:st.joseph@gmail.com'>Email: st.joseph@gmail.com</a>
			</InfoData>
		</div>
	);
};

export default Informations;
