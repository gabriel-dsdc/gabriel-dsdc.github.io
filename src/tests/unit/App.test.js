import { render, screen, waitFor } from "@testing-library/react";
import App from "../../App";
import { MemoryRouter } from "react-router-dom";
import reposList from "../mocks/repos.mock";
import userEvent from "@testing-library/user-event";

describe("Full App Test", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    jest.spyOn(global, "fetch").mockResolvedValue({
      json: jest.fn().mockResolvedValue(reposList),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("Renders correcly", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const repo = await screen.findByRole("heading", { name: /pixels art/i });
    userEvent.selectOptions(
      await screen.findByRole("combobox", { name: /select stack/i }),
      "react"
    );
    await waitFor(() => {
      expect(repo).not.toBeInTheDocument();
    });
  });
});
