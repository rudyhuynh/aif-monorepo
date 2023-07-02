import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ImageList } from "../ImageList";
import { MockGetPhotoResult } from "./mockData";
import { MockApp } from "../../../../../test/MockApp";

// Mock the PhotoService to return mock data.
jest.mock("../../../../services/PhotoService", () => {
  return {
    fetchPhotos() {
      return new Promise((resolve) => resolve(MockGetPhotoResult));
    },
  };
});

describe("ImageList", () => {
  test("load items AND click on ID", async () => {
    // render
    render(
      <MockApp>
        <ImageList />
      </MockApp>
    );

    // wait for data shows up on table
    await waitFor(() => {
      const tbodyELement = screen.getByTestId("tbody");
      expect(tbodyELement.childNodes.length).toBe(
        MockGetPhotoResult.data.length
      );
    });

    // click on thumbnail
    await userEvent.click(screen.getByTestId("IDCell-1"));

    // wait for full image shows up
    await waitFor(() => {
      const imgElement = screen.getByTestId("full-image") as HTMLImageElement;
      const imageUrl = MockGetPhotoResult.data[0].url;
      expect(imgElement.src).toBe(imageUrl);
    });
  });
});
