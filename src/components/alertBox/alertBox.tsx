import React from "react";
import Logo from "/logo.svg";
import { AlertBoxContainer } from "./alertBox.styled";

type AlertBoxProps = {
  show: boolean;
  children: React.ReactNode;
};

export default function AlertBox({
  children,
  show,
}: AlertBoxProps): React.JSX.Element {
  return (
    <>
      <AlertBoxContainer className={show ? "show" : "hide"}>
        <img src={Logo} className="logo" alt="Filmlover logo" />
        <p>{children}</p>
      </AlertBoxContainer>
    </>
  );
}
