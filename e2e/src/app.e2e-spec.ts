import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should work', () => {
    page.navigateTo();
    expect(page).toBeTruthy();
  });

  /*
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to volvo-valor!');
  });
  */
});
