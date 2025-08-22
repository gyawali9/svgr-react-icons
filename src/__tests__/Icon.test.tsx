import { render, screen } from "@testing-library/react";
import Icon from "../components/Icon";
import SampleIcon from "../../example/src/assets/Sample.svg?react";
import { vi } from "vitest";

describe("Icon", () => {
  it("renders SVGR component with blue fill", () => {
    render(<Icon src={SampleIcon} size={24} fill="blue" alt="Test Icon" />);
    expect(screen.getByRole("img", { name: "Test Icon" })).toHaveStyle(
      "fill: blue"
    );
  });

  it("renders URL-based SVG with green fill", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        text: () =>
          Promise.resolve(
            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="green" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>'
          ),
      } as Response)
    );
    render(
      <Icon
        src="http://localhost:3000/assets/Sample.svg"
        size={24}
        fill="green"
        isUrl
        alt="Test Icon"
      />
    );
    expect(
      await screen.findByRole("img", { name: "Test Icon" })
    ).toBeInTheDocument();
  });
});
