// src/lib/__tests__/Carousel.test.ts
import { render, fireEvent, screen, cleanup } from "@testing-library/svelte";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import CarouselHost, { type Item } from "./CarouselHost.svelte";

describe("Carousel", () => {
  const mockItems: Item[] = [{ title: "Slide 1" }, { title: "Slide 2" }, { title: "Slide 3" }];

  beforeEach(() => {
    if (!("scrollTo" in HTMLElement.prototype)) {
      // @ts-expect-error - jsdom may not implement scrollTo on elements
      HTMLElement.prototype.scrollTo = () => {};
    }

    vi.spyOn(HTMLElement.prototype, "scrollTo").mockImplementation(() => {});

    vi.spyOn(globalThis, "requestAnimationFrame").mockImplementation((cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    });

    vi.spyOn(globalThis, "cancelAnimationFrame").mockImplementation(() => {});
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("renders items and region label", () => {
    render(CarouselHost, { props: { items: mockItems, ariaLabel: "Carousel" } });
    expect(screen.getByLabelText("Carousel")).toBeTruthy();
    expect(screen.getByText("Slide 1")).toBeTruthy();
  });

  it("hides arrows/dots when no items", () => {
    render(CarouselHost, { props: { items: [] } });
    expect(screen.getByLabelText("Carousel")).toBeTruthy();
    expect(screen.queryByLabelText("Next slide")).toBeNull();
    expect(screen.queryAllByLabelText(/Go to slide/)).toHaveLength(0);
  });

  it("merges external class onto scroll container", () => {
    const { container } = render(CarouselHost, { props: { items: mockItems, class: "custom" } });
    const region = container.querySelector('[role="region"]') as HTMLElement;
    expect(region.className).toContain("custom");
  });

  it("advances active dot when next clicked", async () => {
    render(CarouselHost, { props: { items: mockItems } });
    const next = screen.getByLabelText("Next slide");
    await fireEvent.click(next);

    const dots = screen.getAllByLabelText(/Go to slide/);
    expect(dots[1].classList.contains("active")).toBe(true);
  });

  it("goes back when previous clicked", async () => {
    render(CarouselHost, { props: { items: mockItems } });
    await fireEvent.click(screen.getByLabelText("Next slide"));
    await fireEvent.click(screen.getByLabelText("Previous slide"));

    const dots = screen.getAllByLabelText(/Go to slide/);
    expect(dots[0].classList.contains("active")).toBe(true);
  });

  it("navigates to index when dot clicked", async () => {
    render(CarouselHost, { props: { items: mockItems } });
    const dots = screen.getAllByLabelText(/Go to slide/);
    await fireEvent.click(dots[2]);
    expect(dots[2].classList.contains("active")).toBe(true);
  });

  it("hides arrows when showArrows=false", () => {
    render(CarouselHost, { props: { items: mockItems, showArrows: false } });
    expect(screen.queryByLabelText("Next slide")).toBeNull();
    expect(screen.queryByLabelText("Previous slide")).toBeNull();
  });

  it("hides dots when showDots=false", () => {
    render(CarouselHost, { props: { items: mockItems, showDots: false } });
    expect(screen.queryAllByLabelText(/Go to slide/)).toHaveLength(0);
  });

  it("hides arrows/dots for single item", () => {
    render(CarouselHost, { props: { items: [mockItems[0]] } });
    expect(screen.queryByLabelText("Next slide")).toBeNull();
    expect(screen.queryByLabelText(/Go to slide/)).toBeNull();
  });
});
