import { NavIcon0, NbDiv, NbSpan } from "./styled";
interface Props {
  id: number;
  name: string;
  icon: string;
}

export const SNbComponent = ({ name, icon }: Props) => {
  return (
    <NbDiv>
      <NavIcon0 src={icon} />
      <NbSpan>{name}</NbSpan>
    </NbDiv>
  );
};
