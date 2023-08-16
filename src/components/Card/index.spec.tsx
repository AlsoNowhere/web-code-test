import { render } from "@testing-library/react";

import { ThemeProvider } from "styled-components";

import Card from ".";

import { theme } from "../../data/theme";

describe("Card Component", () => {
  it("renders successfully when preface is undefined", () => {
    expect(() =>
      render(<Card title="Some title" preface={undefined} />)
    ).not.toThrow();
  });

  it("renders successfully when id is undefined", () => {
    expect(() =>
      render(<Card title="Some title" id={undefined} />)
    ).not.toThrow();
  });

  it("renders the title that we send as a prop", () => {
    const title = "A title to test";
    const { container } = render(<Card title={title} />);
    expect(container.querySelector("h2").textContent).toBe(title);
  });

  it("renders without link when no id is passed", () => {
    const { container } = render(<Card title="Some title" />);
    expect(container.querySelector("a")).toBe(null);
  });

  it("renders with link when id is passed", () => {
    const id = "606#";
    const { container } = render(<Card title="Some title" id={id} />);
    const a = container.querySelector("a");
    expect(a).not.toBe(null);
    expect(a.getAttribute("href")).toBe(`/${id}`);
  });

  describe("large prop", () => {
    it("renders correct font size", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Card title="Some title" />
        </ThemeProvider>
      );

      const article = window
        .getComputedStyle(container.querySelector("article"))
        .getPropertyValue("font-size");
      const h2 = window
        .getComputedStyle(container.querySelector("article h2"))
        .getPropertyValue("font-size");

      expect(article).toBe("16px");
      expect(h2).toBe("21px");
    });

    it("renders a 'large' style Card when passed the prop 'large'", () => {
      const { container } = render(
        <ThemeProvider theme={theme}>
          <Card title="Some title" large />
        </ThemeProvider>
      );

      const article = window
        .getComputedStyle(container.querySelector("article"))
        .getPropertyValue("font-size");
      const h2 = window
        .getComputedStyle(container.querySelector("article h2"))
        .getPropertyValue("font-size");

      expect(article).toBe("18px");
      expect(h2).toBe("25px");
    });
  });
});
