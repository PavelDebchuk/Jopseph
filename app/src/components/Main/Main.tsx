import { FC } from "react";
import Informations from "../Informations";
import { MainBlock } from "./Main.styled";
import Container from "components/Container";

const Main: FC = () => {
	return (
		<>
			<MainBlock>
				<Container>
					<Informations />
				</Container>
			</MainBlock>
		</>
	);
};

export default Main;
