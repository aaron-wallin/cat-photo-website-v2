import { CatPhotoWebsitePage } from './app.po';

describe('cat-photo-website App', () => {
  let page: CatPhotoWebsitePage;

  beforeEach(() => {
    page = new CatPhotoWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
