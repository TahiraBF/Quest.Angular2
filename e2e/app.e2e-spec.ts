import { SymClientPage } from './app.po';

describe('sym-client App', () => {
  let page: SymClientPage;

  beforeEach(() => {
    page = new SymClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
