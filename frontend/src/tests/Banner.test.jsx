import { render, screen } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import Banner from "../components/Banner/index.jsx";

describe("Banner", () => {
  it("renders with image and title", () => {
    const image = "https://example.com/banner.jpg";
    const title = "Kasa";

    render(<Banner image={image} title={title} />);

    // Vérifier que l'image est bien présente avec le bon src
    const img = screen.getByAltText("home-banner");
    expect(img).toHaveAttribute("src", image);

    // Vérifier que le titre est bien affiché
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent(title);
  });

  it("renders only with image when no title is passed", () => {
    const image = "https://example.com/banner.jpg";

    render(<Banner image={image} />);

    // Vérifier que l'image est présente
    const img = screen.getByAltText("home-banner");
    expect(img).toHaveAttribute("src", image);

    // Vérifier qu'il n'y a pas de titre
    const heading = screen.queryByRole("heading", { level: 1 });
    expect(heading).toBeNull();
  });
});
