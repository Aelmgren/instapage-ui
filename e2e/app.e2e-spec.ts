import { InstapageUiPage } from './app.po';

describe('instapage-ui App', () => {
  let page: InstapageUiPage;

  beforeEach(() => {
    page = new InstapageUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
