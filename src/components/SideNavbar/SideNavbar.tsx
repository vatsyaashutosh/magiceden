import { NavbarContainer, NbContainer, NbContainer0 } from "./styled";

import { SIdeNavbarElements } from "./SIdeNavbarElements";
import { data, data2 } from "./api";
import { SNbComponent } from "./SNbComponent";
import { useState } from "react";

export const SideNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <NavbarContainer>
      <NbContainer0>
        {data.map((ele) => (
          <SIdeNavbarElements
            toggle={toggle}
            setToggle={setToggle}
            key={ele.id}
            {...ele}
          />
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
