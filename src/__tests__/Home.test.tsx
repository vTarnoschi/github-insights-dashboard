import { render, screen } from "@testing-library/react";

import Home from "@/app/page";

describe("Home Page", () => {
  it("should render the 'SearchBar'", () => {
    render(<Home />);

    expect(
      screen.getByPlaceholderText(/Buscar usuário do GitHub.../i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Buscar/i)).toBeInTheDocument();
  });
});
