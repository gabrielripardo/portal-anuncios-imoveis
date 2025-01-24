import { render, screen } from "@testing-library/react";
import FormSearch from "../components/FormSearch";

describe("Header Component", () => {
  it("renders correctly", () => {
    render(<FormSearch />);
    expect(screen.getByText("Localização")).toBeInTheDocument();
    expect(screen.getByText("Nº de Quartos")).toBeInTheDocument();

    //Botão de pesquisa
    const buttonElement = screen.getByTestId("btn-search");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });
});
