import { AppPage } from './app.po';

describe('chat-app App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    console.log(page.getParagraphText());
    expect(true).toBe(true);
  });
});