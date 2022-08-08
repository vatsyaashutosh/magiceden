import { NavbarContainer, NbContainer, NbContainer0 } from "./styled";

import { SIdeNavbarElements } from "./SIdeNavbarElements";
import { data, data2 } from "./api";
import { SNbComponent } from "./SNbComponent";

export const SideNavbar = () => {
  return (
    <NavbarContainer>
      <NbContainer0>
        {data.map((ele) => (
          <SIdeNavbarElements key={ele.id} {...ele} />
        ))}
      </NbContainer0>
      <NbContainer>
        {data2.map((ele) => (
          <SNbComponent key={ele.id} {...ele} />
        ))}
      </NbContainer>
    </NavbarContainer>
  );
};
