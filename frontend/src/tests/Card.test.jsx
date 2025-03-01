import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from 'vitest';
import { createMemoryRouter, RouterProvider, MemoryRouter } from "react-router";
import Card from "../components/Card/index.jsx";

describe("Card component", () => {
  const cardProps = {
    title: "Beautiful Apartment",
    image: "https://example.com/image.jpg",
    id: "123",
  };

  it("should display the correct title and image", () => {
    render(
      <MemoryRouter>
        <Card {...cardProps} />
      </MemoryRouter>
    );

    const title = screen.getByRole("heading", { name: /beautiful apartment/i });
    const image = screen.getByRole("img", { name: /beautiful apartment/i });

    expect(title).toBeInTheDocument();
    expect(image).toHaveAttribute("src", cardProps.image);
    expect(image).toHaveAttribute("alt", cardProps.title);
  });

  it("should have the correct link", () => {
    render(
      <MemoryRouter>
        <Card {...cardProps} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /beautiful apartment/i });
    expect(link).toHaveAttribute("href", `/accommodation/${cardProps.id}`);
  });

  it("should navigate to the correct URL on click", async () => {
    const routes = [
      { path: "/", element: <Card title="Beautiful Apartment" image="https://example.com/image.jpg" id="123" /> },
      { path: "/accommodation/:id", element: <div>Accommodation Page</div> }
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/"] });
  
    render(<RouterProvider router={router} />);
  
    const link = screen.getByRole("link", { name: /beautiful apartment/i });
    fireEvent.click(link);
  
    expect(router.state.location.pathname).toBe("/accommodation/123");
  });
});